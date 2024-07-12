import React from 'react';

import DesktopMain from '@/components/desktop-main';
import MobileMainTabs from '@/components/mobile-main-tabs';
import { genPageMetadata } from '@/lib/og-data';

export const generateMetadata = genPageMetadata;

export default function Home() {
    return (
        <>
            <MobileMainTabs />
            <DesktopMain />
        </>
    );
}
