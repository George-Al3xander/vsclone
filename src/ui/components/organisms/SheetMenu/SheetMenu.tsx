import { Button } from "@/ui/components/atoms/Button";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/ui/components/organisms/Sheet";
import { IconBaseProps, IconType } from "@/ui/icons";
import { ComponentProps, FC, PropsWithChildren, ReactNode } from "react";

type Props = PropsWithChildren<{
    triggerProps: {
        icon: IconType;
        srText: string;
        iconProps?: IconBaseProps;
        wrapperProps?: ComponentProps<typeof Button>;
    };
    sheetTitle?: ReactNode;
}>;

export const SheetMenu: FC<Props> = ({
    children,
    triggerProps: { iconProps, icon: TriggerIcon, srText, wrapperProps },
    sheetTitle,
}) => {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button {...wrapperProps}>
                    <span className="sr-only">{srText}</span>
                    <TriggerIcon size={20} {...iconProps} />
                </Button>
            </SheetTrigger>
            <SheetContent>
                {sheetTitle && (
                    <SheetHeader>
                        <SheetTitle>{sheetTitle}</SheetTitle>
                    </SheetHeader>
                )}
                {children}
            </SheetContent>
        </Sheet>
    );
};
