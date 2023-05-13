/** @type {import('next').NextConfig} */

const nextConfig = {
    i18n: {
        defaultLocale: 'ar',
        locales: ['ar', 'he', 'en'],
        localeDetection: false
    },
    trailingSlash: true,
    experimental: {
        appDir: true
    }
}

module.exports = nextConfig
