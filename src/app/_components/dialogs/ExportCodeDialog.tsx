"use client";

import { ExportCodeForm } from "@/app/_components/forms/ExportCodeForm";
import { useDialogsStore } from "@/store/use-dialogs-store";
import { ResponsiveDialog } from "@/ui/components/organisms/ResponsiveDialog";

export const ExportCodeDialog = () => {
    const isOpen = useDialogsStore((s) => s.isExportOpen);
    const setIsOpen = useDialogsStore((s) => s.setIsExportOpen);
    return (
        <ResponsiveDialog
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            title="Export File"
            description="Export the current code with an optional custom file name."
        >
            <ExportCodeForm />
        </ResponsiveDialog>
    );
};
