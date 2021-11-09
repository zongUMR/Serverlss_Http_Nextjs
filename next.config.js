const isProd = process.env.NODE_ENV === "production";

const STATIC_URL = "cos url";

module.exports = {
  env: {
    STATIC_URL: isProd ? STATIC_URL : "",
  },
  assetPrefix: isProd ? STATIC_URL : "",
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
};
