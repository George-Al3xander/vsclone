"use client";

import { useParams } from "next/navigation";

const FALLBACK_LANGUAGE = "javascript";

export const useLanguageParam = () => {
    const params = useParams();
    const [language] = (params?.lang as string[] | undefined) || [
        FALLBACK_LANGUAGE,
    ];

    return language || FALLBACK_LANGUAGE;
};
