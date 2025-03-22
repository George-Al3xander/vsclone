import { FileMenuItem } from "@/app/_components/menu/desktop/FileMenuItem";
import { GitHubLinkBase } from "@/app/_components/shared/GitHubLinkBase";
import { Button } from "@/ui/components/atoms/Button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/ui/components/organisms/DropdownMenu";
import { VscMenuIcon } from "@/ui/icons";
import { SettingsMenuItem } from "./SettingsMenuItem";

export const MenuDesktop = () => {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button
                    className="hidden sm:inline-flex"
                    variant="ghost"
                    size="icon"
                >
                    <span className="sr-only">Open menu</span>
                    <VscMenuIcon size={20} />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
                <DropdownMenuGroup>
                    <FileMenuItem />
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                    <SettingsMenuItem />
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                    <GitHubLinkBase />
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};
