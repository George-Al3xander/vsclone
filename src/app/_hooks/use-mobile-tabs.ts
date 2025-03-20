import { mobileTabsStore } from "@/store/mobile-tabs-store";

export const useMobileTabs = () => {
    const tab = mobileTabsStore((s) => s.tab);
    const onTabChange = mobileTabsStore((s) => s.setTab);

    return { tab, onTabChange };
};
