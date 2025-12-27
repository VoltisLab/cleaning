import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'd4frp46yandr8.cloudfront.net',
      },
    ],
    unoptimized: true, // Disable image optimization to preserve original quality
  },
};

export default nextConfig;
