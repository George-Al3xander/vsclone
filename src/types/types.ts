import { LANGUAGES } from "@/constants/consts";
import { RecoilState } from "recoil";
import { IconType } from "react-icons";

export type TLanguage = (typeof LANGUAGES)[number];

export type PistonRuntime = {
  language: string;
  version: string;
};

export type ExecuteResponse = PistonRuntime & {
  run: {
    stdout: string;
    stderr: string;
    code: number;
    signal: unknown;
    output: string;
  };
};

export type TAtomicBooleanOption = {
  atom: RecoilState<boolean>;
  Icon?: IconType;
  title: string;
};

export type TOutputPosition = "top" | "bottom" | "left" | "right";
export type TMobileTab = "editor" | "output";
