import * as internalApi from "@/services/api/internal";
import { vi } from "vitest";

export const executeCodeSpy = vi.spyOn(internalApi.code, "execute");
export const mockExecuteCode = (
    text: string,
    isError: boolean | undefined = false,
) => {
    executeCodeSpy.mockReturnValueOnce(
        // Too much effort required to mock the whole AxiosResponse type.
        //eslint-disable-next-line
        //@ts-ignore
        Promise.resolve({
            data: {
                run: {
                    [isError ? "stderr" : "output"]: text,
                },
            },
        }),
    );
};
