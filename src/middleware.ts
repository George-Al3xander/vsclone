import { LANGUAGES_CONFIG } from "@/configs/languages";
import { NextRequest, NextResponse } from "next/server";

const LANGUAGES = Object.keys(LANGUAGES_CONFIG);

export function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;
    const language = pathname.split("/")[1] || "";

    if (!LANGUAGES.includes(language)) {
        return NextResponse.redirect(new URL("/javascript", request.url));
    }
    return NextResponse.next();
}

export const config = {
    matcher: [
        "/((?!api|_next/static|_next/image|favicon.ico|opengraph-image|sitemap.xml|robots.txt).*)",
    ],
};
