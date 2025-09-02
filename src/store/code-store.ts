import { useLanguageParam } from "@/app/(language)";
import { create } from "zustand";
import { persist } from "zustand/middleware";
import codeSamples from "../../public/json/codeSamples.json";

export type CodeActions = {
    setCode: (code: string) => void;
    setCompilationOutput: (output: string | null) => void;
    setIsCompiling: (bool: boolean) => void;
    clearCompilationOutput: () => void;
};

export type CodeState = {
    code: string | null;
    compilationOutput: string | null;
    isCompiling: boolean;
    actions: CodeActions;
};

const codeStore = create<CodeState>()(
    persist(
        (set) => ({
            code: null,
            compilationOutput: null,
            isCompiling: false,
            actions: {
                setCode: (code) => set(() => ({ code })),
                setCompilationOutput: (compilationOutput) =>
                    set(() => ({ compilationOutput })),
                setIsCompiling: (isCompiling) => set(() => ({ isCompiling })),
                clearCompilationOutput: () =>
                    set(() => ({ compilationOutput: null })),
            },
        }),
        {
            name: "code-storage",
            partialize: (state) => ({ code: state.code }),
        },
    ),
);

export const useCode = () => {
    const language = useLanguageParam() as "cpp";

    const storageCode = codeStore((s) => s.code);
    const sampleCode = codeSamples[language];

    return storageCode ?? sampleCode;
};
export const useCompilingOutput = () => codeStore((s) => s.compilationOutput);
export const useIsCompiling = () => codeStore((s) => s.isCompiling);
export const useCodeActions = () => codeStore((s) => s.actions);
