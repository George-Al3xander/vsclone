import React, { ReactNode } from 'react';

import { FileOptions } from '@/components/mobile menu/file-options';
import LanguageList from '@/components/mobile menu/language-list';
import MenuCheckboxes from '@/components/mobile menu/menu-checkboxes';
import { DropdownMenuLabel } from '@/components/ui/dropdown-menu';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const menuTabs: { value: string; content: ReactNode }[] = [
    {
        value: 'settings',
        content: (
            <>
                <DropdownMenuLabel className={'text-lg'}>
                    File
                </DropdownMenuLabel>
                <Separator className="my-2" />
                <FileOptions />
                <DropdownMenuLabel className={'text-lg'}>
                    Editor settings
                </DropdownMenuLabel>
                <Separator className="my-2" />
                <MenuCheckboxes />
            </>
        ),
    },
    {
        value: 'languages',
        content: <LanguageList />,
    },
];
function MenuTabs() {
    return (
        <Tabs defaultValue={menuTabs[0].value} className="w-full">
            <TabsList className="mx-auto my-2 w-full">
                {menuTabs.map(({ value }) => (
                    <TabsTrigger
                        aria-label={value + ' tab trigger'}
                        className="capitalize"
                        value={value}
                        key={value}
                    >
                        {value}
                    </TabsTrigger>
                ))}
            </TabsList>

            <ScrollArea className={'max-h-full overflow-y-auto'}>
                {menuTabs.map(({ value, content }) => (
                    <TabsContent value={value} key={value}>
                        {content}
                    </TabsContent>
                ))}
            </ScrollArea>
        </Tabs>
    );
}

export default MenuTabs;
