import React from 'react';

import { Inter } from 'next/font/google';

import './globals.css';

import dynamic from 'next/dynamic';

import Header from '@/components/header/header';
import LanguageSelectionBar from '@/components/language-selection-bar';
import Providers from '@/components/providers';
import { metadata as md } from '@/constants/data';

const inter = Inter({ subsets: ['latin'] });
export const metadata = md;

const ExtensionAlertDialog = dynamic(
    () => import('@/components/extension-alert-dialog'),
    { ssr: false },
);

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className + ' dark'}>
                <Providers>
                    <div className="flex flex-col gap-4 p-4">
                        <Header />
                        <main className="editor-grid">
                            <LanguageSelectionBar />
                            {children}
                        </main>
                    </div>
                    <ExtensionAlertDialog />
                </Providers>
            </body>
        </html>
    );
}
