import { Metadata } from 'next';

import { LANGUAGES } from '@/constants/consts';
import { metadata, titles } from '@/constants/data';

export async function genPageMetadata({
    params: { lang = LANGUAGES },
}: {
    params: { lang?: readonly string[] };
}): Promise<Metadata> {
    const [language] = lang;
    const { title, description } = metadata;

    return {
        title: `${titles[language as 'cpp'] ?? 'Online'} Compiler | ${title}`,
        description,
        authors: { name: 'George V.' },
    };
}
