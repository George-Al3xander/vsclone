import { usePathname } from 'next/navigation';

import { getCurrentLanguage } from '@/lib/utils';

const useGetCurrLang = () => {
    const pathname = usePathname();

    return getCurrentLanguage(pathname);
};

export default useGetCurrLang;
