/** @type {import('next').NextConfig} */
import { withSentryConfig } from "@sentry/nextjs";

const nextConfig = {
  webpack(config) {
    config.resolve.fallback = { ...config.resolve.fallback, fs: false };
    return config;
  },
};

// export default nextConfig;

// Make sure adding Sentry options is the last code to run before exporting
export default withSentryConfig(nextConfig, {
  org: "100devs-2a",
  project: "javascript-nextjs",
  hideSourceMaps: true,
  widenClientFileUpload: true,
  tunnelRoute: "/monitoring-tunnel",

  // An auth token is required for uploading source maps.
  authToken: process.env.SENTRY_AUTH_TOKEN,

  silent: false, // Can be used to suppress logs
});
