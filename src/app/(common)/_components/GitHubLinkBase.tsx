import { env } from "@/configs/env";
import { GithubIcon, IconType } from "@/ui/icons";
import Link from "next/link";
import { ComponentProps, FC, HTMLAttributes } from "react";

type Props = {
    linkProps?: Omit<ComponentProps<typeof Link>, "href">;
    iconProps?: ComponentProps<IconType>;
    textWrapper?: HTMLAttributes<HTMLSpanElement>;
};

export const GitHubLinkBase: FC<Props> = ({
    linkProps,
    iconProps,
    textWrapper,
}) => {
    return (
        <Link {...linkProps} href={env.NEXT_PUBLIC_GITHUB_URL} target="_blank">
            <GithubIcon {...iconProps} />
            <span {...textWrapper}>GitHub</span>
        </Link>
    );
};
