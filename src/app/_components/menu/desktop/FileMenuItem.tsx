"use client";

import { DialogsActions, useDialogsActions } from "@/store/dialogs-store";
import {
    DropdownMenuItem,
    SubmenuBlock,
} from "@/ui/components/organisms/DropdownMenu";
import { FileIcon, FileInputIcon, FileOutputIcon, IconType } from "@/ui/icons";
import { FC } from "react";

const DialogBlock: FC<{
    title: string;
    icon: IconType;
    storeActionKey: keyof DialogsActions;
}> = ({ title, icon: Icon, storeActionKey }) => {
    const setOpen = useDialogsActions()[storeActionKey];
    return (
        <DropdownMenuItem onClick={() => setOpen(true)}>
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
