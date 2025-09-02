import {
    clearCompilationOutput,
    setCompilationOutput,
} from "@/mocks/mock-code-actions";
import { useCompilingOutputMock } from "@/mocks/mock-code-store";
import { executeCodeSpy, mockExecuteCode } from "@/mocks/mock-internal-client";
import { render, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { beforeAll, beforeEach, describe, expect, it, vi } from "vitest";
import { OutputPanel } from "../OutputPanel";

const renderOutput = () => {
    const renderResult = render(<OutputPanel />);
    const executeButton = renderResult.getByRole("button", {
        name: "Execute code",
    });
    const clearOutput = renderResult.getByRole("button", {
        name: "Clear output",
    });

    return { renderedItems: { executeButton, clearOutput }, ...renderResult };
};

const NO_OUTPUT_PLACEHOLDER =
    "Write, Edit and Run your code using online compiler.";

describe("OutputPanel", () => {
    let renderResult: ReturnType<typeof renderOutput>;
    beforeAll(() => {
        renderResult = renderOutput();
    });
    beforeEach(() => {
        vi.clearAllMocks();
    });
    it("renders without crashing", async () => {
        const {
            renderedItems: { executeButton, clearOutput },
            getByText,
        } = renderResult;
        const placeholder = getByText(NO_OUTPUT_PLACEHOLDER);

        expect(executeButton).toBeInTheDocument();
        expect(clearOutput).toBeInTheDocument();
        expect(placeholder).toBeInTheDocument();
    });

    it("should display the output result correctly", () => {
        const codeResult = "Random result";
        useCompilingOutputMock.mockImplementation(() => codeResult);
        renderResult.rerender(<OutputPanel />);
        const placeholder = renderResult.getByText(codeResult);
        expect(placeholder).toBeInTheDocument();
    });

    it("renders execute code result", async () => {
        const {
            renderedItems: { executeButton },
        } = renderResult;

        const codeResult = "Random result";
        mockExecuteCode(codeResult);
        await userEvent.click(executeButton);
        expect(executeCodeSpy).toHaveBeenCalled();
        await waitFor(() => {
            expect(setCompilationOutput).toHaveBeenCalledWith(codeResult);
        });
    });

    it("should clear the output panel", async () => {
        const {
            renderedItems: { clearOutput },
        } = renderResult;
        mockExecuteCode("Some result");
        await userEvent.click(clearOutput);
        await waitFor(() => {
            expect(clearCompilationOutput).toHaveBeenCalled();
        });
    });
});
