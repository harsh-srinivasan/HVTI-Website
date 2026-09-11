import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allow access from local network devices (e.g., mobile phones, tablets) during development
  allowedDevOrigins: [
    "192.168.*.*",
    "192.168.1.*",
    "10.*.*.*",
    "172.16.*.*",
    "172.20.*.*",
    "127.0.0.1",
    "localhost",
    "*.local",
  ],
  images: {
    qualities: [75, 85, 90, 95],
  },
};

export default nextConfig;

