import { LanguageSelectionList } from "@/app/(language)";
import { DesktopEditingArea } from "./DesktopEditingArea";

export const DesktopView = () => {
    return (
        <div className="editor-desktop-grid">
            <nav className="roundedGlass">
                <LanguageSelectionList />
            </nav>
            <DesktopEditingArea />
        </div>
    );
};
