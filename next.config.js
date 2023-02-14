/** @type {import('next').NextConfig} */
const BASE_URL = "https://dummyjson.com/products";

const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/api/:id",
        destination: `${BASE_URL}/:id`,
      },
    ];
  },
};

module.exports = nextConfig;
