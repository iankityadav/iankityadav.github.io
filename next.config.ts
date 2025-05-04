import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  distDir: "out",
  assetPrefix: "https://iankityadav.github.io/",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
