const DEFAULT_SITE_URL = "https://arthurreynet.com";

/**
 * Resolves the public site URL from NEXT_PUBLIC_SITE_URL.
 * Any missing or invalid value (e.g. "", "-", "localhost") falls back to the
 * default so the build never crashes on `new URL(...)`.
 */
function resolveSiteUrl(): string {
  const raw = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (raw) {
    try {
      return new URL(raw).origin;
    } catch {
      // invalid URL — fall back below
    }
  }
  return DEFAULT_SITE_URL;
}

export const SITE_URL = resolveSiteUrl();
