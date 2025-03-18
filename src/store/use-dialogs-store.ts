import { create } from "zustand";

export type DialogsStore = {
    isExportOpen: boolean;
    setIsExportOpen: (b: boolean) => void;
};

export const useDialogsStore = create<DialogsStore>()((set) => ({
    isExportOpen: false,
    setIsExportOpen: (b) => set({ isExportOpen: b }),
}));
