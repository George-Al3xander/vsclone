"use client";

import { useDialogsActions, useIsExportOpen } from "@/store/dialogs-store";
import { ResponsiveDialog } from "@/ui/components/organisms/ResponsiveDialog";
import { ExportCodeForm } from "./ExportCodeForm";

export const ExportCodeDialog = () => {
    const isOpen = useIsExportOpen();
    const { setIsExportOpen } = useDialogsActions();
    return (
        <ResponsiveDialog
            isOpen={isOpen}
            setIsOpen={setIsExportOpen}
            title="Export File"
            description="Export the current code with an optional custom file name."
        >
            <ExportCodeForm />
        </ResponsiveDialog>
    );
};
