"use client";

import { ScrollArea } from "@/ui/components/atoms/ScrollArea";
import { cn } from "@/utils/cn";
import Link from "next/link";
import { useLanguages } from "../_hooks/use-languages";

export const LanguageSelectionList = () => {
    const languages = useLanguages();

    return (
        <ScrollArea className="h-[calc(100vh-8rem)] [&_div]:h-full">
            <ul className="flex h-full flex-col justify-between gap-4 p-2">
                {languages.map(
                    ({ language, title, version, isCurrent, icon: Icon }) => (
                        <li key={language}>
                            <Link
                                title={`${title} ${version}`}
                                href={"/" + language}
                                target="_blank"
                                className={cn(
                                    "flex max-w-[4rem] scale-75 items-center gap-2 rounded border-white p-2 opacity-40 transition-all hover:scale-100 hover:cursor-pointer hover:border-2 hover:opacity-100",

                                    {
                                        "pointer-events-none scale-100 border-2 opacity-100":
                                            isCurrent,
                                    },
                                )}
                            >
                                <Icon className="size-[20px] sm:mx-auto sm:size-[35px]" />
                                <span className="sr-only">
                                    Go to {title} compiler
                                </span>
                            </Link>
                        </li>
                    ),
                )}
            </ul>
        </ScrollArea>
    );
};
