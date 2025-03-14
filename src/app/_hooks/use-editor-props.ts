"use client";

import { useLanguageParam } from "@/app/_hooks/use-language-param";
import { useCodeStore } from "@/store/use-code-store";
import { IconTextBlock } from "@/ui/components/molecules/IconTextBlock";
import { AiFillCodeIcon } from "@/ui/icons";
import { cn } from "@/utils/cn";
import EditorMonaco from "@monaco-editor/react";
import debounce from "lodash/debounce";
import { ComponentProps, createElement } from "react";

const sizeBase = "h-[calc(100vh-11rem)] w-full";

const theme = "vs-dark";

export const useEditorProps = (
    defaultProps?: ComponentProps<typeof EditorMonaco>,
): ComponentProps<typeof EditorMonaco> => {
    const defaultLanguage = useLanguageParam();
    const defaultValue = useCodeStore((s) => s.code);

    const setCode = useCodeStore((s) => s.setCode);
    const onChange = debounce((value?: string) => {
        setCode(value || "");
    }, 500);

    const className = cn(sizeBase, defaultProps?.className);

    const loading = createElement(IconTextBlock, {
        title: "Preparing the code-editing area. It will be available shortly.",
        subtitle: "Please wait...",
        icon: AiFillCodeIcon,
        containerProps: { className },
    });

    return {
        defaultLanguage,
        defaultValue,
        onChange,
        theme,
        loading,
        ...defaultProps,
        className,
    };
};
