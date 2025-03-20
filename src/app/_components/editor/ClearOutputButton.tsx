import { useCodeActions } from "@/store/code-store";
import { Button } from "@/ui/components/atoms/Button";
import { RxCross1Icon } from "@/ui/icons";

export const ClearOutputButton = () => {
    const { clearCompilationOutput } = useCodeActions();

    return (
        <Button variant="ghost" onClick={clearCompilationOutput} size="icon">
            <span className="sr-only">Clear output</span>
            <RxCross1Icon size={20} />
        </Button>
    );
};
