import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Many gallery frames per page — prefer AVIF, fall back to WebP.
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
