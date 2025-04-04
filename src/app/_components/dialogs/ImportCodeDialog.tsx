"use client";

import { ImportCodeForm } from "@/app/_components/forms/ImportCodeForm";
import { LANGUAGES_CONFIG } from "@/configs/languages";
import { useDialogsActions, useIsImportOpen } from "@/store/dialogs-store";
import { ResponsiveDialog } from "@/ui/components/organisms/ResponsiveDialog";

const acceptString = Object.values(LANGUAGES_CONFIG)
    .map(({ extension }) => extension)
    .join(", ");

export const ImportCodeDialog = () => {
    const isOpen = useIsImportOpen();
    const { setIsImportOpen } = useDialogsActions();
    return (
        <ResponsiveDialog
            isOpen={isOpen}
            setIsOpen={setIsImportOpen}
            title="Import File"
            description={`Supported extensions: ${acceptString}.`}
        >
            <ImportCodeForm />
        </ResponsiveDialog>
    );
};
