import { NextRequest, NextResponse } from 'next/server';
import { routing } from './i18n/routing';
import createMiddleware from "next-intl/middleware";

const handleI18nRouting = createMiddleware(routing);

export function proxy(request: NextRequest): NextResponse {
    return handleI18nRouting(request);
}

export const config = {
    matcher: "/((?!api|trpc|_next|_vercel|.*\\..*).*)"
};
