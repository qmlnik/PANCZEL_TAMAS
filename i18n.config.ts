export default defineI18nConfig(() => ({
    legacy: false,
    locale: "en",
    messages: {
        en: {
            meta: {
                title: "Tamás Pánczél",
                pageTitle: {
                    violinist: "Violinist",
                    composer: "Composer",
                    conductor: "Conductor",
                    biography: "Biography",
                    gallery: "Gallery"
                },
                content: "Official site of Tamás Pánczél Hungarian composer, conductor and violinist."
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
                title: "tamás pánczél",
                subtitle: {
                    composer: "Composer",
                    violinist: "Violinist",
                    conductor: "Conductor",
                    biography: "Biography",
                    gallery: "Gallery"
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
            },
            back: "Back",
            composerNight: "Composer night"
        },
        hu: {
            meta: {
                title: "Pánczél Tamás",
                pageTitle: {
                    composer: "Zeneszerző",
                    violinist: "Hegedűművész",
                    conductor: "Karmester",
                    biography: "Önéletrajz",
                    gallery: "Galéria"
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
                    conductor: "Karmester",
                    biography: "Önéletrajz",
                    gallery: "Galéria"
                },
                introduction: {
                    title: "bemutatkozás",
                    subtitle: "Minden hangot a szenvedély vezet",
                    content: "Petrovics Emil és Vajda János növendékeként szereztem zeneszerzés diplomát a Zeneakadémián. Alkotásaimmal mindenekelőtt szeretnék adni valamit a zenehallgató számára; ez a legalapvetőbb vágy, mely a zeneszerzésre motivál. Hangjaimmal szeretném a zenehallgató figyelmét megragadni, elvinni őt valahova, felemelni és valamelyest a „szívéhez szólni”. Mindezt a zenében rejlő kifejezőeszközök gazdag és csodálatos tárházával. A zene ugyanis beszélni tud, emberi érzéseket, állapotokat tud kifejezni, a lélek egyfajta tükre lehet, mélységekbe és magasságokba vihet el, jeleneteket vagy akár egy egész dramaturgiát képes ábrázolni."
                }
            },
            categories: "Kategóriák",
            footer: {
                address: "Cím",
                phone: "Telefon",
                email: "Email",
                connect: "Kapcsolat"
            },
            back: "Vissza",
            composerNight: "Szerzői est"
        }
    },
}))