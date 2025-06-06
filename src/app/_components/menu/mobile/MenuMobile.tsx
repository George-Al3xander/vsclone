import { FileBlock } from "@/app/_components/menu/mobile/FileBlock";
import { GitHubMenuItem } from "@/app/_components/menu/mobile/GitHubMenuItem";
import { LanguagesBlock } from "@/app/_components/menu/mobile/LanguagesBlock";
import { Logo } from "@/app/_components/shared/Logo";
import { Separator } from "@/ui/components/atoms/Separator";
import { dropdownMenuSeparatorBaseStyles } from "@/ui/components/organisms/DropdownMenu";
import { SheetMenu } from "@/ui/components/organisms/SheetMenu";
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/ui/components/organisms/Tabs";
import { VscMenuIcon } from "@/ui/icons";

export const MenuMobile = () => (
    <SheetMenu
        sheetTitle={<Logo />}
        triggerProps={{
            srText: "Open menu",
            icon: VscMenuIcon,
            wrapperProps: {
                className: "sm:hidden",
                variant: "ghost",
                size: "icon",
            },
        }}
        sheetHeaderProps={{ className: "bg-accent p-4" }}
        sheetContentProps={{ className: "p-0", side: "left" }}
    >
        <Tabs defaultValue="tools">
            <div className="px-4 py-4">
                <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="tools">Tools</TabsTrigger>
                    <TabsTrigger value="languages">Languages</TabsTrigger>
                </TabsList>
            </div>
            <Separator className={dropdownMenuSeparatorBaseStyles} />
            <TabsContent value="tools" className="px-4">
                <FileBlock />
            </TabsContent>
            <TabsContent value="languages" className="px-4">
                <LanguagesBlock />
            </TabsContent>
        </Tabs>
        <Separator className={dropdownMenuSeparatorBaseStyles} />
        <div className="px-4">
            <GitHubMenuItem />
        </div>
    </SheetMenu>
);
