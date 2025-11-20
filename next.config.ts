import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,

  eslint: {
    // You can leave this true (recommended) or disable during CI builds if needed
    ignoreDuringBuilds: false,
  },
  typescript: {
    // Only ignore type errors if you absolutely need to
    ignoreBuildErrors: false,
  },
};

export default nextConfig;
