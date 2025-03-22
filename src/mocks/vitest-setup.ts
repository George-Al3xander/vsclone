import { vi } from "vitest";

vi.mock("@/app/_hooks/use-language-param", () => ({
    useLanguageParam: vi.fn().mockReturnValue("javascript"),
}));

vi.mock("sonner", () => ({
    toast: {
        info: vi.fn(),
        error: vi.fn(),
        success: vi.fn(),
    },
}));
