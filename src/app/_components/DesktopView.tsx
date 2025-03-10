import { Editor } from "@/app/_components/Editor";
import { LanguageSelectionList } from "@/app/_components/LanguageSelectionList";
import { OutputPanel } from "@/app/_components/OutputPanel";

export const DesktopView = () => {
    return (
        <div className="editor-desktop-grid">
            <nav className="roundedGlass">
                <LanguageSelectionList />
            </nav>

            <div className="flex w-full flex-col gap-4">
                <Editor />
                <OutputPanel />
            </div>
        </div>
    );
};
