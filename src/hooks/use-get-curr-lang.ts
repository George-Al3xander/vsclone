import { usePathname } from 'next/navigation';

import { TLanguage } from '@/types/types';

const useGetCurrLang = () => {
    const pathname = usePathname();
    const split = pathname.split('/');
    return (split[1].length > 0 ? split[1] : 'javascript') as TLanguage;
};

export default useGetCurrLang;
