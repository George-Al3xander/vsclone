"use client";

import {
    OutputSettingsState,
    useIsOutputHidden,
    useOutputPosition,
    useOutputSettingsActions,
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

const outputPositions: OutputSettingsState["outputPosition"][] = [
    "top",
    "bottom",
    "right",
    "left",
];

const PositionBlock: FC<{ isHidden: boolean }> = ({ isHidden }) => {
    const outputPosition = useOutputPosition();
    const { setOutputPosition } = useOutputSettingsActions();

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
    const isOutputHidden = useIsOutputHidden();
    const { toggleOutputVisibility } = useOutputSettingsActions();

    return (
        <SubmenuBlock triggerTitle="Settings" triggerIcon={VscSettingsGearIcon}>
            <DropdownMenuLabel>Editor options </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={toggleOutputVisibility}>
                {isOutputHidden ? <VscEyeIcon /> : <VscEyeClosedIcon />}
                <span>{isOutputHidden ? "Show" : "Hide"} terminal</span>
            </DropdownMenuItem>
            <PositionBlock isHidden={isOutputHidden} />
        </SubmenuBlock>
    );
};
