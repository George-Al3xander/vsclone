"use client";

import { ImportCodeForm } from "@/app/_components/forms/ImportCodeForm";
import { LANGUAGES_CONFIG } from "@/configs/languages";
import { useDialogsStore } from "@/store/use-dialogs-store";
import { ResponsiveDialog } from "@/ui/components/organisms/ResponsiveDialog";

const acceptString = Object.values(LANGUAGES_CONFIG)
    .map(({ extension }) => extension)
    .join(", ");

export const ImportCodeDialog = () => {
    const isOpen = useDialogsStore((s) => s.isImportOpen);
    const setIsOpen = useDialogsStore((s) => s.setIsImportOpen);
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
