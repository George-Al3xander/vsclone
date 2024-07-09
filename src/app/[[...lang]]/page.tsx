import React from 'react';

import { notFound } from 'next/navigation';

import EditorOutputArea from '@/components/editor-output-area';
import TemplateWrapper from '@/components/template-wrapper';
import { genPageMetadata } from '@/lib/og-data';
import { LANGUAGES } from '@/constants/consts';

export const generateMetadata = genPageMetadata;
export default function Home({
    params: { lang = LANGUAGES },
}: {
    params: { lang?: readonly string[] };
}) {
    const [language] = lang;

    if (!LANGUAGES.includes(language as 'cpp')) notFound();

    return (
        <TemplateWrapper>
            <EditorOutputArea />
        </TemplateWrapper>
    );
}
