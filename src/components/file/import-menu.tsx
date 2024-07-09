'use client';

import React from 'react';

import useImportCode from '@/hooks/use-import-code';

import { Button } from '@/components/ui/button';
import {
    DialogClose,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from '@/components/ui/dialog';
import { LANGUAGE_FILE_EXTENSIONS } from '@/constants/consts';

function ImportMenu() {
    const { onChange, acceptImport, isValid } = useImportCode();
    return (
        <>
            <DialogHeader>
                <DialogTitle className={'capitalize'}>Import file</DialogTitle>
                <DialogDescription>
                    Allowed extensions:{' '}
                    {Object.values(LANGUAGE_FILE_EXTENSIONS)
                        .map((ext) => ext.replace('.', ''))
                        .join(' | ')}
                </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                    <input
                        onChange={onChange}
                        id="file"
                        data-testid="import-file-input"
                        type="file"
                        accept=".txt,.js,.ts,.py,.java,.cs,.php,.cpp,.c"
                        className="col-span-3"
                    />
                </div>
            </div>
            <DialogFooter>
                <DialogClose asChild>
                    <Button
                        disabled={!isValid}
                        onClick={acceptImport}
                        className={'capitalize'}
                        type="submit"
                    >
                        Import
                    </Button>
                </DialogClose>
            </DialogFooter>
        </>
    );
}

export default ImportMenu;
