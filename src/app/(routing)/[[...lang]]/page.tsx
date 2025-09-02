import { DesktopView } from "@/app/(features)/(desktop)/_components/DesktopView";
import { MobileView } from "@/app/(features)/(mobile)/_components/MobileView";
import { PageProps } from "@/types/app";

export { generateMetadata } from "@/configs/metadata";

export default function Home({}: PageProps) {
    return (
        <>
            <DesktopView />
            <MobileView />
        </>
    );
}
