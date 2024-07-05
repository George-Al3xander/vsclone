import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { LANGUAGE_FILE_EXTENSIONS } from "@/constants/consts";

const backwardsLanguages = Object.fromEntries(
  Object.entries(LANGUAGE_FILE_EXTENSIONS).map((a) => a.reverse()),
);

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getLangugeByExt = (ext: string) => backwardsLanguages[ext];
