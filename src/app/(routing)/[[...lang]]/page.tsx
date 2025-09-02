import { DesktopView } from "@/app/(features)/(desktop)/_components/DesktopView";
import { MobileView } from "@/app/(features)/(mobile)/_components/MobileView";
import { LANGUAGES_CONFIG } from "@/configs/languages";
import { metadataConfig } from "@/configs/metadata";
import { PageProps } from "@/types/app";
import { Metadata } from "next";

const LANGUAGES = Object.keys(LANGUAGES_CONFIG) as [string, ...string[]];

export const generateMetadata = async ({
    params,
}: {
    params: Promise<{ lang?: readonly string[] }>;
}): Promise<Metadata> => {
    const { lang = LANGUAGES } = await params;
    const language = (lang[0] || "javascript") as keyof typeof LANGUAGES_CONFIG;
    const { title, description } = metadataConfig;

    return {
        title: `${LANGUAGES_CONFIG[language]?.title || "Online"} Compiler (Editor) - ${title}`,
        description,
        authors: { name: "Heorhii Valuiskyi" },
    };
};

export default function Home({}: PageProps) {
    return (
        <>
            <DesktopView />
            <MobileView />
        </>
    );
}
