import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/favicon.ico",
        destination: "/",
        permanent: false, // Можно поставить true, если favicon точно не нужен
      },
    ]
  },
};

export default nextConfig;
