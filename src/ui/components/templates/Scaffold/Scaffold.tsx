import { cn } from "@/utils/cn";
import { FC, HTMLAttributes, PropsWithChildren, ReactNode } from "react";

type Props = PropsWithChildren<{
    header: ReactNode;
    headerWrapperProps?: HTMLAttributes<HTMLElement>;
}>;

export const TemplateScaffold: FC<Props> = ({
    header,
    children,
    headerWrapperProps,
}) => {
    return (
        <div className="flex min-h-screen flex-col gap-4 p-4">
            <header
                {...headerWrapperProps}
                className={cn(
                    "roundedGlass flex h-16 items-center gap-4 px-4 py-2",
                    headerWrapperProps?.className,
                )}
            >
                {header}
            </header>
            <main className="flex-1">{children}</main>
        </div>
    );
};
