'use client';

import React from 'react';

import useExtensionDialog from '@/hooks/use-extension-dialog';

import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import { fileExtensionDialog } from '@/constants/data';

const { title, description, btn_cancel, btn_accept } = fileExtensionDialog;

export default function ExtensionAlertDialog() {
    const { open, accept, setOpen, cancel } = useExtensionDialog();

    return (
        <AlertDialog open={open} onOpenChange={setOpen}>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>{title}</AlertDialogTitle>
                    <AlertDialogDescription>
                        {description}
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel onClick={cancel}>
                        {btn_cancel}
                    </AlertDialogCancel>
                    <AlertDialogAction onClick={accept}>
                        {btn_accept}
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
}
