import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    turbopack: {
        resolveAlias: { "@/*": "./src/*", "@/json/*": "./public/json/*" },
    },
};

export default nextConfig;
