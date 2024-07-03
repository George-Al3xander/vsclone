"use client";
import React from "react";
import {
  DropdownMenuCheckboxItem,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
} from "@/components/ui/dropdown-menu";
import { VscSettingsGear } from "react-icons/vsc";

import { useRecoilState } from "recoil";
import {
  $intelliSenseStatus,
  $outputPosition,
  $outputVisibility,
} from "@/state/atoms/atoms";
import { BsTerminalFill } from "react-icons/bs";
import { MdTipsAndUpdates } from "react-icons/md";
import { TAtomicBooleanOption, TOutputPosition } from "@/types/types";
import { outputPositionVariants } from "@/constants/data";
export const atomBooleanOptions: TAtomicBooleanOption[] = [
  {
    atom: $outputVisibility,
    Icon: BsTerminalFill,
    title: "Show terminal",
  },
  {
    atom: $intelliSenseStatus,
    Icon: MdTipsAndUpdates,
    title: "Enable suggestions",
  },
];
function VisibilityCheckboxOption({ atom, Icon, title }: TAtomicBooleanOption) {
  const [open, setOpen] = useRecoilState(atom);
  return (
    <DropdownMenuCheckboxItem
      className="flex justify-between gap-2"
      checked={open}
      onCheckedChange={setOpen}
    >
      {title}
      {Icon && <Icon className="h-4 w-4" />}
    </DropdownMenuCheckboxItem>
  );
}
function OutputPosition() {
  const [position, setPosition] = useRecoilState($outputPosition);
  return (
    <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
      {outputPositionVariants.map((opt) => (
        <DropdownMenuRadioItem className="capitalize" key={opt} value={opt}>
          {opt}{" "}
        </DropdownMenuRadioItem>
      ))}
    </DropdownMenuRadioGroup>
  );
}

function SettingsSubMenu() {
  return (
    <DropdownMenuGroup>
      <DropdownMenuSub>
        <DropdownMenuSubTrigger>
          <VscSettingsGear className="mr-2" size={15} />
          <span>Settings</span>
        </DropdownMenuSubTrigger>
        <DropdownMenuPortal>
          <DropdownMenuSubContent>
            <DropdownMenuLabel>Editor options</DropdownMenuLabel>
            <DropdownMenuSeparator />

            {atomBooleanOptions.map((opt, index) => (
              <VisibilityCheckboxOption key={opt.title + index} {...opt} />
            ))}
            <DropdownMenuLabel className="mt-2">
              Terminal position
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <OutputPosition />
          </DropdownMenuSubContent>
        </DropdownMenuPortal>
      </DropdownMenuSub>
    </DropdownMenuGroup>
  );
}

export default SettingsSubMenu;
