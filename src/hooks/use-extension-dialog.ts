import React, { useEffect } from 'react';

import useGetCurrLang from '@/hooks/use-get-curr-lang';
import { useRouter, useSearchParams } from 'next/navigation';

import { getLanguageByExt } from '@/lib/utils';
import { LANGUAGE_FILE_EXTENSIONS } from '@/constants/consts';

const useExtensionDialog = () => {
    const searchParams = useSearchParams();
    const router = useRouter();
    const [open, setOpen] = React.useState(false);
    const currLang = useGetCurrLang();
    const ext = searchParams.get('importedExt');
    const validExtension = Object.values(LANGUAGE_FILE_EXTENSIONS).includes(
        `.${ext}`,
    );
    const isNotSame = `.${ext}` !== LANGUAGE_FILE_EXTENSIONS[currLang];
    useEffect(() => {
        if (ext && validExtension && isNotSame) {
            setOpen(true);
        }
        if (!validExtension || !isNotSame) {
            router.push('?');
        }
    }, [ext, isNotSame, router, searchParams, validExtension]);

    const cancel = () => router.push('?');

    const accept = () => router.push(`/${getLanguageByExt(`.${ext}`)}`);

    return { open, accept, cancel, setOpen };
};

export default useExtensionDialog;
