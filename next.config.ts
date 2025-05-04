import type { NextConfig } from "next";
import path from "path";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  distDir: "out",
  assetPrefix: isProd ? `https://${path.basename(__dirname)}` : "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
