import { create } from "zustand";

export type DialogsActions = {
    setIsExportOpen: (b: boolean) => void;
    setIsImportOpen: (b: boolean) => void;
};

export type DialogsState = {
    isExportOpen: boolean;
    isImportOpen: boolean;
    actions: DialogsActions;
};

const dialogsStore = create<DialogsState>()((set) => ({
    isExportOpen: false,
    isImportOpen: false,
    actions: {
        setIsExportOpen: (b) => set({ isExportOpen: b }),
        setIsImportOpen: (b) => set({ isImportOpen: b }),
    },
}));

export const useIsExportOpen = () => dialogsStore((s) => s.isExportOpen);
export const useIsImportOpen = () => dialogsStore((s) => s.isImportOpen);
export const useDialogsActions = () => dialogsStore((s) => s.actions);
