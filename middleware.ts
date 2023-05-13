import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
    locales: ['ar', 'he', 'en'],
    defaultLocale: 'ar'
});

export const config = {
    matcher: ['/((?!api|_next|.*\\..*).*)']
};