import { DesktopMenu } from "@/app/(desktop)";
import { ExecuteCodeButton } from "@/app/(execute-code)";
import { MobileMenu } from "@/app/(mobile)";
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
