import { ExecuteCodeButton } from "@/app/_components/editor/ExecuteCodeButton";
import { MenuDesktop } from "@/app/_components/menu/desktop/MenuDesktop";
import { MenuMobile } from "@/app/_components/menu/mobile/MenuMobile";
import { Logo } from "./Logo";

export const Header = () => (
    <>
        <Logo />
        <div className="ml-auto">
            <MenuDesktop />
            <MenuMobile />
            <ExecuteCodeButton />
        </div>
    </>
);
