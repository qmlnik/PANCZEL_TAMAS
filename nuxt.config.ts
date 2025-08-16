export default defineNuxtConfig({
    compatibilityDate: "2024-11-01",
    devtools: { enabled: true },
    app: {
        head: {
            link: [
                { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
                { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png" },
                { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon-32x32.png" },
                { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon-16x16.png" },
                { rel: "manifest", href: "/site.webmanifest" }
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
                language: "en"
            },
            {
                code: "hu",
                language: "hu-HU"
            }
        ],
        defaultLocale: "en",
        customRoutes: "config",
        pages: {
            "composer-classic": {
                en: "/composer/classic",
                hu: "/zeneszerzo/klasszikus"
            },
            "composer-classic-orchestra": {
                en: "/composer/classic/orchestra-compositions",
                hu: "/zeneszerzo/klasszikus/zenekari-muvek"
            },
            "composer-classic-vocal": {
                en: "/composer/classic/vocal-compositions",
                hu: "/zeneszerzo/klasszikus/vokalis-muvek"
            },
            "composer-classic-chamber": {
                en: "/composer/classic/chamber-compositions",
                hu: "/zeneszerzo/klasszikus/kamara-muvek"
            }, 
            "composer-others": {
                en: "/composer/others",
                hu: "/zeneszerzo/masok-stilusaban"
            },
            "composer-others-Bach": {
                en: "/composer/others/ala-Bach",
                hu: "/zeneszerzo/masok-stilusaban/ala-Bach"
            },
            "composer-others-Mozart": {
                en: "/composer/others/Mozart-Requiem-additions",
                hu: "/zeneszerzo/masok-stilusaban/Mozart-Requiem-kiegeszitesek"
            },
            "composer-others-Liszt": {
                en: "/composer/others/Liszt-Les-Quatre-Élémens",
                hu: "/zeneszerzo/masok-stilusaban/Liszt-Les-Quatre-Élémens"
            },
            "composer-gospel": {
                en: "/composer/gospel",
                hu: "/zeneszerzo/gospel"
            },
            violinist: {
                en: "/violinist",
                hu: "/hegedumuvesz"
            },
            conductor: {
                en: "/conductor",
                hu: "/karmester"
            },
            biography: {
                en: "/biography",
                hu: "/oneletrajz"
            },
            gallery: {
                en: "/gallery",
                hu: "/galeria"
            }
        },
        baseUrl: "https://tamaspanczel.com"
    },
    plugins: [
        {
            src: "~/plugins/bootstrap.js",
            mode: "client"
        }
    ]
})
