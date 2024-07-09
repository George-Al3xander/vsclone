import React from 'react';

import { Inter } from 'next/font/google';

import './globals.css';

import Providers from '@/components/providers';
import { metadata as md } from '@/constants/data';

const inter = Inter({ subsets: ['latin'] });

export const metadata = md;

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className + ' dark'}>
                <Providers>{children}</Providers>
            </body>
        </html>
    );
}
