import { NextRequest, NextResponse } from 'next/server';

import { getCurrentLanguage } from '@/lib/utils';
import { LANGUAGES } from '@/constants/consts';

export function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;
    const language = getCurrentLanguage(pathname);

    if (!LANGUAGES.includes(language as 'cpp')) {
        return NextResponse.error();
    }
    return NextResponse.next();
}

export const config = {
    matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
