import { setCompilationOutput } from "@/mocks/mock-code-actions";
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
        executeCodeSpy.mockReturnValueOnce(
            // Too much effort required to mock the whole AxiosResponse type.
            //eslint-disable-next-line
            //@ts-ignore
            Promise.resolve({
                data: {
                    run: {
                        output: "Execution result",
                    },
                },
            }),
        );
        await compileCode();
        expect(setCompilationOutput).toHaveBeenCalledWith("Execution result");
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
        executeCodeSpy.mockReturnValueOnce(
            //eslint-disable-next-line
            //@ts-ignore
            Promise.resolve({
                data: {
                    run: {
                        stderr: "Oops!",
                    },
                },
            }),
        );
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
