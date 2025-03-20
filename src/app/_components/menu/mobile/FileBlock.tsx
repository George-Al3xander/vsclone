"use client";

import { DialogsActions, useDialogsActions } from "@/store/dialogs-store";
import {
    dropdownMenuItemBaseStyles,
    dropdownMenuLabelBaseStyles,
} from "@/ui/components/organisms/DropdownMenu";
import { SheetClose } from "@/ui/components/organisms/Sheet";
import { FileInputIcon, FileOutputIcon, IconType } from "@/ui/icons";
import { cn } from "@/utils/cn";
import { FC } from "react";

const DialogBlock: FC<{
    title: string;
    icon: IconType;
    storeActionKey: keyof DialogsActions;
}> = ({ title, icon: Icon, storeActionKey }) => {
    const setOpen = useDialogsActions()[storeActionKey];
    return (
        <SheetClose onClick={() => setOpen(true)} asChild>
            <li
                className={cn(
                    dropdownMenuItemBaseStyles,
                    "cursor-pointer rounded-none border-foreground text-base transition-all hover:border-r-4 hover:font-extrabold [&>svg]:size-5",
                )}
            >
                <Icon className="size-[20px]" />
                <span>{title}</span>
            </li>
        </SheetClose>
    );
};

export const FileBlock = () => {
    return (
        <div>
            <h3 className={cn(dropdownMenuLabelBaseStyles, "text-xl")}>File</h3>
            <ul>
                <DialogBlock
                    title="Import"
                    icon={FileInputIcon}
                    storeActionKey={"setIsImportOpen"}
                />
                <DialogBlock
                    title="Export"
                    icon={FileOutputIcon}
                    storeActionKey={"setIsExportOpen"}
                />
            </ul>
        </div>
    );
};
