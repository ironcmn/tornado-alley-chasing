import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  distDir: ".next-build",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
