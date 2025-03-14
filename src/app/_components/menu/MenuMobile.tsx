import { LanguageSelectionList } from "@/app/_components/shared/LanguageSelectionList";
import { Logo } from "@/app/_components/shared/Logo";
import { SheetMenu } from "@/ui/components/organisms/SheetMenu";
import { VscMenuIcon } from "@/ui/icons";

export const MenuMobile = () => (
    <SheetMenu
        sheetTitle={<Logo />}
        triggerProps={{
            srText: "Open mobile menu",
            icon: VscMenuIcon,
            wrapperProps: {
                className: "sm:hidden",
                variant: "ghost",
                size: "icon",
            },
        }}
    >
        <LanguageSelectionList />
    </SheetMenu>
);
