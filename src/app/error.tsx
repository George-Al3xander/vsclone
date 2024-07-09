'use client';

import React from 'react';
import { HiEmojiSad } from 'react-icons/hi';

import { Button } from '@/components/ui/button';

function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    return (
        <section className="flex h-screen w-screen flex-col items-center justify-center gap-4 p-4">
            <HiEmojiSad size={150} />
            <h2 className="text-4xl font-bold">Oops! Something went wrong.</h2>
            <p className={'text-2xl opacity-60'}>
                We&apos;re sorry, but it seems there has been an error:
            </p>
            <p className={'opacity-60'}>{error.message}</p>
            <Button variant={'outline'} onClick={() => reset()}>
                Try again
            </Button>
        </section>
    );
}

export default Error;
