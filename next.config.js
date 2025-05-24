// import type { NextConfig } from "next";

const nextConfig = {
  /* config options here */
  images: {
    domains: ["utfs.io", "media.geeksforgeeks.org"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "utfs.io",
        // hostname: "<APP_ID>.ufs.sh",
        pathname: "/f/**",
      },
      {
        protocol: "https",
        hostname: "media.geeksforgeeks.org", // Added new hostname
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
