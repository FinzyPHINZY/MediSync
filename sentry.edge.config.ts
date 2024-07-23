import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://db8461af6373fcda8fa87cd4626297c9@o4507493320687616.ingest.de.sentry.io/4507493322260560",

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for tracing.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,

  // ...

  // Note: if you want to override the automatic release value, do not set a
  // `release` value here - use the environment variable `SENTRY_RELEASE`, so
  // that it will also get attached to your source maps
});