import React from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { TAtomicBooleanOption } from "@/types/types";
import { useRecoilState } from "recoil";
import { atomBooleanOptions as opts } from "@/components/file/settings-sub-menu";
import { $tabSwitchStatus } from "@/state/atoms/atoms";
import { VscMultipleWindows } from "react-icons/vsc";
const CheckOption = ({ Icon, title, atom }: TAtomicBooleanOption) => {
  const [open, setOpen] = useRecoilState(atom);

  return (
    <li className="flex items-center space-x-2">
      <Checkbox
        checked={open}
        onCheckedChange={(event) => {
          const isChecked =
            //@ts-ignore
            typeof event === "boolean" ? event : event.target.checked;
          setOpen(isChecked);
        }}
        id={title}
      >
        Test
      </Checkbox>
      <label
        htmlFor={title}
        className="flex items-center gap-2 hover:cursor-pointer"
      >
        {title}
        {Icon && <Icon className="h-4 w-4" />}
      </label>
    </li>
  );
};

const atomBooleanOptions = opts.concat({
  atom: $tabSwitchStatus,
  title: "Switch tabs while compiling",
  Icon: VscMultipleWindows,
});

function MenuCheckboxes() {
  return (
    <ul>
      {atomBooleanOptions.map((opt, index) => (
        <CheckOption key={"check-option-" + opt.title + index} {...opt} />
      ))}
    </ul>
  );
}

export default MenuCheckboxes;
