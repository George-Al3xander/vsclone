import { ChangeEvent } from 'react';

import {
    BACKUP_LANGUAGE_VERSIONS,
    BASE_URL,
    LANGUAGE_FILE_EXTENSIONS,
} from '@/constants/consts';
import { ExecuteResponse, TLanguage } from '@/types/types';

export class CodeService {
    async executeCode({
        code,
        language,
    }: {
        code: string;
        language: TLanguage;
    }): Promise<
        ExecuteResponse | { status: number; title: string; message: string }
    > {
        const version = BACKUP_LANGUAGE_VERSIONS[language];
        try {
            const response = await fetch(`${BASE_URL}/execute`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    language,
                    version,
                    files: [
                        {
                            content: code,
                        },
                    ],
                }),
            });
            const result = (await response.json()) as ExecuteResponse;

            if (result.run.stderr) throw new Error(result.run.stderr);
            return result;
        } catch (e) {
            return {
                status: 500,
                title: 'Compilation error',
                message:
                    e instanceof Error ? e.message : 'Something went wrong',
            };
        }
    }

    exportCode({
        code,
        language,
        fileName = 'main',
    }: {
        code: string;
        language: TLanguage;
        fileName?: string;
    }): { success: boolean } {
        const currExt = LANGUAGE_FILE_EXTENSIONS[language];
        const file = new File([code], fileName + currExt, {
            type: 'text/plain',
        });
        try {
            const link = document.createElement('a');
            const url = URL.createObjectURL(file);

            link.href = url;
            link.download = file.name;
            document.body.appendChild(link);
            link.click();

            document.body.removeChild(link);
            window.URL.revokeObjectURL(url);
            return { success: true };
        } catch (e) {
            console.error(e);
            return { success: false };
        }
    }
    importCode(
        assigmentCallback: (code: string, ext: string) => void,
        errorCallback: () => void,
    ): (e: ChangeEvent<HTMLInputElement>) => void {
        return (e) => {
            //let code: string = "test";
            const { files } = e.target;
            if (!files) return errorCallback();
            const fr = new FileReader();
            const file = files[0];
            const split = file.name.split('.');
            //const fileName = split[0];
            const ext = split[split.length - 1];

            if (!Object.values(LANGUAGE_FILE_EXTENSIONS).includes(`.${ext}`)) {
                return errorCallback();
            }

            fr.onload = function (event) {
                if (!event.target) return errorCallback();
                assigmentCallback(event.target.result as string, ext);
            };
            fr.readAsText(file);
        };
    }
}
