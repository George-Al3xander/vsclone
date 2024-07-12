import React from 'react';
import { VscMenu, VscPlay } from 'react-icons/vsc';

import { Settings2 } from 'lucide-react';
import dynamic from 'next/dynamic';

//import FileManagerDropdown from '@/components/file/file-manager-menu';
import Logo from '@/components/logo';
//import MobileMenu from '@/components/mobile menu/mobile-menu';
//import RunCodeBtn from '@/components/run-code-btn';
import { cn } from '@/lib/utils';

const MobileMenu = dynamic(
    () => import('@/components/mobile menu/mobile-menu'),

    { ssr: false, loading: () => <VscMenu className="sm:hidden" size={20} /> },
);

const FileManagerDropdown = dynamic(
    () => import('@/components/file/file-manager-menu'),

    { ssr: false, loading: () => <Settings2 className="hidden sm:inline" /> },
);

const RunCodeBtn = dynamic(
    () => import('@/components/run-code-btn'),

    { ssr: false, loading: () => <VscPlay size={20} /> },
);

function Header() {
    return (
        <header
            className={cn(
                'flex h-[4rem] items-center gap-4 px-4 py-2',
                'roundedGlass',
            )}
        >
            <Logo />

            <ul className="ml-auto flex items-center">
                <li>
                    {' '}
                    <FileManagerDropdown />
                </li>
                <li>
                    <MobileMenu />
                </li>
                <li>
                    {' '}
                    <RunCodeBtn />
                </li>
            </ul>
        </header>
    );
}

export default Header;
