export default defineI18nConfig(() => ({
    legacy: false,
    strategy: "prefix_except_default",
    locale: "en",
    messages: {
        en: {
            showMore: "Show more",
            showLess: "Show less",
            languageSelect: "Select language",
            hero: {
                title: "Tamás Pánczél took it back",
                subtitle: "Violinist. Composer. Conductor",
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
            showMore: "Mutass többet",
            showLess: "Kevesebbet",
            languageSelect: "Nyelv választása",
            hero: {
                title: "Pánczél Tamás visszavette",
                subtitle: "Hegedűművész. Zeneszerző.",
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
    defaultLocale: "en"
}))