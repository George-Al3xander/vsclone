import { create } from "zustand";

export type MobileTabsActions = {
    setTab: (tab: string) => void;
};

export type MobileTabsStore = {
    tab: string;
    actions: MobileTabsActions;
};

const mobileTabsStore = create<MobileTabsStore>()((set) => ({
    tab: "editor",
    actions: {
        setTab: (tab) => set({ tab }),
    },
}));

export const useMobileTab = () => mobileTabsStore((s) => s.tab);
export const useMobileTabsActions = () => mobileTabsStore((s) => s.actions);
