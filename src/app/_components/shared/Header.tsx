import { ExecuteCodeButton } from "@/app/_components/editor/ExecuteCodeButton";
import { SheetMenu } from "@/ui/components/organisms/SheetMenu";
import { VscMenu } from "react-icons/vsc";
import { LanguageSelectionList } from "./LanguageSelectionList";
import { Logo } from "./Logo";

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
