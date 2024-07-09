import React from 'react';
import { VscLoading, VscPlay } from 'react-icons/vsc';

import useExecuteCode from '@/hooks/use-execute-code';
import { useRecoilValue } from 'recoil';

import { Button } from '@/components/ui/button';
import { $isLoading } from '@/state/atoms/atoms';

function RunCodeBtn() {
    const { runCode } = useExecuteCode();
    const isLoading = useRecoilValue($isLoading);
    return (
        <Button
            aria-label="Run code button"
            variant="ghost"
            onClick={runCode}
            disabled={isLoading}
            size="icon"
        >
            {isLoading ? (
                <VscLoading className="animate-spin" size={20} />
            ) : (
                <VscPlay size={20} />
            )}
        </Button>
    );
}

export default RunCodeBtn;
