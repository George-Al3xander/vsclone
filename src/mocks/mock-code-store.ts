import * as codeStore from "@/store/code-store";
import { vi } from "vitest";

export const useCompilingOutputMock = vi.fn();

vi.spyOn(codeStore, "useCompilingOutput").mockImplementation(
    useCompilingOutputMock,
);
