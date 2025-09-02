"use client";

import { Button } from "@/ui/components/atoms/Button";
import { Input } from "@/ui/components/atoms/Input";
import { useImportsCode } from "../_hooks/use-import-code";

export const ImportCodeForm = () => {
    const { handleFileChange, acceptString, importFile, isValid } =
        useImportsCode();

    return (
        <form
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col gap-4 p-4 sm:p-0"
        >
            <fieldset className="flex items-center gap-4 rounded-lg border-2 bg-background">
                <Input
                    id="file-input"
                    onChange={handleFileChange}
                    type="file"
                    accept={acceptString}
                    className="col-span-3 rounded-none border-none focus-visible:ring-0"
                />
            </fieldset>
            <Button type="button" disabled={!isValid} onClick={importFile}>
                Import
            </Button>
        </form>
    );
};
