import React from "react";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { outputPositionVariants } from "@/constants/data";
import { useRecoilState } from "recoil";
import { $outputPosition } from "@/state/atoms/atoms";

function MenuRadio() {
  const [position, setPosition] = useRecoilState($outputPosition);

  return (
    <RadioGroup value={position} onValueChange={setPosition}>
      {outputPositionVariants.map((variant) => (
        <div
          key={"radio-menu" + variant}
          className="flex items-center space-x-2 capitalize"
        >
          <RadioGroupItem value={variant} id={variant} />
          <Label className={"text-base"} htmlFor={variant}>
            {variant}
          </Label>
        </div>
      ))}
    </RadioGroup>
  );
}

export default MenuRadio;
