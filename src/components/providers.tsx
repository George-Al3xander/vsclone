'use client';

import React from 'react';
import { Toaster } from 'react-hot-toast';

import { RecoilRoot } from 'recoil';

function Providers({ children }: { children: React.ReactNode }) {
    return (
        <RecoilRoot>
            <Toaster />
            {children}
        </RecoilRoot>
    );
}

export default Providers;
