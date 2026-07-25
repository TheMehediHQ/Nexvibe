// Simple in-memory rate limiter

interface RateLimitRecord {
  count: number;
  resetTime: number;
}

const tracker = new Map<string, RateLimitRecord>();

/**
 * Basic in-memory rate limiter for serverless environment.
 * Will work perfectly for persistent/local node instances.
 * For serverless, it acts as a container-level guard.
 */
export function rateLimit(ip: string, limit = 3, windowMs = 60 * 1000) {
  const now = Date.now();
  const record = tracker.get(ip);

  // Clean up old expired entries from memory once in a while
  if (tracker.size > 10000) {
    for (const [key, val] of tracker.entries()) {
      if (now > val.resetTime) {
        tracker.delete(key);
      }
    }
  }

  if (!record) {
    tracker.set(ip, { count: 1, resetTime: now + windowMs });
    return {
      success: true,
      limit,
      remaining: limit - 1,
      reset: now + windowMs,
    };
  }

  if (now > record.resetTime) {
    tracker.set(ip, { count: 1, resetTime: now + windowMs });
    return {
      success: true,
      limit,
      remaining: limit - 1,
      reset: now + windowMs,
    };
  }

  if (record.count >= limit) {
    return {
      success: false,
      limit,
      remaining: 0,
      reset: record.resetTime,
    };
  }

  record.count += 1;
  return {
    success: true,
    limit,
    remaining: limit - record.count,
    reset: record.resetTime,
  };
}
