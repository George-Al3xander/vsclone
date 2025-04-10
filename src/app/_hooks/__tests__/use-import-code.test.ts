import { useImportsCode } from "@/app/_hooks/code/use-import-code";
import { useCodeActions } from "@/store/code-store";
import { useDialogsActions } from "@/store/dialogs-store";
import { act, renderHook, waitFor } from "@testing-library/react";
import { toast } from "sonner";
import { beforeEach, describe, expect, it, Mock, vi } from "vitest";

const importCode = ({
    fileName,
    content,
}: {
    content: string;
    fileName: string;
}) => {
    const { result } = renderHook(() => useImportsCode());
    const file = new File([content], fileName, {
        type: "text/plain",
    });

    act(() => {
        result.current.handleFileChange({
            //eslint-disable-next-line
            //@ts-ignore
            target: { files: [file] },
        });
    });

    return result;
};

describe("useImportsCode", () => {
    let setCodeMock: Mock;
    let setIsImportOpenMock: Mock;

    beforeEach(() => {
        setCodeMock = vi.fn();
        setIsImportOpenMock = vi.fn();
        (useCodeActions as Mock).mockReturnValue({ setCode: setCodeMock });
        (useDialogsActions as Mock).mockReturnValue({
            setIsImportOpen: setIsImportOpenMock,
        });
    });

    it("should handle valid file change", async () => {
        const result = importCode({
            fileName: "test.js",
            content: 'console.log("test");',
        });

        await waitFor(() => expect(result.current.isValid).toBe(true));
        expect(toast.info).toHaveBeenCalledWith(
            "File Selected",
            expect.objectContaining({
                description: expect.stringContaining("has been selected."),
            }),
        );
    });

    it("should show error for invalid file type", async () => {
        const result = importCode({
            fileName: "invalid.txt",
            content: 'console.log("test");',
        });

        expect(result.current.isValid).toBe(false);
        expect(toast.error).toHaveBeenCalledWith(
            "Could not load file",
            expect.objectContaining({
                description: expect.stringContaining("Invalid file type."),
            }),
        );
    });

    it("should import file correctly", () => {
        const { result } = renderHook(() => useImportsCode());

        act(() => {
            result.current.importFile();
        });

        expect(setCodeMock).toHaveBeenCalled();
        expect(setIsImportOpenMock).toHaveBeenCalledWith(false);
        expect(toast.success).toHaveBeenCalledWith(
            "File Imported Successfully",
            expect.objectContaining({
                description: expect.stringContaining(
                    "set as the current code.",
                ),
            }),
        );
    });
});
