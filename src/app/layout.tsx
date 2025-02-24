import "@/styles/main.css";
import { LayoutProps } from "@/types/app";
import { geistMono, geistSans } from "@/ui/fonts";
export { metadataConfig as metadata } from "@/configs/metadata";

export default function RootLayout({ children }: LayoutProps) {
    return (
        <html
            lang="en"
            className={`${geistSans.variable} ${geistMono.variable}`}
        >
            <body className="font-geist-mono">{children}</body>
        </html>
    );
}
