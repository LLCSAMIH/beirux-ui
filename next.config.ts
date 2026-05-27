import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      { hostname: "images.unsplash.com" },
      { hostname: "bykuknqwpctcjrowysyf.supabase.co" },
      { hostname: "pbs.twimg.com" },
    ],
  },
};

export default nextConfig;
