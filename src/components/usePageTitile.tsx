import { useEffect } from 'react';

const BASE_TITLE = 'Актюбинский Высший политехнический колледж';

export function usePageTitle(pageTitle: string) {
    useEffect(() => {
        document.title = `${pageTitle} | ${BASE_TITLE}`;
    }, [pageTitle]);
}
