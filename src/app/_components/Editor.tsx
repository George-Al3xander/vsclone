"use client";

import { useEditorProps } from "@/app/_hooks/use-editor-props";
import { AiFillCodeIcon } from "@/ui/icons";
import { cn } from "@/utils/cn";
import EditorMonaco from "@monaco-editor/react";
import { ComponentProps, FC } from "react";

type Props = ComponentProps<typeof EditorMonaco>;

const baseStyles =
    "roundedGlass h-[calc(100vh-12rem)] w-full  sm:h-[calc(100vh-9.5rem-20vh)]";

export const Editor: FC<Props> = (props) => {
    return (
        <EditorMonaco
            {...useEditorProps()}
            {...props}
            className={cn(baseStyles, "min-h-full p-2", props?.className)}
            loading={
                <div
                    className={cn(
                        baseStyles,
                        "flex flex-col items-center justify-center text-center",
                    )}
                >
                    <AiFillCodeIcon size={150} />
                    <p className={"text-lg font-semibold sm:text-xl"}>
                        Preparing the code-editing area. It will be available
                        shortly.
                    </p>
                    <h4 className="opacity-60 sm:text-lg">Please wait...</h4>
                </div>
            }
            theme="vs-dark"
        />
    );
};
