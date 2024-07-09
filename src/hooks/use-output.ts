import { useRecoilState, useRecoilValue } from 'recoil';

import { $output, $outputVisibility } from '@/state/atoms/atoms';
import { $isVertical } from '@/state/selectors/selectors';

const useOutput = () => {
    const [output, setOutput] = useRecoilState($output);
    const open = useRecoilValue($outputVisibility);
    const clearOutput = () => setOutput(undefined);
    const isVertical = useRecoilValue($isVertical);

    return { isVertical, clearOutput, output, open };
};

export default useOutput;
