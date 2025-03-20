"use client";

import { useLanguageParam } from "@/app/_hooks/use-language-param";
import { codeStore } from "@/store/code-store";
import { IconTextBlock } from "@/ui/components/molecules/IconTextBlock";
import { AiFillCodeIcon } from "@/ui/icons";
import { cn } from "@/utils/cn";
import EditorMonaco from "@monaco-editor/react";
import debounce from "lodash/debounce";
import { ComponentProps, createElement } from "react";
import codeSamples from "../../../public/json/codeSamples.json";

const sizeBase = "h-[calc(100vh-11rem)] w-full";

const theme = "vs-dark";

export const useEditorProps = (
    defaultProps?: ComponentProps<typeof EditorMonaco>,
): ComponentProps<typeof EditorMonaco> => {
    const defaultLanguage = useLanguageParam();
    const value =
        codeStore((s) => s.code) ||
        codeSamples[defaultLanguage as "javascript"];

    const setCode = codeStore((s) => s.setCode);
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
        value,
        onChange,
        theme,
        loading,
        ...defaultProps,
        className,
    };
};
