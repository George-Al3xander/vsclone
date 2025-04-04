import { create } from "zustand";
import { persist } from "zustand/middleware";

type TOutputPosition = "top" | "bottom" | "left" | "right";

export type OutputSettingsActions = {
    setIsHidden: (value: boolean) => void;
    setOutputPosition: (value: TOutputPosition) => void;
    toggleOutputVisibility: () => void;
};

export type OutputSettingsState = {
    isHidden: boolean;
    outputPosition: TOutputPosition;
    actions: OutputSettingsActions;
};

const outputPositionDesktopStore = create<OutputSettingsState>()(
    persist(
        (set) => ({
            isHidden: false,
            outputPosition: "right",
            actions: {
                setIsHidden: (value: boolean) =>
                    set(() => ({ isHidden: value })),
                setOutputPosition: (value: TOutputPosition) =>
                    set(() => ({ outputPosition: value })),
                toggleOutputVisibility: () =>
                    set((state) => ({ isHidden: !state.isHidden })),
            },
        }),
        {
            name: "output-settings-storage",
            partialize: (state) => ({
                outputPosition: state.outputPosition,
                isHidden: state.isHidden,
            }),
        },
    ),
);

export const useIsOutputHidden = () =>
    outputPositionDesktopStore((s) => s.isHidden);
export const useOutputPosition = () =>
    outputPositionDesktopStore((s) => s.outputPosition);
export const useOutputSettingsActions = () =>
    outputPositionDesktopStore((s) => s.actions);
