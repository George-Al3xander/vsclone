"use client";

import { useDialogsStore } from "@/store/use-dialogs-store";
import {
    DropdownMenuItem,
    SubmenuBlock,
} from "@/ui/components/organisms/DropdownMenu";
import { FileIcon, FileInputIcon, FileOutputIcon, IconType } from "@/ui/icons";
import { FC } from "react";

const DialogBlock: FC<{
    title: string;
    icon: IconType;
    storeActionKey: "setIsExportOpen" | "setIsImportOpen";
}> = ({ title, icon: Icon, storeActionKey }) => {
    const setIsOpen = useDialogsStore((s) => s[storeActionKey]);
    return (
        <DropdownMenuItem onClick={() => setIsOpen(true)}>
            <Icon />
            <span>{title}</span>
        </DropdownMenuItem>
    );
};

export const FileMenuItem = () => {
    return (
        <SubmenuBlock triggerIcon={FileIcon} triggerTitle="File">
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
        </SubmenuBlock>
    );
};
