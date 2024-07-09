'use client';

import React from 'react';
import { VscVscode } from 'react-icons/vsc';

import { cn } from '@/lib/utils';
import { metadata } from '@/constants/data';

function Logo({ size = 'md' }: { size?: 'sm' | 'md' | 'lg' }) {
    return (
        <div
            className={cn('flex items-center gap-2 font-bold', {
                'text-xl': size === 'sm',
                'text-2xl': size === 'md',
                'text-4xl': size === 'lg',
            })}
        >
            <VscVscode />
            {metadata.title as string}
        </div>
    );
}

export default Logo;
