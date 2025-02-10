const { withNextOnPages } = require("@cloudflare/next-on-pages");

module.exports = withNextOnPages({
  reactStrictMode: true,
  experimental: {
    appDir: true, // If using Next.js 13+ with App Router
  },
});