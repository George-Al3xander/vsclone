import { LANGUAGES_CONFIG } from "@/configs/languages";
import type { Metadata } from "next";

type LanguageKey = keyof typeof LANGUAGES_CONFIG;

export const baseMetadata: Metadata = {
    title: "VSClone",
    description: "Effortless web-based code compiler",
    authors: { name: "Heorhii Valuiskyi" },
};

export const generateMetadata = async ({
    params,
}: {
    params: Promise<{ lang?: readonly string[] }>;
}): Promise<Metadata> => {
    const { lang } = await params;

    const languageKey = (lang?.[0] ?? "javascript") as LanguageKey;
    const isValidLanguage = languageKey in LANGUAGES_CONFIG;
    const pageTitle = isValidLanguage
        ? LANGUAGES_CONFIG[languageKey].title
        : "Online";

    return {
        ...baseMetadata,
        title: `${pageTitle} Compiler (Editor) - ${baseMetadata.title}`,
    };
};
