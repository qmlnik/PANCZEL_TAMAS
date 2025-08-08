import Letai_Kis_Gabi_Koszonom_hogy_vagy from "~/assets/songs/composer/gospel/Letai_Kis_Gabi_Koszonom_hogy_vagy.mp3";
import Szeretet_himnusz from "~/assets/songs/composer/gospel/Szeretet_himnusz.mp3";
import Fejes_Zolies_es_a_Vidam_Szimfonikusok from "~/assets/songs/composer/gospel/Fejes_Zolies_es_a_Vidam_Szimfonikusok.mp3";

import Atvaltozasok from "~/assets/songs/composer/classic/Atvaltozasok.mp3";
import Divertimento_Concertante from "~/assets/songs/composer/classic/Divertimento_Concertante.mp3";
import Hadd_eljek from "~/assets/songs/composer/classic/Hadd_eljek.mp3";
import Passacagila from "~/assets/songs/composer/classic/Passacagila.mp3";
import Psalm_29 from "~/assets/songs/composer/classic/Psalm_29.mp3";
import Fuvosotos from "~/assets/songs/composer/classic/Fuvosotos.mp3";
import Klezmer_Szvit from "~/assets/songs/composer/classic/Klezmer_Szvit.mp3";

const categoriesContent = {
    composer: {
        subCategoryOrder: ["classic", "others", "gospel"],
        subCategoies: {
            classic: {
                title: {
                    en: "Classic",
                    hu: "Klasszikus"
                },
                page: "composer-classic",
                albums: [
                    {
                        img: null,
                        page: "composer-classic-orchestra",
                        title: {
                            en: "Orchestra compositions",
                            hu: "Zenekari művek"
                        },
                        description: {
                            en: "Orchestra compositions",
                            hu: "Zenekari művek"
                        },
                        content: [
                            {
                                type: CONTENT_TYPE.IFRAME,
                                src: "https://www.youtube.com/embed/Z_wT0pKZZf4?si=V5jqnvrByMw94RFM",
                            },
                            {
                                type: CONTENT_TYPE.IFRAME,
                                src: "https://www.youtube.com/embed/3Tpobd5Fn80?si=TTI-8mjiCoIYfTpV",
                            },
                            {
                                type: CONTENT_TYPE.AUDIO,
                                en: {
                                    author: "Tamás Pánczél",
                                    title: "Átváltozások",
                                    description: ""
                                },
                                hu: {
                                    author: "Pánczél Tamás",
                                    title: "Átváltozások",
                                    description: ""
                                },
                                src: Atvaltozasok,
                                cover: null
                            },
                            {
                                type: CONTENT_TYPE.AUDIO,
                                en: {
                                    author: "Tamás Pánczél",
                                    title: "Divertimento Concertante",
                                    description: ""
                                },
                                hu: {
                                    author: "Pánczél Tamás",
                                    title: "Divertimento Concertante",
                                    description: ""
                                },
                                src: Divertimento_Concertante,
                                cover: null
                            },
                            {
                                type: CONTENT_TYPE.AUDIO,
                                en: {
                                    author: "Tamás Pánczél",
                                    title: "Klezmer Szvit",
                                    description: ""
                                },
                                hu: {
                                    author: "Pánczél Tamás",
                                    title: "Klezmer Szvit",
                                    description: ""
                                },
                                src: Klezmer_Szvit,
                                cover: null
                            },
                            {
                                type: CONTENT_TYPE.IFRAME,
                                src: "https://www.youtube.com/embed/RZtEK81213U?si=hMA05DlpbJTDq-zD",
                            },
                            {
                                type: CONTENT_TYPE.AUDIO,
                                en: {
                                    author: "Tamás Pánczél",
                                    title: "Szeretet himnusz",
                                    description: ""
                                },
                                hu: {
                                    author: "Pánczél Tamás",
                                    title: "Szeretet himnusz",
                                    description: ""
                                },
                                src: Szeretet_himnusz,
                                cover: null
                            },
                            {
                                type: CONTENT_TYPE.AUDIO,
                                en: {
                                    author: "Tamás Pánczél",
                                    title: "Passacagila",
                                    description: ""
                                },
                                hu: {
                                    author: "Pánczél Tamás",
                                    title: "Passacagila",
                                    description: ""
                                },
                                src: Passacagila,
                                cover: null
                            },
                        ]
                    },
                    {
                        img: null,
                        page: "composer-classic-vocal",
                        title: {
                            en: "Vocal compositions",
                            hu: "Vokális művek"
                        },
                        description: {
                            en: "Vocal compositions",
                            hu: "Vokális művek"
                        },
                        content: [
                            {
                                type: CONTENT_TYPE.AUDIO,
                                en: {
                                    author: "Tamás Pánczél",
                                    title: "Psalm 29",
                                    description: ""
                                },
                                hu: {
                                    author: "Pánczél Tamás",
                                    title: "29. Zsoltár",
                                    description: ""
                                },
                                src: Psalm_29,
                                cover: null
                            },
                            {
                                type: CONTENT_TYPE.AUDIO,
                                en: {
                                    author: "Tamás Pánczél",
                                    title: "Hadd éljek",
                                    description: ""
                                },
                                hu: {
                                    author: "Pánczél Tamás",
                                    title: "Hadd éljek",
                                    description: ""
                                },
                                src: Hadd_eljek,
                                cover: null
                            },
                        ]
                    },
                    {
                        img: null,
                        page: "composer-classic-chamber",
                        title: {
                            en: "Chamber compositions",
                            hu: "Kamara művek"
                        },
                        description: {
                            en: "Chamber compositions",
                            hu: "Kamara művek"
                        },
                        content: [
                            {
                                type: CONTENT_TYPE.AUDIO,
                                en: {
                                    author: "Tamás Pánczél",
                                    title: "Wind quintet",
                                    description: ""
                                },
                                hu: {
                                    author: "Pánczél Tamás",
                                    title: "Fúvósötös",
                                    description: ""
                                },
                                src: Fuvosotos,
                                cover: null
                            },
                            {
                                type: CONTENT_TYPE.IFRAME,
                                src: "https://www.youtube.com/embed/bTg4-bp8DKU?si=QEtnvoKu8XPDgQf3",
                            },
                        ]
                    }
                ]
            },
            others: {
                title: {
                    en: "Others",
                    hu: "Mások stílusában"
                },
                page: "composer-others",
                albums: [
                    {
                        img: null,
                        page: "composer-others-Bach",
                        title: {
                            en: "ala Bach",
                            hu: "ala Bach"
                        },
                        description: {
                            en: "ala Bach",
                            hu: "ala Bach"
                        },
                        content: [
                            {
                                type: CONTENT_TYPE.IFRAME,
                                src: "https://www.youtube.com/embed/GoFo-taTX5w?si=BRpHtH-vZyTGio9m",
                            },
                            {
                                type: CONTENT_TYPE.IFRAME,
                                src: "https://www.youtube.com/embed/3hfql7b-DnQ?si=PE1LpV6PGdIrOiNw",
                            },
                            {
                                type: CONTENT_TYPE.IFRAME,
                                src: "https://www.youtube.com/embed/8D7ZzNtR-eI?si=rbtTmuyXuz_f_-fI",
                            }
                        ]
                    },
                    {
                        img: null,
                        page: "composer-others-Mozart",
                        title: {
                            en: "Mozart Requiem additions",
                            hu: "Mozart Requiem kiegészítések"
                        },
                        description: {
                            en: "Mozart Requiem additions",
                            hu: "Mozart Requiem kiegészítések"
                        },
                        content: [
                            {
                                type: CONTENT_TYPE.IFRAME,
                                src: "https://www.youtube.com/embed/E814iS5w42M?si=nyq70Ad7vDXZJ2z9",
                            },
                            {
                                type: CONTENT_TYPE.IFRAME,
                                src: "https://www.youtube.com/watch?v=s3qfyOAARdc",
                            },
                        ]
                    },
                    {
                        img: null,
                        page: "composer-others-Liszt",
                        title: {
                            en: "Liszt Les Quatre Élémens",
                            hu: "Liszt Les Quatre Élémens"
                        },
                        description: {
                            en: "Liszt Les Quatre Élémens",
                            hu: "Liszt Les Quatre Élémens"
                        },
                        content: [
                            {
                                type: CONTENT_TYPE.IFRAME,
                                src: "https://www.youtube.com/embed/c6KBV3-ljEw?si=uyQ7lQFQXzhKSh1z",
                            },
                        ]
                    }
                ]
            },
            gospel: {
                title: {
                    en: "Gospel",
                    hu: "Gospel"
                },
                page: "composer-gospel",
                content: [
                    {
                        type: CONTENT_TYPE.AUDIO,
                        en: {
                            author: "Tamás Pánczél",
                            title: "Köszönöm hogy vagy (Létay Kiss Gabriella)",
                            description: ""
                        },
                        hu: {
                            author: "Pánczél Tamás",
                            title: "Köszönöm hogy vagy (Létay Kiss Gabriella)",
                            description: ""
                        },
                        src: Letai_Kis_Gabi_Koszonom_hogy_vagy,
                        cover: null
                    },
                    {
                        type: CONTENT_TYPE.AUDIO,
                        en: {
                            author: "Tamás Pánczél",
                            title: "Fejes Zoli és es a Vidám Szimfónikusok",
                            description: ""
                        },
                        hu: {
                            author: "Pánczél Tamás",
                            title: "Fejes Zoli és es a Vidám Szimfónikusok",
                            description: ""
                        },
                        src: Fejes_Zolies_es_a_Vidam_Szimfonikusok,
                        cover: null
                    },
                ]
            }
        }
    },
    violinist: {
        
    },
    conductor: {

    }
};

