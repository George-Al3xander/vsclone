import { setCompilationOutput } from "@/mocks/mock-code-actions";
import { mockExecuteCode } from "@/mocks/mock-internal-client";
import * as internalApi from "@/services/api/internal";
import { renderHook } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { useExecuteCode } from "../code/use-execute-code";

const executeCodeSpy = vi.spyOn(internalApi.code, "execute");

const compileCode = async () => {
    const { result } = renderHook(() => useExecuteCode());

    await result.current.executeCode();
};

describe("Execute code hook", () => {
    beforeEach(() => {
        vi.clearAllMocks();
    });
    it("should execute code successfully", async () => {
        const text = "Execution result";
        mockExecuteCode(text);
        await compileCode();
        expect(setCompilationOutput).toHaveBeenCalledWith(text);
    });

    it("shouldn't execute code successfully", async () => {
        //eslint-disable-next-line
        //@ts-ignore
        executeCodeSpy.mockReturnValueOnce();
        await compileCode();
        expect(setCompilationOutput).not.toHaveBeenCalledWith(
            "Execution result",
        );
    });

    it("should set a correct error message", async () => {
        const text = "Oops!";
        mockExecuteCode(text, true);
        await compileCode();
        expect(setCompilationOutput).toHaveBeenCalledWith("Oops!");
    });

    it("shouldn't call the function with an empty string when an error occurs", async () => {
        executeCodeSpy.mockReturnValueOnce(
            //eslint-disable-next-line
            //@ts-ignore
            Promise.resolve({
                data: {},
            }),
        );
        await compileCode();
        expect(setCompilationOutput).not.toHaveBeenCalledWith("");
    });
});
