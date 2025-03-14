import { ExecuteCodeButton } from "@/app/_components/editor/ExecuteCodeButton";
import { MenuMobile } from "@/app/_components/menu/MenuMobile";
import { Logo } from "./Logo";

export const Header = () => (
    <>
        <Logo />
        <div className="ml-auto">
            <MenuMobile />
            <ExecuteCodeButton />
        </div>
    </>
);
