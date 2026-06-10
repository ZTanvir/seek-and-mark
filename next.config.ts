import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      new URL(
        "https://mwwersnziqamcoulatdp.supabase.co/storage/v1/object/public/seek_and_mark/robotcity/robot-city-thumbnail.webp",
      ),
    ],
  },
};

export default nextConfig;
