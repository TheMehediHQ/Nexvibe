import { Redis } from "@upstash/redis";
import { Ratelimit } from "@upstash/ratelimit";

// Lazy-init Redis client so we don't crash when env vars are missing
function createRedis() {
  const url = process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN;

  if (!url || !token) {
    console.warn(
      "[rate-limit] UPSTASH_REDIS_REST_URL or UPSTASH_REDIS_REST_TOKEN is not set. Rate limiting is disabled."
    );
    return null;
  }

  return new Redis({ url, token });
}

const redis = createRedis();

// 5 requests per 10 minutes per IP — generous enough for real users, tight
// enough to stop spam bots.
const ratelimit = redis
  ? new Ratelimit({
      redis,
      limiter: Ratelimit.slidingWindow(5, "10m"),
      prefix: "ratelimit",
    })
  : null;

export interface RateLimitResult {
  success: boolean;
  remaining: number;
  reset: number;
}

export async function checkRateLimit(
  identifier: string
): Promise<RateLimitResult> {
  if (!ratelimit) {
    // Rate limiting is disabled — allow everything
    return { success: true, remaining: 999, reset: 0 };
  }

  const result = await ratelimit.limit(identifier);

  return {
    success: result.success,
    remaining: result.remaining,
    reset: result.reset,
  };
}
