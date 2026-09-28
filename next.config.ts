import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // ADR-0001: static export, no server runtime in v1. Directory-style routes
  // (out/zh/index.html) so every static host serves /zh without rewrites.
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
