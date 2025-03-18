import { FileMenuItem } from "@/app/_components/menu/desktop/FileMenuItem";
import { Button } from "@/ui/components/atoms/Button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/ui/components/organisms/DropdownMenu";
import { VscMenuIcon } from "@/ui/icons";
import { GitHubMenuItem } from "./GitHubMenuItem";
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
                <GitHubMenuItem />
            </DropdownMenuContent>
        </DropdownMenu>
    );
};
