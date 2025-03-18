"use client";

import { useExportCode } from "@/app/_hooks/use-export-code";
import { Button } from "@/ui/components/atoms/Button";
import { Input } from "@/ui/components/atoms/Input";
import { Label } from "@/ui/components/atoms/Label";
import { ArrowDownToLineIcon } from "@/ui/icons";

export const ExportCodeForm = () => {
    const { exportCode, fileName, handleFileNameChange, extension } =
        useExportCode();

    return (
        <form
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col gap-4 p-4 sm:p-0"
        >
            <fieldset className="flex items-center gap-4 rounded-lg border-2 bg-background">
                <Input
                    id="name"
                    placeholder={"file"}
                    value={fileName}
                    onChange={handleFileNameChange}
                    className="col-span-3 rounded-none border-none focus-visible:ring-0"
                />
                <Label
                    htmlFor="name"
                    className="basis-[5ch] text-blue-500 opacity-60"
                >
                    {`.${extension}`}
                </Label>
            </fieldset>
            <Button type="button" onClick={exportCode}>
                Export
                <ArrowDownToLineIcon />
            </Button>
        </form>
    );
};
