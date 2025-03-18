"use client";

import { useDialogsStore } from "@/store/use-dialogs-store";
import {
    DropdownMenuItem,
    SubmenuBlock,
} from "@/ui/components/organisms/DropdownMenu";
import { FileIcon, FileOutputIcon } from "@/ui/icons";

const ExportBlock = () => {
    const setIsOpen = useDialogsStore((s) => s.setIsExportOpen);
    return (
        <DropdownMenuItem onClick={() => setIsOpen(true)}>
            <FileOutputIcon />
            <span>Export</span>
        </DropdownMenuItem>
    );
};

export const FileMenuItem = () => {
    return (
        <SubmenuBlock triggerIcon={FileIcon} triggerTitle="File">
            <ExportBlock />
        </SubmenuBlock>
    );
};
