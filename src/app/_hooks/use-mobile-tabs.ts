import { useMobileTabsStore } from "@/store/use-mobile-tabs-store";

export const useMobileTabs = () => {
    const tab = useMobileTabsStore((s) => s.tab);
    const onTabChange = useMobileTabsStore((s) => s.setTab);

    return { tab, onTabChange };
};
