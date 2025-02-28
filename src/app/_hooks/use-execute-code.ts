"use client";

import { useLanguageParam } from "@/app/_hooks/use-language-param";
import * as internalApi from "@/services/api/internal";
import { useCodeStore } from "@/store/use-code-store";
import { AxiosError } from "axios";

export const useExecuteCode = () => {
    const language = useLanguageParam();

    const code = useCodeStore((state) => state.code);

    const setCompilationOutput = useCodeStore(
        (state) => state.setCompilationOutput,
    );

    const isCompiling = useCodeStore((state) => state.isCompiling);
    const setIsCompiling = useCodeStore((state) => state.setIsCompiling);

    const executeCode = async () => {
        setIsCompiling(true);
        try {
            const { data } = await internalApi.code.execute({
                code,
                language,
            });

            if ("stderr" in data.run && data.run.stderr)
                throw new Error(data.run.stderr);

            setCompilationOutput(data.run.output);
        } catch (e) {
            if (e instanceof AxiosError || e instanceof Error) {
                setCompilationOutput(e.message);
            } else {
                setCompilationOutput("Something went wrong");
            }
        } finally {
            setIsCompiling(false);
        }
    };

    return { executeCode, isCompiling };
};
