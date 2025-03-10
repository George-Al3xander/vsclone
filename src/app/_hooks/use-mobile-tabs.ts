import { useState } from "react";

export const useMobileTabs = () => {
    const [tab, setTab] = useState<"editor" | "output">("editor");
    const onTabChange = (value: string) => setTab(value as "editor" | "output");

    return { tab, onTabChange };
};
