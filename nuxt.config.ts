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
        vueI18n: "./i18n.config.ts",
        strategy: "prefix_except_default",
        locales: ["en", "hu"],
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
        }
    },
    plugins: [
        {
            src: "~/plugins/bootstrap.js",
            mode: "client"
        }
    ]
})
