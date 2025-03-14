import { EditingAreaDesktop } from "@/app/_components/EditingAreaDesktop";
import { LanguageSelectionList } from "@/app/_components/LanguageSelectionList";

export const DesktopView = () => {
    return (
        <div className="editor-desktop-grid">
            <nav className="roundedGlass">
                <LanguageSelectionList />
            </nav>
            <EditingAreaDesktop />
        </div>
    );
};
