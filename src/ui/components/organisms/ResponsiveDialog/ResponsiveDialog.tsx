import { Button } from "@/ui/components/atoms/Button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/ui/components/organisms/Dialog";
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
} from "@/ui/components/organisms/Drawer";
import { FC, PropsWithChildren } from "react";
import { useMediaQuery } from "usehooks-ts";

type Props = PropsWithChildren<{
    isOpen: boolean;
    setIsOpen: (b: boolean) => void;
    title: string;
    description?: string;
    breakpoint?: "sm" | "md" | "lg" | "xl" | "2xl";
}>;

const breakpoints = {
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
    "2xl": 1536,
} as const;

export const ResponsiveDialog: FC<Props> = ({
    children,
    isOpen,
    setIsOpen,
    title,
    description,
    breakpoint = "sm",
}) => {
    const isDesktop = useMediaQuery(
        `(min-width: ${breakpoints[breakpoint]}px)`,
    );

    if (isDesktop) {
        return (
            <Dialog open={isOpen} onOpenChange={setIsOpen}>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>{title}</DialogTitle>
                        {description && (
                            <DialogDescription>{description}</DialogDescription>
                        )}
                    </DialogHeader>
                    {children}
                </DialogContent>
            </Dialog>
        );
    }

    return (
        <Drawer open={isOpen} onOpenChange={setIsOpen}>
            <DrawerContent>
                <DrawerHeader className="text-left">
                    <DrawerTitle>{title}</DrawerTitle>
                    {description && (
                        <DialogDescription>{description}</DialogDescription>
                    )}
                </DrawerHeader>
                {children}
                <DrawerFooter className="pt-2">
                    <DrawerClose asChild>
                        <Button variant="outline">Cancel</Button>
                    </DrawerClose>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    );
};
