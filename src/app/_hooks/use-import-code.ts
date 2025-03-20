"use client";

import { LANGUAGES_CONFIG } from "@/configs/languages";
import { useCodeActions } from "@/store/code-store";
import { dialogsStore } from "@/store/dialogs-store";
import { ChangeEvent, useState } from "react";
import { toast } from "sonner";

const ALLOWED_EXTENSIONS = Object.values(LANGUAGES_CONFIG).map(
    ({ extension }) => extension,
);

const acceptString = `${ALLOWED_EXTENSIONS.map((w) => "." + w).join(",")}.`;

export const useImportsCode = () => {
    const [tempCode, setTempCode] = useState<string>("");
    const [isValid, setValid] = useState<boolean>(false);
    const { setCode } = useCodeActions();
    const setIsOpen = dialogsStore((s) => s.setIsImportOpen);

    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        try {
            if (e.target.files) {
                const file = e.target.files[0];
                if (
                    file &&
                    ALLOWED_EXTENSIONS.includes(file.name.split(".")[1] || "")
                ) {
                    const fr = new FileReader();
                    fr.onload = (event) => {
                        if (!event.target || !event.target?.result) {
                            throw new Error("Something went wrong.");
                        }
                        setValid(true);
                        setTempCode(event.target.result.toString());
                    };

                    fr.readAsText(file);
                    toast.info("File Selected", {
                        description: `${file.name} has been selected. Click "Import" to set it as the current code.`,
                    });
                } else throw new Error("Invalid file type.");
            }
        } catch (e) {
            setValid(false);
            let message = "Something went wrong.";

            if (e instanceof Error) message = e.message;

            toast.error("Could not load file", {
                description: message + " Please try again!.",
            });
        }
    };

    const importFile = () => {
        setCode(tempCode);
        setIsOpen(false);
        toast.success("File Imported Successfully", {
            description: "File has been imported and set as the current code.",
        });
    };

    return {
        handleFileChange,
        importFile,
        acceptString,
        isValid,
    };
};
