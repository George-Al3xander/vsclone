import { Header } from "@/app/_components/shared/Header";
import { Providers } from "@/providers";
import "@/styles/main.css";
import { LayoutProps } from "@/types/app";
import { TemplateScaffold } from "@/ui/components/templates/Scaffold";
import { inter } from "@/ui/fonts";

export { metadataConfig as metadata } from "@/configs/metadata";

export default function RootLayout({ children }: LayoutProps) {
    return (
        <html lang="en" className={`${inter.variable}`}>
            <body className="dark font-inter">
                <Providers>
                    <TemplateScaffold header={<Header />}>
                        {children}
                    </TemplateScaffold>
                </Providers>
            </body>
        </html>
    );
}
