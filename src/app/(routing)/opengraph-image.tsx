import { LANGUAGES_CONFIG } from "@/configs/languages";
import { baseMetadata } from "@/configs/metadata";
import { VsCodeIconRaw } from "@/ui/icons";
import { getLocalFont } from "@/utils/get-local-font";
import { ImageResponse } from "next/og";

const { title } = baseMetadata;

export const alt = `Online Code Compiler (Editor) - ${title}`;

export const size = {
    width: 1200,
    height: 630,
};

export const contentType = "image/png";

export default async function Image() {
    const inter = await getLocalFont();

    return new ImageResponse(
        (
            <div
                style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    padding: "1rem 2rem",
                    justifyItems: "center",
                    alignItems: "center",
                    color: "white",
                    background:
                        "radial-gradient(circle at 10% 20%, rgb(3, 235, 255) 0%, rgb(152, 70, 242) 100.2%)",
                }}
            >
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "1rem",
                        marginTop: "auto",
                    }}
                >
                    <VsCodeIconRaw />
                    <div style={{ fontSize: 180 }}>{title?.toString()}</div>
                </div>
                <div
                    style={{
                        fontSize: 80,
                        opacity: 0.7,
                        marginBottom: "auto",
                    }}
                >
                    Online Compiler
                </div>

                <div
                    style={{
                        display: "flex",
                        gap: "2rem",
                        opacity: 0.7,
                        marginTop: "auto",
                        fontSize: 30,
                    }}
                >
                    {Object.keys(LANGUAGES_CONFIG).map((lang) => (
                        <div key={lang}>
                            {
                                LANGUAGES_CONFIG[
                                    lang as keyof typeof LANGUAGES_CONFIG
                                ].title
                            }
                        </div>
                    ))}
                </div>
            </div>
        ),
        {
            ...size,
            fonts: [inter],
        },
    );
}
