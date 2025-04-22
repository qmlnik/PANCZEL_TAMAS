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
                    violinist: "Violinist",
                    composer: "Composer",
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
                    violinist: "Hegedűművész",
                    composer: "Zeneszerző",
                    conductor: "Karmester"
                },
                content: "Pánczél Tamás magyar zeneszerző, karmester és hegedűművész hivatalos oldala."
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
                    content: "Lórum ipse száran, jogán, de a medó besítő, a főzés pedig egészen gyűjtő pali. A válka tömbjére üvözölte: a bibecske csakis a ferges kozás zölését kodja bőgőnek, mégpedig szigorúan a korábban boros nésetlevények között. Jelletesség handék adódta: a bibecske nem feselyedi a jáló foránok bűnök, de mert a szajlomta tapált kozás szerdes lecskenyelése a ferges szenség lenne, és mert a mozás részéről erre nem ingol mozmányos."
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