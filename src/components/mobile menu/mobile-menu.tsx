import React from 'react';
import { VscMenu } from 'react-icons/vsc';

import Logo from '@/components/logo';
import MenuTabs from '@/components/mobile menu/menu-tabs';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import { githubOption } from '@/constants/data';

export const optionStyles =
    'flex items-center gap-2  opacity-60 transition-all hover:opacity-100  border-white hover:cursor-pointer';

function MobileMenu() {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button
                    aria-label="open menu"
                    className={'sm:hidden'}
                    variant="ghost"
                    size="icon"
                >
                    <VscMenu size={20} />
                </Button>
            </SheetTrigger>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle>
                        <Logo size={'sm'} />
                    </SheetTitle>
                </SheetHeader>
                <div className={'flex max-h-full flex-col gap-4'}>
                    <Separator />
                    <MenuTabs />
                    <Separator />
                    {githubOption(cn(optionStyles, 'text-sm'))}
                </div>
            </SheetContent>
        </Sheet>
    );
}

export default MobileMenu;
