import React, { useRef } from 'react';

import useGetCurrLang from '@/hooks/use-get-curr-lang';
import debounce from 'lodash/debounce';
import { useRecoilState, useRecoilValue } from 'recoil';

import LoadingMessage from '@/components/loading-message';
import {
    $currentCode,
    $intelliSenseStatus,
    $outputVisibility,
} from '@/state/atoms/atoms';
import { $isVertical } from '@/state/selectors/selectors';
import { sampleCode } from '@/constants/data';

const useEditor = () => {
    const editorRef = useRef<unknown | null>(null);

    const currentLanguage = useGetCurrLang();
    const [currentCode, setCurrentCode] = useRecoilState($currentCode);

    const outputVisibility = useRecoilValue($outputVisibility);
    const intelliSenseStatus = useRecoilValue($intelliSenseStatus);
    const isVertical = useRecoilValue($isVertical);

    const handleChange = debounce((value?: string) => {
        setCurrentCode(value || '');
    }, 500);

    const onMount = (editor: { focus: () => void }) => {
        editorRef.current = editor;
        editor.focus();
    };

    const options = {
        automaticLayout: true,
        quickSuggestions: intelliSenseStatus,
    };

    const loading = React.createElement(LoadingMessage, {
        outputVisibility,
        isVertical,
    });

    return {
        onMount,
        onChange: handleChange,
        value: currentCode,
        language: currentLanguage,
        defaultValue: currentCode ?? sampleCode[currentLanguage],
        isVertical,
        outputVisibility,
        options,
        loading,
    };
};

export default useEditor;
