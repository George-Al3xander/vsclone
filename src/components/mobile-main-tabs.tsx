'use client';

import React from 'react';

import useMobileTabs from '@/hooks/use-mobile-tabs';

import EditorWindow from '@/components/editor-window';
import Output from '@/components/output';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { cn } from '@/lib/utils';
import { TMobileTab } from '@/types/types';

const menuTabs: {
    value: TMobileTab;
    content: React.ReactNode;
    title: string;
}[] = [
    {
        value: 'editor',
        title: `Editor`,
        content: <EditorWindow />,
    },
    {
        value: 'output',
        title: 'Output',
        content: <Output />,
    },
];
function MobileMainTabs() {
    const { tab, onTabChange } = useMobileTabs();

    return (
        <section className={'sm:hidden'}>
            <Tabs value={tab} onValueChange={onTabChange}>
                <TabsList
                    className={cn(
                        'mx-auto flex w-[min-content]',
                        'roundedGlass',
                    )}
                >
                    {menuTabs.map(({ value, title }) => (
                        <TabsTrigger value={value} key={value}>
                            {title}
                        </TabsTrigger>
                    ))}
                </TabsList>

                {menuTabs.map(({ value, content }) => (
                    <TabsContent value={value} key={value}>
                        {content}
                    </TabsContent>
                ))}
            </Tabs>
        </section>
    );
}

export default MobileMainTabs;
