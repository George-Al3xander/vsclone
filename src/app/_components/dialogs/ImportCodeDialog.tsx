"use client";

import { ImportCodeForm } from "@/app/_components/forms/ImportCodeForm";
import { LANGUAGES_CONFIG } from "@/configs/languages";
import { dialogsStore } from "@/store/dialogs-store";
import { ResponsiveDialog } from "@/ui/components/organisms/ResponsiveDialog";

const acceptString = Object.values(LANGUAGES_CONFIG)
    .map(({ extension }) => extension)
    .join(", ");

export const ImportCodeDialog = () => {
    const isOpen = dialogsStore((s) => s.isImportOpen);
    const setIsOpen = dialogsStore((s) => s.setIsImportOpen);
    return (
        <ResponsiveDialog
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            title="Import File"
            description={`Supported extensions: ${acceptString}.`}
        >
            <ImportCodeForm />
        </ResponsiveDialog>
    );
};
