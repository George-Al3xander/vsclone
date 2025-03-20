import { useMobileTab, useMobileTabsActions } from "@/store/mobile-tabs-store";

export const useMobileTabs = () => {
    const tab = useMobileTab();
    const { setTab } = useMobileTabsActions();

    return { tab, onTabChange: setTab };
};
