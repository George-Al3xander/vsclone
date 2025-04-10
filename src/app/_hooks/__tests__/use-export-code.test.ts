import { useExportCode } from "@/app/_hooks/code/use-export-code";
import { setIsExportOpen } from "@/mocks/mock-dialog-actions";
import * as codeStore from "@/store/code-store";
import * as exportFileRoot from "@/utils/export-text-file";
import { act, renderHook } from "@testing-library/react";
import codeSamples from "public/json/codeSamples.json";
import { beforeEach, describe, expect, it, vi } from "vitest";

vi.spyOn(exportFileRoot, "exportTextFile").mockImplementation(() => true);

const exportCode = () => {
    const { result } = renderHook(() => useExportCode());
    result.current.exportCode();
};

describe("Export code hook", () => {
    beforeEach(() => {
        vi.clearAllMocks();
    });

    it("should export a code file", () => {
        exportCode();
        expect(setIsExportOpen).toHaveBeenCalled();
    });
    it("should export code with a correct default data", () => {
        exportCode();
        expect(exportFileRoot.exportTextFile).toHaveBeenCalledWith({
            fileName: "",
            fileExtension: "js",
            content: codeSamples.javascript,
        });
    });

    it("should export code with a correct custom data", () => {
        const fileName = "custom-name";
        const code = "Custom code";
        vi.spyOn(codeStore, "useCode").mockReturnValue(code);

        const { result } = renderHook(() => useExportCode());
        act(() => {
            result.current.handleFileNameChange({
                //eslint-disable-next-line
                //@ts-ignore
                target: { value: fileName },
            });
        });
        result.current.exportCode();
        expect(exportFileRoot.exportTextFile).toHaveBeenCalledWith({
            fileName,
            fileExtension: "js",
            content: code,
        });
    });
});
