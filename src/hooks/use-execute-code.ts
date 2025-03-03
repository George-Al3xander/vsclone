import toast from 'react-hot-toast';

import useGetCurrLang from '@/hooks/use-get-curr-lang';
import { useRecoilValue, useSetRecoilState } from 'recoil';

import { executeCode } from '@/lib/actions';
import {
    $currentCode,
    $isLoading,
    $mobileTab,
    $output,
    $tabSwitchStatus,
} from '@/state/atoms/atoms';

const useExecuteCode = () => {
    const language = useGetCurrLang();
    const setIsLoading = useSetRecoilState($isLoading);
    const currentCode = useRecoilValue($currentCode);
    const setOutput = useSetRecoilState($output);
    const setTab = useSetRecoilState($mobileTab);
    const switchTab = useRecoilValue($tabSwitchStatus);

    const runCode = async () => {
        setIsLoading(true);
        if (switchTab) {
            setTab('output');
        }

        const code =
            currentCode ||
            (await import('@/constants/data')).sampleCode[language];
        try {
            const result = await executeCode({
                code,
                language,
            });
            if ('run' in result) {
                setOutput(result.run.output);
            } else if ('message' in result) {
                setOutput(result.message);
            } else {
                throw new Error();
            }
        } catch (e) {
            //error handle here
            toast.error('Something went wrong!');
            console.log(e);
        } finally {
            setIsLoading(false);
        }
    };

    return {
        runCode,
    };
};

export default useExecuteCode;
