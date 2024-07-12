'use client';

import React from 'react';

import { useRecoilValue } from 'recoil';

import EditorWindow from '@/components/editor-window';
import Output from '@/components/output';
import { cn } from '@/lib/utils';
import { $outputPosition } from '@/state/atoms/atoms';
import { TOutputPosition } from '@/types/types';

function DesktopMain() {
    const currPosition = useRecoilValue($outputPosition);

    const position = (ps: TOutputPosition) => currPosition === ps;
    return (
        <section
            className={cn('hidden w-full flex-col gap-4 sm:flex', {
                'flex-col': position('bottom'),
                'flex-col-reverse': position('top'),
                'flex-row': position('right'),
                'flex-row-reverse': position('left'),
            })}
        >
            <EditorWindow />
            <Output />
        </section>
    );
}

export default DesktopMain;
