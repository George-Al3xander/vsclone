import { create } from "zustand";
import { persist } from "zustand/middleware";

type TOutputPosition = "top" | "bottom" | "left" | "right";

export type OutputSettings = {
    isHidden: boolean;
    outputPosition: TOutputPosition;
} & {
    setIsHidden: (value: boolean) => void;
    setOutputPosition: (value: TOutputPosition) => void;
    toggleOutputVisibility: () => void;
};

export const outputPositionDesktopStore = create<OutputSettings>()(
    persist(
        (set) => ({
            isHidden: false,
            outputPosition: "right",
            setIsHidden: (value: boolean) => set(() => ({ isHidden: value })),
            setOutputPosition: (value: TOutputPosition) =>
                set(() => ({ outputPosition: value })),
            toggleOutputVisibility: () =>
                set((state) => ({ isHidden: !state.isHidden })),
        }),
        {
            name: "output-settings-storage",
        },
    ),
);
