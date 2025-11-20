/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["us-east-1.xata.sh", "us-east-1.storage.xata.sh"],
  },
  transpilePackages: ["three"],
  webpack: (config) => {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      "supports-color": false, // 👈 Fix for react-markdown / remark / micromark
    };
    return config;
  },
};

module.exports = nextConfig;
