"use client";

import { useLanguageParam } from "@/app/_hooks/use-language-param";
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
import { cn } from "@/utils/cn";
import Link from "next/link";

export const ICONS = {
    javascript: JavaScriptIcon,
    typescript: TypeScriptIcon,
    python: PythonIcon,
    java: JavaIcon,
    csharp: CSharpIcon,
    php: PhpIcon,
    cpp: CppIcon,
} as const;

export const LanguageSelectionList = () => {
    const currentLanguage = useLanguageParam();

    return (
        <ul
            className={cn(
                "flex flex-col gap-4 py-4",
                "sm:h-full sm:justify-between sm:p-2",
            )}
        >
            {Object.entries(LANGUAGES_CONFIG).map(
                ([lang, { title, version }]) => {
                    const Icon = ICONS[lang as keyof typeof LANGUAGES_CONFIG];
                    const isActive = Boolean(currentLanguage === lang);

                    return (
                        <li key={lang}>
                            <Link
                                title={`${title} ${version}`}
                                href={"/" + lang}
                                target="_blank"
                                className={cn(
                                    "flex items-center gap-2 border-white opacity-60 transition-all hover:cursor-pointer hover:border-r-4 hover:opacity-100",
                                    "hover:opacity-100 sm:max-w-[4rem] sm:scale-75 sm:rounded sm:p-2 sm:opacity-40 hover:sm:scale-100 hover:sm:border-2",
                                    {
                                        "pointer-events-none border-r-4 border-white opacity-100 sm:scale-100 sm:border-2 sm:opacity-100":
                                            isActive,
                                    },
                                )}
                            >
                                <Icon className="size-[20px] sm:mx-auto sm:size-[35px]" />
                                <span className="sm:hidden">
                                    {title} ({version})
                                </span>
                                <span className="sr-only">
                                    Go to {title} compiler
                                </span>
                            </Link>
                        </li>
                    );
                },
            )}
        </ul>
    );
};