function getSubcategoryMenu(category) {
    const hasCategorySubcategoryMenu  =
        categoriesContent[category].subCategoies !== undefined
        && categoriesContent[category].subCategoryOrder !== undefined;

    if (!hasCategorySubcategoryMenu) {
        return null;
    }

    const subCategoryContentProcessed = Object.entries(categoriesContent[category].subCategoies)
        .map(([subcategory, { title, page }]) => ([subcategory, { title: { ...title }, page }]));

    return {
        subCategoryOrder: { ...categoriesContent[category].subCategoryOrder },
        subCategoryContent: Object.fromEntries(subCategoryContentProcessed)
    };
}

function getAlbums(category, subCategory = null) {
    const isAlbumsInSubcategory = categoriesContent[category].subCategoies?.[subCategory]?.albums !== undefined;

    if (isAlbumsInSubcategory) {
        return JSON.parse(JSON.stringify(categoriesContent[category].subCategoies[subCategory].albums));
    }

    const isAlbumsinCategory = categoriesContent[category].albums !== undefined;

    if (isAlbumsinCategory) {
        return JSON.parse(JSON.stringify(categoriesContent[category].albums));
    }

    return null;
}

function getAlbumContent(category, subCategory, albumPage) {
    const albums = getAlbums(category, subCategory);

    if (albums !== null) {
        const album = albums.find(({ page }) => page === albumPage);

        return JSON.parse(JSON.stringify(album || null));
    }

    return null;
}

function getRegularContent(category, subCategory = null,) {
    if (subCategory !== null) {
        return JSON.parse(JSON.stringify(categoriesContent[category].subCategoies[subCategory].content));
    }

    return JSON.parse(JSON.stringify(categoriesContent[category].content));
}

export { getSubcategoryMenu, getAlbums, getAlbumContent, getRegularContent };