import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: __dirname,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "regex-playground-one.vercel.app",
      },
    ],
  },
};

export default nextConfig;
