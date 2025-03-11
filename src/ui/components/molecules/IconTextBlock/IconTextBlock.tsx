import { IconBaseProps, IconType } from "@/ui/icons";
import { cn } from "@/utils/cn";
import { FC, HTMLAttributes } from "react";

type Props = {
    title: string;
    subtitle?: string;
    icon: IconType;
    containerProps?: HTMLAttributes<HTMLDivElement>;
    titleProps?: HTMLAttributes<HTMLParagraphElement>;
    subtitleProps?: HTMLAttributes<HTMLElement>;
    iconProps?: IconBaseProps;
};

export const IconTextBlock: FC<Props> = ({
    title,
    subtitle,
    icon: Icon,
    containerProps,
    titleProps,
    subtitleProps,
    iconProps,
}) => {
    return (
        <div
            {...containerProps}
            className={cn(
                "flex flex-col items-center justify-center text-center",

                containerProps?.className,
            )}
        >
            <Icon size={150} {...iconProps} />
            <p
                {...titleProps}
                className={cn(
                    "text-lg font-semibold sm:text-xl",
                    titleProps?.className,
                )}
            >
                {title}
            </p>
            {subtitle && (
                <small
                    {...subtitleProps}
                    className={cn(
                        "opacity-60 sm:text-lg",
                        subtitleProps?.className,
                    )}
                >
                    {subtitle}
                </small>
            )}
        </div>
    );
};
