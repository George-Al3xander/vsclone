import { env } from "@/configs/env";
import { LANGUAGES_CONFIG } from "@/configs/languages";
import { MetadataRoute } from "next";

const sitemap = (): MetadataRoute.Sitemap => {
    const languageEntries: MetadataRoute.Sitemap = Object.keys(
        LANGUAGES_CONFIG,
    ).map((l) => ({
        url: `${env.NEXT_PUBLIC_BASE_URL}/${l}`,
    }));

    return [{ url: `${env.NEXT_PUBLIC_BASE_URL}` }, ...languageEntries];
};

export default sitemap;
