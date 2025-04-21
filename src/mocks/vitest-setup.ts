import "@testing-library/jest-dom/vitest";
import { vi } from "vitest";

vi.mock("@/app/_hooks/language/use-language-param", () => ({
    useLanguageParam: vi.fn().mockReturnValue("javascript"),
}));

vi.mock("sonner", () => ({
    toast: {
        info: vi.fn(),
        error: vi.fn(),
        success: vi.fn(),
    },
}));
