import React from 'react';

import useGetCurrLang from '@/hooks/use-get-curr-lang';
import Link from 'next/link';

import { optionStyles } from '@/components/mobile menu/mobile-menu';
import { cn } from '@/lib/utils';
import {
    BACKUP_LANGUAGE_VERSIONS,
    LANGUAGES,
    LANGUAGES_REACT_ICONS,
} from '@/constants/consts';
import { titles } from '@/constants/data';

const LanguageList = () => {
    const curLang = useGetCurrLang();
    return (
        <ul className="grid gap-4 py-4">
            {LANGUAGES.map((lang) => {
                const Icon = LANGUAGES_REACT_ICONS[lang];
                return (
                    <li key={lang}>
                        <Link
                            target="_blank"
                            className={cn(optionStyles, 'hover:border-r-4', {
                                'pointer-events-none border-r-4 border-white opacity-100':
                                    curLang === lang,
                            })}
                            href={lang}
                        >
                            <Icon size={20} />
                            {titles[lang]} (
                            {BACKUP_LANGUAGE_VERSIONS[lang as 'cpp']})
                        </Link>
                    </li>
                );
            })}
        </ul>
    );
};

export default LanguageList;
