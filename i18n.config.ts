export default defineI18nConfig(() => ({
    legacy: false,
    locale: "en",
    messages: {
        en: {
            meta: {
                title: "Tamas Panczel",
                pageTitle: {
                    violinist: "Violinist",
                    composer: "Composer",
                    conductor: "Conductor"
                },
                content: "Official site of Tamas Panczel Hungarian composer, conductor and violinist."
            },
            error: {
                general: "An error has occured, back to the homepage",
                '404': "Page not found",
                back: "Back to homepage"
            },
            showMore: "Show more",
            showLess: "Show less",
            languageSelect: "Select language",
            hero: {
                title: "tamas panczel",
                subtitle: {
                    composer: "Composer",
                    violinist: "Violinist",
                    conductor: "Conductor"
                },
                introduction: {
                    title: "introduction",
                    subtitle: "Passion drives every note",
                    content: "At the heart of this extraordinary artist\"s musical journey lies a profound and unwavering motivation, one that has been the driving force behind every note played, composed, and conducted. The motivation is not merely personal accomplishment or recognition, but the genuine desire to touch the lives of others through the universal language of music, forging emotional connections that transcend boundaries and time itself."
                }
            },
            categories: "Categories",
            footer: {
                address: "Address",
                phone: "Phone",
                email: "Email",
                connect: "Connect"
            }
        },
        hu: {
            meta: {
                title: "Pánczél Tamás",
                pageTitle: {
                    composer: "Zeneszerző",
                    violinist: "Hegedűművész",
                    conductor: "Karmester"
                },
                content: "Pánczél Tamás magyar zeneszerző, hegedűművész és karmester hivatalos oldala."
            },
            error: {
                general: "Hiba történt, vissza a főoldalra",
                '404': "Oldal nem található",
                back: "Vissza a főoldalra"
            },
            showMore: "Többet",
            showLess: "Kevesebbet",
            languageSelect: "Nyelv választása",
            hero: {
                title: "pánczél tamás",
                subtitle: {
                    violinist: "Hegedűművész",
                    composer: "Zeneszerző",
                    conductor: "Karmester"
                },
                introduction: {
                    title: "bemutatkozás",
                    subtitle: "Minden hangot a szenvedély vezet",
                    content: ""
                }
            },
            categories: "Kategóriák",
            footer: {
                address: "Cím",
                phone: "Telefon",
                email: "Email",
                connect: "Kapcsolat"
            }
        }
    },
}))