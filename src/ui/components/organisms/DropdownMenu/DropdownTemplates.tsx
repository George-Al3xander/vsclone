"use client";

import { IconType } from "@/ui/icons";
import { ComponentProps, FC, PropsWithChildren } from "react";
import {
    DropdownMenuPortal,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
} from "./DropdownMenu";

export type RadioBlockProps<T = string> = {
    variants: { value: T; label: string }[];
    value: T;
    onValueChange: (value: T) => void;
    groupProps?: Omit<
        ComponentProps<typeof DropdownMenuRadioGroup>,
        "value" | "onValueChange"
    >;
    itemProps?: Omit<
        ComponentProps<typeof DropdownMenuRadioItem>,
        "value" | "children"
    >;
};

export const RadioBlock = <T extends string>({
    value,
    variants,
    onValueChange,
    groupProps,
    itemProps,
}: RadioBlockProps<T>) => {
    return (
        <DropdownMenuRadioGroup
            {...groupProps}
            value={value}
            onValueChange={(s) => onValueChange(s as T)}
        >
            {variants.map(({ value, label }) => (
                <DropdownMenuRadioItem
                    {...itemProps}
                    key={"dropdown-item" + value}
                    value={value}
                >
                    {label}
                </DropdownMenuRadioItem>
            ))}
        </DropdownMenuRadioGroup>
    );
};

export type SubmenuBlockProps = PropsWithChildren<{
    triggerTitle: string;
    triggerIcon: IconType;
}>;

export const SubmenuBlock: FC<SubmenuBlockProps> = ({
    triggerIcon: Icon,
    triggerTitle,
    children,
}) => {
    return (
        <DropdownMenuSub>
            <DropdownMenuSubTrigger>
                <Icon />
                <span>{triggerTitle}</span>
            </DropdownMenuSubTrigger>
            <DropdownMenuPortal>
                <DropdownMenuSubContent>{children}</DropdownMenuSubContent>
            </DropdownMenuPortal>
        </DropdownMenuSub>
    );
};
