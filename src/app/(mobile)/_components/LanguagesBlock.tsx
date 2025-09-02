"use client";

import { useLanguages } from "@/app/(language)";
import { dropdownMenuItemBaseStyles } from "@/ui/components/organisms/DropdownMenu";
import { cn } from "@/utils/cn";
import Link from "next/link";

export const LanguagesBlock = () => {
    const languages = useLanguages();

    return (
        <ul className="flex flex-col gap-4">
            {languages.map(
                ({ language, title, isCurrent, version, icon: Icon }) => (
                    <li key={language}>
                        <Link
                            title={`${title} (${version})`}
                            href={"/" + language}
                            target="_blank"
                            className={cn(
                                dropdownMenuItemBaseStyles,
                                "cursor-pointer rounded-none border-r-4 border-background text-base opacity-60 transition-all hover:border-foreground hover:font-bold hover:opacity-100 [&>svg]:size-5",
                                {
                                    "pointer-events-none border-foreground font-extrabold opacity-100":
                                        isCurrent,
                                },
                            )}
                        >
                            <Icon />
                            <span>
                                {title} ({version})
                            </span>
                        </Link>
                    </li>
                ),
            )}
        </ul>
    );
};
