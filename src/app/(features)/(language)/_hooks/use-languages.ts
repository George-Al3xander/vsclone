import { LANGUAGES_CONFIG } from "@/configs/languages";
import {
    CppIcon,
    CSharpIcon,
    JavaIcon,
    JavaScriptIcon,
    PhpIcon,
    PythonIcon,
    TypeScriptIcon,
} from "@/ui/icons";
import { IconType } from "react-icons";
import { useLanguageParam } from "./use-language-param";

export const ICONS = {
    javascript: JavaScriptIcon,
    typescript: TypeScriptIcon,
    python: PythonIcon,
    java: JavaIcon,
    csharp: CSharpIcon,
    php: PhpIcon,
    cpp: CppIcon,
} as const;

export const useLanguages = (): ({
    language: string;
    isCurrent: boolean;
    icon: IconType;
} & (typeof LANGUAGES_CONFIG)[keyof typeof LANGUAGES_CONFIG])[] => {
    const currentLanguage = useLanguageParam();

    return Object.entries(LANGUAGES_CONFIG).map(([lang, fields]) => {
        const icon = ICONS[lang as keyof typeof LANGUAGES_CONFIG];
        const isCurrent = Boolean(currentLanguage === lang);

        return { language: lang, icon, isCurrent, ...fields };
    });
};
