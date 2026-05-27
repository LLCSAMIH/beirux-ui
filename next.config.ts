import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { hostname: "images.unsplash.com" },
      { hostname: "bykuknqwpctcjrowysyf.supabase.co" },
      { hostname: "pbs.twimg.com" },
    ],
  },
};

export default nextConfig;
