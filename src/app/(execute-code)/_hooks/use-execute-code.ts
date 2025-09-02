"use client";

import { useLanguageParam } from "@/app/_hooks/language/use-language-param";
import * as internalApi from "@/services/api/internal";
import { useCode, useCodeActions, useIsCompiling } from "@/store/code-store";

export const useExecuteCode = () => {
    const language = useLanguageParam();

    const code = useCode();
    const { setCompilationOutput, setIsCompiling } = useCodeActions();

    const isCompiling = useIsCompiling();

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
            if (e instanceof Error) {
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
