"use client";

import { ExportCodeForm } from "@/app/_components/forms/ExportCodeForm";
import { dialogsStore } from "@/store/dialogs-store";
import { ResponsiveDialog } from "@/ui/components/organisms/ResponsiveDialog";

export const ExportCodeDialog = () => {
    const isOpen = dialogsStore((s) => s.isExportOpen);
    const setIsOpen = dialogsStore((s) => s.setIsExportOpen);
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
