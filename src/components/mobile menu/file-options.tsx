import React from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import useGenDialogsMenu from "@/hooks/useGenDialogsMenu";
import { FaFileImport, FaFileExport } from "react-icons/fa";
import { fileManagerDialogs } from "@/constants/data";
import { optionStyles } from "@/components/mobile menu/mobile-menu";

export function FileOptions() {
  const { open, content, triggers, setOpen } = useGenDialogsMenu(
    fileManagerDialogs,
    "li",
    {
      icons: {
        import: <FaFileImport className="mr-2 h-4 w-4" />,
        export: <FaFileExport className="mr-2 h-4 w-4" />,
      },
      triggerStyles: optionStyles,
    },
  );
  return (
    <Dialog onOpenChange={setOpen} open={open}>
      <ul className="grid gap-4 py-4">{triggers}</ul>
      <DialogContent className="sm:max-w-[425px]">{content}</DialogContent>
    </Dialog>
  );
}
