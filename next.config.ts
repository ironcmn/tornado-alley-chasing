import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/chase-history",
        destination: "/about-me",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
