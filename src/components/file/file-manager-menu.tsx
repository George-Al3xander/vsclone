import { Settings2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import React from "react";
import SettingsSubMenu from "@/components/file/settings-sub-menu";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import useGenDialogsMenu from "@/hooks/use-gen-dialogs-menu";
import { FaFileImport, FaFileExport } from "react-icons/fa";
import { fileManagerDialogs, githubOption } from "@/constants/data";

export function FileManagerDropdown() {
  const { open, content, triggers, setOpen } = useGenDialogsMenu(
    fileManagerDialogs,
    DropdownMenuItem,
    {
      icons: {
        import: <FaFileImport className="mr-2 h-4 w-4" />,
        export: <FaFileExport className="mr-2 h-4 w-4" />,
      },
    },
  );
  return (
    <Dialog onOpenChange={setOpen} open={open}>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className={"hidden sm:inline"}>
            <span className="sr-only">Open settings</span>
            <Settings2 />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuLabel>File</DropdownMenuLabel>
          <DropdownMenuSeparator />
          {triggers}
          <DropdownMenuSeparator />
          <SettingsSubMenu />
          <DropdownMenuSeparator />
          <DropdownMenuItem asChild>{githubOption()}</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <DialogContent className="sm:max-w-[425px]">{content}</DialogContent>
    </Dialog>
  );
}
