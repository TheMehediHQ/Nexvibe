/**
 * Verify a Cloudflare Turnstile token server-side.
 *
 * @see https://developers.cloudflare.com/turnstile/get-started/server-side-rendering/
 */
export interface TurnstileVerificationResult {
  success: boolean;
  error?: string;
}

export async function verifyTurnstileToken(
  token: string | undefined,
  ip?: string
): Promise<TurnstileVerificationResult> {
  const secretKey = process.env.TURNSTILE_SECRET_KEY;

  if (!secretKey) {
    console.warn(
      "[turnstile] TURNSTILE_SECRET_KEY is not set. Skipping verification."
    );
    return { success: true };
  }

  if (!token) {
    return { success: false, error: "CAPTCHA token is missing" };
  }

  const params = new URLSearchParams({
    secret: secretKey,
    response: token,
    ...(ip ? { remoteip: ip } : {}),
  });

  try {
    const response = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        method: "POST",
        body: params,
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );

    const data = await response.json();

    if (data.success) {
      return { success: true };
    }

    return {
      success: false,
      error: data["error-codes"]?.[0] ?? "CAPTCHA verification failed",
    };
  } catch (error) {
    console.error("[turnstile] Verification error:", error);
    return { success: false, error: "CAPTCHA verification failed" };
  }
}
