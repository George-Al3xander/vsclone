"use client";
import React, { useRef } from "react";
import Editor from "@monaco-editor/react";
import useGetCurrLang from "@/hooks/useGetCurrLang";
import { VscLoading } from "react-icons/vsc";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  $currentCode,
  $intelliSenseStatus,
  $outputPosition,
  $outputVisibility,
} from "@/state/atoms/atoms";
import { debounce } from "lodash";
import { cn } from "@/lib/utils";
import { roundedGlassStyle, sampleCode } from "@/constants/data";
import { $isVertical } from "@/state/selectors/selectors";
import LoadingMessage from "@/components/loading-message";
function EditorWindow() {
  const editorRef = useRef<unknown | null>(null);
  const currentLanguage = useGetCurrLang();
  const [currentCode, setCurrentCode] = useRecoilState($currentCode);
  if (currentCode === undefined) {
    setCurrentCode(sampleCode[currentLanguage]);
  }

  const handleChange = debounce((value?: string) => {
    setCurrentCode(value || "");
  }, 500);
  const onMount = (editor: { focus: () => void }) => {
    editorRef.current = editor;
    editor.focus();
  };
  const outputVisibility = useRecoilValue($outputVisibility);
  const intelliSenseStatus = useRecoilValue($intelliSenseStatus);
  const isVertical = useRecoilValue($isVertical);

  return (
    <div
      className={cn("p-2", roundedGlassStyle, {
        "sm:w-[70%]": !isVertical,
      })}
    >
      <Editor
        className={cn("h-[calc(100vh-12rem)] sm:h-[calc(100vh-9.5rem-20vh)]", {
          "sm:h-[calc(100vh-9rem)]": !outputVisibility || !isVertical,
        })}
        theme="vs-dark"
        onChange={handleChange}
        value={currentCode}
        options={{
          automaticLayout: true,
          quickSuggestions: intelliSenseStatus,
        }}
        onMount={onMount}
        language={currentLanguage}
        loading={
          <LoadingMessage
            outputVisibility={outputVisibility}
            isVertical={isVertical}
          />
        }
      />
    </div>
  );
}

export default EditorWindow;
