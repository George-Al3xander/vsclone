import { Button } from "@/ui/components/atoms/Button";
import { ResponsiveBlock } from "@/ui/components/molecules/ResponsiveBlock";
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

type Props = PropsWithChildren<{
    isOpen: boolean;
    setIsOpen: (b: boolean) => void;
    title: string;
    description?: string;
    breakpoint?: "sm" | "md" | "lg" | "xl" | "2xl";
}>;

export const ResponsiveDialog: FC<Props> = ({
    children,
    isOpen,
    setIsOpen,
    title,
    description,
    breakpoint = "sm",
}) => (
    <ResponsiveBlock
        breakpoint={breakpoint}
        mobileView={
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
        }
        desktopView={
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
        }
    />
);
