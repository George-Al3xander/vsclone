import { MobileMenu } from "@/app/(mobile)/_components/MobileMenu";
import { ExecuteCodeButton } from "@/app/_components/editor/ExecuteCodeButton";
import { MenuDesktop } from "@/app/_components/menu/desktop/MenuDesktop";
import { Logo } from "./Logo";

export const Header = () => (
    <>
        <Logo />
        <div className="ml-auto">
            <MenuDesktop />
            <MobileMenu />
            <ExecuteCodeButton />
        </div>
    </>
);
