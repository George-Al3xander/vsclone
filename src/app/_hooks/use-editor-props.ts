import { useLanguageParam } from "@/app/_hooks/use-language-param";
import { useCodeStore } from "@/store/use-code-store";
import EditorMonaco from "@monaco-editor/react";
import debounce from "lodash/debounce";
import { ComponentProps } from "react";

export const useEditorProps = (): ComponentProps<typeof EditorMonaco> => {
    const defaultLanguage = useLanguageParam();
    const defaultValue = useCodeStore((s) => s.code);
    const setCode = useCodeStore((s) => s.setCode);
    const onChange = debounce((value?: string) => {
        setCode(value || "");
    }, 500);

    return { defaultLanguage, defaultValue, onChange };
};
