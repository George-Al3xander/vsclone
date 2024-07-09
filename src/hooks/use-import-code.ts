import { useState } from 'react';
import toast from 'react-hot-toast';

import useGetCurrLang from '@/hooks/use-get-curr-lang';
import { useRouter } from 'next/navigation';
import { useSetRecoilState } from 'recoil';

import { importCode } from '@/lib/actions';
import { $currentCode } from '@/state/atoms/atoms';
import { LANGUAGE_FILE_EXTENSIONS } from '@/constants/consts';

const useImportCode = () => {
    const setCurrentCode = useSetRecoilState($currentCode);
    const [tempCode, setTempCode] = useState<string>('');
    const [isValid, setValid] = useState<boolean>(false);
    const currLang = useGetCurrLang();
    const [extension, setExtension] = useState<string>(
        LANGUAGE_FILE_EXTENSIONS[currLang],
    );
    const router = useRouter();
    const onChange = importCode(
        (val, ext) => {
            setExtension(ext);
            setValid(true);
            toast('File selected', { icon: '🔗' });
            setTempCode(val);
        },
        () => {
            setValid(false);
            toast.error(`Invalid file extension`);
        },
    );

    const acceptImport = () => {
        if (`.${extension}` !== LANGUAGE_FILE_EXTENSIONS[currLang]) {
            router.push(`?importedExt=${extension}`);
        }
        setCurrentCode(tempCode);
    };

    return { onChange, acceptImport, isValid };
};

export default useImportCode;
