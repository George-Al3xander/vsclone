import { DesktopMenu } from "@/app/(desktop)";
import { MobileMenu } from "@/app/(mobile)";
import { ExecuteCodeButton } from "@/app/_components/editor/ExecuteCodeButton";
import { Logo } from "./Logo";

export const Header = () => (
    <>
        <Logo />
        <div className="ml-auto">
            <DesktopMenu />
            <MobileMenu />
            <ExecuteCodeButton />
        </div>
    </>
);
