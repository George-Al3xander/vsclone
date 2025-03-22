import * as codeStore from "@/store/code-store";
import { vi } from "vitest";

export const setCode = vi.fn();
export const setCompilationOutput = vi.fn();
export const setIsCompiling = vi.fn();
export const clearCompilationOutput = vi.fn();

vi.spyOn(codeStore, "useCodeActions").mockImplementation(() => ({
    setIsCompiling,
    setCompilationOutput,
    setCode,
    clearCompilationOutput,
}));
