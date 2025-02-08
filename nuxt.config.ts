// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: "2024-11-01",
    devtools: { enabled: false },
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
        lazy: true,
        langDir: "/locales",
        strategy: "prefix_except_default",
        locales:  [
            {
                code: "en",
                file: "en.json"
            },
            {
                code: "hu",
                file: "hu.json"
            }
        ],
        defaultLocale: "hu"
    },
    plugins: [
        {
            src: "~/plugins/bootstrap.js",
            mode: "client"
        }
    ]
})
