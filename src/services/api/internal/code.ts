import { LANGUAGES_CONFIG } from "@/configs/languages";
import { internalClient } from "@/services/libs/internalClient";
import { AxiosResponse } from "axios";

const LANGUAGES = Object.keys(LANGUAGES_CONFIG);
const URL = "/execute";

type PistonRuntime = {
    language: string;
    version: string;
};

type ExecuteResponse = PistonRuntime & {
    run: {
        stdout: string;
        stderr: string;
        code: number;
        signal: unknown;
        output: string;
    };
};

export const execute = async ({
    code,
    language,
}: {
    code: string;
    language: string;
}): Promise<AxiosResponse<ExecuteResponse, unknown>> => {
    if (!LANGUAGES.includes(language))
        throw new Error("Invalid language provided");

    const { version } =
        LANGUAGES_CONFIG[language as keyof typeof LANGUAGES_CONFIG];

    return await internalClient.post<ExecuteResponse>(URL, {
        language,
        version,
        files: [
            {
                content: code,
            },
        ],
    });
};
