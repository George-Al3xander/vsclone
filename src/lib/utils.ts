import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

import { LANGUAGE_FILE_EXTENSIONS } from '@/constants/consts';
import { TLanguage } from '@/types/types';

const backwardsLanguages = Object.fromEntries(
    Object.entries(LANGUAGE_FILE_EXTENSIONS).map((a) => a.reverse()),
);

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export const getLanguageByExt = (ext: string) => backwardsLanguages[ext];

export const getCurrentLanguage = (pathname: string) => {
    const split = pathname.split('/');
    return (split[1].length > 0 ? split[1] : 'javascript') as TLanguage;
};
