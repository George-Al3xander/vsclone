import React, { JSXElementConstructor, ReactElement } from "react";
import { ReactNode, useState } from "react";
import { cn } from "@/lib/utils";
type DialogContents = { [key: string]: React.ReactNode };
type DialogIcons = { [key in keyof DialogContents]: React.ReactNode };
const useGenDialogsMenu = (
  contents: DialogContents,
  TriggerComponent:
    | JSXElementConstructor<{
        className: string;
        onClick: () => void;
        children: ReactNode;
      }>
    | keyof HTMLElementTagNameMap,
  options:
    | {
        icons?: DialogIcons;
        triggerStyles?: React.ComponentProps<"div">["className"];
      }
    | undefined = {},
) => {
  const { icons, triggerStyles } = options;
  const types = Object.keys(contents);
  const [open, setOpen] = useState(false);
  const [currentDialog, setCurrentDialog] = useState(types[0]);
  const triggers = types.map((type) => {
    return (
      <TriggerComponent
        className={cn("capitalize", triggerStyles)}
        onClick={() => {
          setCurrentDialog(type);
          setOpen(true);
        }}
        key={type}
      >
        {icons && icons[type]}
        {type}
      </TriggerComponent>
    );
  });
  const content = contents[currentDialog];

  return { open, triggers, content, setOpen };
};

export default useGenDialogsMenu;
