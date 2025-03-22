import * as dialogsStore from "@/store/dialogs-store";
import { vi } from "vitest";

export const setIsImportOpen = vi.fn();
export const setIsExportOpen = vi.fn();

vi.spyOn(dialogsStore, "useDialogsActions").mockImplementation(() => ({
    setIsExportOpen,
    setIsImportOpen,
}));
