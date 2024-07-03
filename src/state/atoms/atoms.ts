import { atom } from "recoil";
import { TMobileTab, TOutputPosition } from "@/types/types";

export const $outputPosition = atom<TOutputPosition | string>({
  key: "output-position",
  default: "right", // "bottom",
});

export const $outputVisibility = atom<boolean>({
  key: "output-Visibility",
  default: true,
});

export const $output = atom<string | undefined>({
  key: "output",
  default: undefined,
});

export const $intelliSenseStatus = atom<boolean>({
  key: "IntelliSenseAtom",
  default: true,
});

export const $currentCode = atom<undefined | string>({
  key: "curr_code",
  default: undefined,
});

export const $isLoading = atom({
  key: "isLoading_boolean",
  default: false,
});

export const $mobileTab = atom<TMobileTab>({
  key: "mobile_tabs",
  default: "editor",
});

export const $tabSwitchStatus = atom<boolean>({
  key: "tab_switch_status",
  default: true,
});
