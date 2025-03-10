import { useParams } from "next/navigation";

export const useLanguageParam = () => {
    const { lang } = useParams<{ lang: string[] }>();
    const [language] = lang || ["javascript"];

    return language || "javascript";
};
