"use client";

import { useDialogsStore } from "@/store/use-dialogs-store";
import {
    dropdownMenuItemBaseStyles,
    dropdownMenuLabelBaseStyles,
} from "@/ui/components/organisms/DropdownMenu";
import { SheetClose } from "@/ui/components/organisms/Sheet";
import { FileOutputIcon } from "@/ui/icons";
import { cn } from "@/utils/cn";

export const FileBlock = () => {
    const setOpen = useDialogsStore((s) => s.setIsExportOpen);
    return (
        <div>
            <h3 className={cn(dropdownMenuLabelBaseStyles, "text-xl")}>File</h3>
            <ul>
                <SheetClose onClick={() => setOpen(true)} asChild>
                    <li
                        className={cn(
                            dropdownMenuItemBaseStyles,
                            "cursor-pointer rounded-none border-foreground text-base transition-all hover:border-r-4 hover:font-extrabold [&>svg]:size-5",
                        )}
                    >
                        <FileOutputIcon className="size-[20px]" />
                        <span>Export</span>
                    </li>
                </SheetClose>
            </ul>
        </div>
    );
};
