"use client";

import { useLanguageParam } from "@/app/_hooks/use-language-param";
import { LANGUAGES_CONFIG } from "@/configs/languages";
import { codeStore } from "@/store/code-store";
import { dialogsStore } from "@/store/dialogs-store";
import { exportTextFile } from "@/utils/export-text-file";
import { ChangeEvent, useState } from "react";
import { toast } from "sonner";
import codeSamples from "../../../public/json/codeSamples.json";

export const useExportCode = () => {
    const language = useLanguageParam();
    const code = codeStore((s) => s.code);
    const { extension } = LANGUAGES_CONFIG[language as "cpp"];

    const setIsOpen = dialogsStore((s) => s.setIsExportOpen);

    const [fileName, setFileName] = useState<string>("");

    const exportCode = () => {
        const success = exportTextFile({
            fileName,
            content: code || codeSamples[language as "cpp"],
            fileExtension: extension,
        });

        const name = `${fileName || "file"}.${extension}`;

        const title = success
            ? "File Downloaded Successfully"
            : "File Download Failed";
        const description = `${name} ${success ? "has been downloaded and is ready for use." : "could not be downloaded. Please try again."}`;
        const toastType = success ? "success" : "error";

        if (success) setIsOpen(false);

        toast[toastType](title, {
            description,
        });
    };

    const handleFileNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFileName(e.target.value);
    };

    return { exportCode, fileName, handleFileNameChange, extension };
};
