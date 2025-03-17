import { Toaster } from "@/ui/components/organisms/Sonner";
import { FC, PropsWithChildren } from "react";

export const Providers: FC<PropsWithChildren> = ({ children }) => (
    <>
        {children}
        <Toaster />
    </>
);
