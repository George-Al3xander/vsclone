'use client';

import React from 'react';

import useEditor from '@/hooks/use-editor';
import Editor from '@monaco-editor/react';

import { cn } from '@/lib/utils';

function EditorWindow() {
    const { isVertical, outputVisibility, ...props } = useEditor();

    return (
        <div
            className={cn('p-2', 'roundedGlass', {
                'sm:w-[70%]': !isVertical && outputVisibility,
                'sm:w-[100%]': !outputVisibility,
            })}
        >
            <Editor
                aria-label="editor window"
                {...props}
                className={cn(
                    'z-20 h-[calc(100vh-12rem)] w-full sm:h-[calc(100vh-9.5rem-20vh)]',
                    {
                        'sm:h-[calc(100vh-9rem)]':
                            !outputVisibility || !isVertical,
                    },
                )}
                theme="vs-dark"
            />
        </div>
    );
}

export default EditorWindow;
