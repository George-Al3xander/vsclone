"use client";

import {
    OutputSettings,
    outputPositionDesktopStore,
} from "@/store/output-position-desktop-store";
import {
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    RadioBlock,
    SubmenuBlock,
} from "@/ui/components/organisms/DropdownMenu";
import { VscEyeClosedIcon, VscEyeIcon, VscSettingsGearIcon } from "@/ui/icons";
import { FC } from "react";

const outputPositions: OutputSettings["outputPosition"][] = [
    "top",
    "bottom",
    "right",
    "left",
];

const PositionBlock: FC<{ isHidden: boolean }> = ({ isHidden }) => {
    const outputPosition = outputPositionDesktopStore((s) => s.outputPosition);
    const setOutputPosition = outputPositionDesktopStore(
        (s) => s.setOutputPosition,
    );

    return (
        <>
            <DropdownMenuLabel>Terminal Position</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <RadioBlock
                value={outputPosition}
                onValueChange={setOutputPosition}
                variants={outputPositions.map((p) => ({
                    label: p,
                    value: p,
                }))}
                itemProps={{
                    disabled: isHidden,
                    className: "capitalize",
                }}
            />
        </>
    );
};

export const SettingsMenuItem = () => {
    const isHidden = outputPositionDesktopStore((s) => s.isHidden);
    const toggleOutputVisibility = outputPositionDesktopStore(
        (s) => s.toggleOutputVisibility,
    );

    return (
        <SubmenuBlock triggerTitle="Settings" triggerIcon={VscSettingsGearIcon}>
            <DropdownMenuLabel>Editor options </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={toggleOutputVisibility}>
                {isHidden ? <VscEyeIcon /> : <VscEyeClosedIcon />}
                <span>{isHidden ? "Show" : "Hide"} terminal</span>
            </DropdownMenuItem>
            <PositionBlock isHidden={isHidden} />
        </SubmenuBlock>
    );
};
