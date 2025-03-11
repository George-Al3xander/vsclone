import { IconTextBlock } from "@/ui/components/molecules/IconTextBlock";
import { AiFillCodeIcon } from "@/ui/icons";

const Loading = () => {
    return (
        <IconTextBlock
            title="Preparing the code-editing area. It will be available shortly."
            subtitle="Please wait..."
            icon={AiFillCodeIcon}
            containerProps={{
                className:
                    "roundedGlass flex h-[calc(100vh-12rem)] sm:h-[calc(100vh-9rem)] p-4",
            }}
        />
    );
};

export default Loading;
