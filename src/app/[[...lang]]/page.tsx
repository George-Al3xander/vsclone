import { LANGUAGES_CONFIG } from "@/configs/languages";
import { metadataConfig } from "@/configs/metadata";
import { PageProps } from "@/types/app";
import StateTest from "@/ui/components/StateTest";
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

type HomePageProps = PageProps<{ lang?: string[] }>;

export default async function Home({ params }: HomePageProps) {
    const [lang] = (await params).lang || "javascript";

    return (
        <div>
            {lang}
            <StateTest />
        </div>
    );
}
