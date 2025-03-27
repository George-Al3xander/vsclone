"use client";

import { FC, PropsWithChildren, ReactNode } from "react";
import { useMediaQuery } from "usehooks-ts";

type Props = PropsWithChildren<{
    mobileView: ReactNode;
    desktopView: ReactNode;
    breakpoint?: "sm" | "md" | "lg" | "xl" | "2xl";
}>;

const breakpoints = {
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
    "2xl": 1536,
} as const;

export const ResponsiveBlock: FC<Props> = ({
    breakpoint = "sm",
    desktopView,
    mobileView,
}) => {
    const isDesktop = useMediaQuery(
        `(min-width: ${breakpoints[breakpoint]}px)`,
    );

    if (isDesktop) return desktopView;

    return mobileView;
};
