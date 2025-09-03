import { env } from "@/configs/env";
import { MetadataRoute } from "next";

const robots = (): MetadataRoute.Robots => {
    return {
        rules: {
            userAgent: "*",
            allow: "/",
        },
        sitemap: `${env.NEXT_PUBLIC_BASE_URL}/sitemap.xml`,
    };
};

export default robots;
