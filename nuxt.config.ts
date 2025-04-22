// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: "2024-11-01",
    devtools: { enabled: false },
    app: {
        head: {
            link: [
                { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
                { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
                { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
                { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
                { rel: 'manifest', href: '/site.webmanifest' }
            ]
        }
    },
    css: [
        "~/assets/index.scss"
    ],
    modules: [
        "@nuxt/image",
        "@nuxtjs/i18n",
        "@pinia/nuxt"
    ],
    image: {
        dir: "assets/images",
    },  
    i18n: {
        vueI18n: "./i18n.config.ts",
        strategy: "prefix_except_default",
        locales: [
            {
                code: "en",
                language: 'en'
            },
            {
                code: "hu",
                language: 'hu-HU'
            }
        ],
        defaultLocale: "en",
        customRoutes: 'config',
        pages: {
            composer: {
                en: "/composer",
                hu: "/zeneszerzo"
            },
            violinist: {
                en: "/violinist",
                hu: "/hegedumuvesz"
            },
            conductor: {
                en: "/conductor",
                hu: "/karmester"
            }
        },
        baseUrl: 'https://panczeltamas.com'
    },
    plugins: [
        {
            src: "~/plugins/bootstrap.js",
            mode: "client"
        }
    ]
})
