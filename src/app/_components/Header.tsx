import { ExecuteCodeButton } from "@/app/_components/ExecuteCodeButton";
import { LanguageSelectionList } from "@/app/_components/LanguageSelectionList";
import { Logo } from "@/app/_components/Logo";
import { SheetMenu } from "@/ui/components/organisms/SheetMenu";
import { VscMenu } from "react-icons/vsc";

export const Header = () => (
    <>
        <Logo />
        <div className="ml-auto">
            <SheetMenu
                sheetTitle={<Logo />}
                triggerProps={{
                    srText: "Open mobile menu",
                    icon: VscMenu,
                    wrapperProps: {
                        className: "sm:hidden",
                        variant: "ghost",
                        size: "icon",
                    },
                }}
            >
                <LanguageSelectionList />
            </SheetMenu>
            <ExecuteCodeButton />
        </div>
    </>
);
