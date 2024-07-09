'use client';

import React from 'react';

import useGetCurrLang from '@/hooks/use-get-curr-lang';
import Link from 'next/link';

import { cn } from '@/lib/utils';
import {
    BACKUP_LANGUAGE_VERSIONS,
    LANGUAGES_REACT_ICONS,
} from '@/constants/consts';
import { roundedGlassStyle, titles } from '@/constants/data';

function LanguageSelectionBar() {
    const currLang = useGetCurrLang();
    return (
        <ul
            className={cn(
                'hidden h-full justify-between gap-4 p-2 sm:flex sm:flex-col',
                roundedGlassStyle,
            )}
        >
            {Object.entries(LANGUAGES_REACT_ICONS).map(([lang, Icon]) => (
                <Link
                    title={`${titles[lang as 'cpp']} (${BACKUP_LANGUAGE_VERSIONS[lang as 'cpp']})`}
                    target="_blank"
                    className={cn(
                        'max-w-[4rem] scale-75 rounded border-white p-2 opacity-40 transition-all hover:scale-100 hover:border-2 hover:opacity-100',
                        {
                            'pointer-events-none scale-100 border-2 opacity-100':
                                currLang === lang,
                        },
                    )}
                    key={lang}
                    href={'/' + lang}
                >
                    <Icon className={'mx-auto'} size={35} />
                </Link>
            ))}
        </ul>
    );
}

export default LanguageSelectionBar;
