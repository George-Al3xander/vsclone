import { EditingAreaDesktop } from "@/app/_components/editor/EditingAreaDesktop";
import { LanguageSelectionList } from "@/app/_components/shared/LanguageSelectionList";

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
