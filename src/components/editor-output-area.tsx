'use client';

import React from 'react';

import { useRecoilValue } from 'recoil';

import EditorWindow from '@/components/editor-window';
import ExtensionAlertDialog from '@/components/extension-alert-dialog';
import MobileMainTabs from '@/components/mobile-main-tabs';
import Output from '@/components/output';
import { cn } from '@/lib/utils';
import { $outputPosition } from '@/state/atoms/atoms';
import { TOutputPosition } from '@/types/types';

function EditorOutputArea() {
    const currPosition = useRecoilValue($outputPosition);

    const position = (ps: TOutputPosition) => currPosition === ps;
    return (
        <>
            <ExtensionAlertDialog />
            <main
                className={cn('hidden w-full flex-col gap-4 sm:flex', {
                    'flex-col': position('bottom'),
                    'flex-col-reverse': position('top'),
                    'flex-row': position('right'),
                    'flex-row-reverse': position('left'),
                })}
            >
                <EditorWindow />
                <Output />
            </main>
            <MobileMainTabs />
        </>
    );
}

export default EditorOutputArea;
