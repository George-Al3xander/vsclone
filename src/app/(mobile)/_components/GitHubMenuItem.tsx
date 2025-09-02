"use client";

import { GitHubLinkBase } from "@/app/(common)";
import { dropdownMenuItemBaseStyles } from "@/ui/components/organisms/DropdownMenu";
import { SheetClose } from "@/ui/components/organisms/Sheet";
import { cn } from "@/utils/cn";

export const GitHubMenuItem = () => {
    return (
        <SheetClose asChild>
            <GitHubLinkBase
                linkProps={{
                    className: cn(
                        dropdownMenuItemBaseStyles,
                        "cursor-pointer rounded-none border-foreground text-base transition-all hover:border-r-4 hover:font-extrabold [&>svg]:size-5",
                    ),
                }}
            />
        </SheetClose>
    );
};
