import { atom } from "recoil";
import { TMobileTab, TOutputPosition } from "@/types/types";
import { recoilPersist } from "recoil-persist";

const localStorage =
  typeof window !== "undefined" ? window.localStorage : undefined;

const { persistAtom } = recoilPersist({
  key: "recoil-persist",
  storage: localStorage,
});

export const $outputPosition = atom<TOutputPosition | string>({
  key: "output-position",
  default: "right", // "bottom",
});

export const $outputVisibility = atom<boolean>({
  key: "output-visibility",
  default: true,
});

export const $output = atom<string | undefined>({
  key: "output",
  default: undefined,
});

export const $intelliSenseStatus = atom<boolean>({
  key: "$intelli-sense-status",
  default: true,
});

export const $currentCode = atom<undefined | string>({
  key: "current-code",
  default: undefined,
  effects_UNSTABLE: [persistAtom],
});

export const $isLoading = atom({
  key: "loading-status",
  default: false,
});

export const $mobileTab = atom<TMobileTab>({
  key: "mobile-tabs",
  default: "editor",
});

export const $tabSwitchStatus = atom<boolean>({
  key: "tab-switch-status",
  default: true,
});
