'use client';

import React, { useState } from 'react';

import useGetCurrLang from '@/hooks/use-get-curr-lang';
import { useRecoilValue } from 'recoil';

import { Button } from '@/components/ui/button';
import {
    DialogClose,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { exportCode } from '@/lib/actions';
import { $currentCode } from '@/state/atoms/atoms';
import { LANGUAGE_FILE_EXTENSIONS } from '@/constants/consts';
import { sampleCode } from '@/constants/data';

function ExportMenu() {
    const code = useRecoilValue($currentCode);
    const [fileName, setFileName] = useState<string>();
    const language = useGetCurrLang();

    return (
        <>
            <DialogHeader>
                <DialogTitle className={'capitalize'}>Export file</DialogTitle>
                <DialogDescription>Download new file</DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
                <div className="flex items-center gap-4 rounded-lg border-2">
                    <Input
                        id="name"
                        placeholder={'main'}
                        onChange={(e) => setFileName(e.target.value)}
                        className="col-span-3 border-none"
                    />
                    <Label
                        htmlFor="name"
                        className="basis-[5ch] text-blue-500 opacity-60"
                    >
                        {LANGUAGE_FILE_EXTENSIONS[language]}
                    </Label>
                </div>
            </div>
            <DialogFooter>
                <DialogClose asChild>
                    <Button
                        onClick={() =>
                            exportCode({
                                code: code ?? sampleCode[language],
                                fileName,
                                language,
                            })
                        }
                        className={'capitalize'}
                        type="submit"
                    >
                        Export
                    </Button>
                </DialogClose>
            </DialogFooter>
        </>
    );
}

export default ExportMenu;
