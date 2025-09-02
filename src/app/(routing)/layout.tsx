import { Logo } from "@/app/(common)";
import { DesktopMenu } from "@/app/(desktop)";
import { ExecuteCodeButton } from "@/app/(execute-code)";
import { ExportCodeDialog } from "@/app/(export-code)";
import { ImportCodeDialog } from "@/app/(import-code)";
import { MobileMenu } from "@/app/(mobile)";
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
                    <ImportCodeDialog />
                    <ExportCodeDialog />
                    <TemplateScaffold
                        header={
                            <>
                                <Logo />
                                <div className="ml-auto">
                                    <DesktopMenu />
                                    <MobileMenu />
                                    <ExecuteCodeButton />
                                </div>
                            </>
                        }
                    >
                        {children}
                    </TemplateScaffold>
                </Providers>
            </body>
        </html>
    );
}
