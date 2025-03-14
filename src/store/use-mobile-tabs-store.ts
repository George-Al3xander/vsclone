import { create } from "zustand";

export type MobileTabsStore = {
    tab: string;
    setTab: (tab: string) => void;
};

export const useMobileTabsStore = create<MobileTabsStore>()((set) => ({
    tab: "editor",
    setTab: (tab) => set({ tab }),
}));
