"use client";
import React, { useState } from "react";
import { importCode } from "@/lib/actions";
import {
  DialogClose,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useSetRecoilState } from "recoil";
import { $currentCode } from "@/state/atoms/atoms";
import toast from "react-hot-toast";
function ImportMenu() {
  const setCurrentCode = useSetRecoilState($currentCode);
  const [tempCode, setTempCode] = useState<string>("");
  const [isValid, setValid] = useState<boolean>(false);

  return (
    <>
      <DialogHeader>
        <DialogTitle className={"capitalize"}>Import file</DialogTitle>
        <DialogDescription>Import new file</DialogDescription>
      </DialogHeader>
      <div className="grid gap-4 py-4">
        <div className="grid grid-cols-4 items-center gap-4">
          <input
            onChange={importCode(
              (val) => {
                setValid(true);
                toast("File selected", { icon: "🔗" });
                setTempCode(val);
              },
              () => {
                setValid(false);
                toast.error(`Invalid file extension`);
              },
            )}
            id="file"
            type="file"
            accept=".txt,.js,.ts,.py,.java,.cs,.php,.cpp,.c"
            className="col-span-3"
          />
        </div>
      </div>
      <DialogFooter>
        <DialogClose asChild>
          <Button
            disabled={!isValid}
            onClick={() => setCurrentCode(tempCode)}
            className={"capitalize"}
            type="submit"
          >
            Import
          </Button>
        </DialogClose>
      </DialogFooter>
    </>
  );
}

export default ImportMenu;
