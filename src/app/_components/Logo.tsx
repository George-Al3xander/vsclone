import { metadataConfig } from "@/configs/metadata";
import { VscVscodeIcon } from "@/ui/icons";
import { cn } from "@/utils/cn";

export const Logo = ({ size = "md" }: { size?: "sm" | "md" | "lg" }) => {
    return (
        <div
            className={cn("flex items-center gap-2 font-bold", {
                "text-xl": size === "sm",
                "text-2xl": size === "md",
                "text-4xl": size === "lg",
            })}
        >
            <VscVscodeIcon />
            <h1> {metadataConfig.title as string}</h1>
        </div>
    );
};
