import { create } from "zustand";
import { persist } from "zustand/middleware";

export type CodeState = {
    code: string;
    compilationOutput: string | null;
    isCompiling: boolean;
} & {
    setCode: (code: string) => void;
    setCompilationOutput: (output: string | null) => void;
    setIsCompiling: (bool: boolean) => void;
    clearCompilationOutput: () => void;
};

export const codeStore = create<CodeState>()(
    persist(
        (set) => ({
            code: "",
            compilationOutput: null,
            isCompiling: false,
            setCode: (code) => set(() => ({ code })),
            setCompilationOutput: (compilationOutput) =>
                set(() => ({ compilationOutput })),
            setIsCompiling: (isCompiling) => set(() => ({ isCompiling })),
            clearCompilationOutput: () =>
                set(() => ({ compilationOutput: null })),
        }),
        {
            name: "code-storage",
            partialize: (state) => ({ code: state.code }),
        },
    ),
);
