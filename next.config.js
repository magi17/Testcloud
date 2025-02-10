const { withNextOnPages } = require('@cloudflare/next-on-pages');

module.exports = withNextOnPages({
  reactStrictMode: true,
  experimental: {
    appDir: true, // Enable if using App Router
  },
});
