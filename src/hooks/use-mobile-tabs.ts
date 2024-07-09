import { useRecoilState } from 'recoil';

import { $mobileTab } from '@/state/atoms/atoms';
import { TMobileTab } from '@/types/types';

const useMobileTabs = () => {
    const [tab, setTab] = useRecoilState($mobileTab);
    const onTabChange = (value: string) => setTab(value as TMobileTab);

    return { tab, onTabChange };
};

export default useMobileTabs;
