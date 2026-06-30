import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/ai-base-git',
  images: {
    unoptimized: true,
  }
};

export default nextConfig;
