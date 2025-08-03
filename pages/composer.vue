<template>
    <section class="p-sm-4 d-flex align-items-center flex-column">
        <div class="bg-light p-3 mb-4 fs-6 rounded">
            <h3 class="mb-3 text-primary-light text-center">{{ $t("categories") }}</h3>
            <div class="d-flex justify-content-center flex-wrap" style="gap: 0.5rem;">
                <div
                    v-for="songCategory in subCategoryOrder"
                    :key="songCategory"
                    :class="[songCategory === currentCategory ? 'category-selected' : null]"
                    class="song-category p-3 rounded border border-dark"
                    @click="changeCategory(songCategory)"
                >
                    {{ subCategories[songCategory].title[$i18n.locale] }}
                </div>
            </div>
        </div>
        <h3 class="text-center fs-2 text-primary-light mb-4 fw-bold">{{ subCategories[currentCategory].title[$i18n.locale] }}</h3>
        <ClientOnly>
            <Content
                ref="content"
                :contents="subCategories[currentCategory].content"
                @audio-play="stopAllAudio"
            />
        </ClientOnly>
    </section>
</template>

<script setup>
const { t } = useI18n();

useHead({
    title: `${t("meta.title")} | ${t("meta.pageTitle.composer")}`,
});
</script>

<script>
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

import Létai_Kis_Gabi from "~/assets/images/Létai_Kis_Gabi.jpg";



export default {
    data() {
        return {
            currentCategory: "classic",
            subCategoryOrder: ["classic", "anotherComposerStyle", "gospel"],
            subCategories: {
                classic: {
                    title: {
                        en: "Classic",
                        hu: "Klasszikus"
                    },
                    content: [
                        {
                            type: CONTENT_TYPE.IFRAME,
                            src: "https://www.youtube.com/embed/Z_wT0pKZZf4?si=V5jqnvrByMw94RFM",
                            aspectRatio: IFRAME_ASPECT_RATIO.LOW
                        },
                        {
                            type: CONTENT_TYPE.IFRAME,
                            src: "https://www.youtube.com/embed/3Tpobd5Fn80?si=TTI-8mjiCoIYfTpV",
                            aspectRatio: IFRAME_ASPECT_RATIO.LOW
                        },
                        {
                            type: CONTENT_TYPE.AUDIO,
                            en: {
                                author: "Tamas Panczel",
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
                                author: "Tamas Panczel",
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
                                author: "Tamas Panczel",
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
                            aspectRatio: IFRAME_ASPECT_RATIO.NORMAL
                        },
                        {
                            type: CONTENT_TYPE.AUDIO,
                            en: {
                                author: "Tamas Panczel",
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
                                author: "Tamas Panczel",
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
                        {
                            type: CONTENT_TYPE.AUDIO,
                            en: {
                                author: "Tamas Panczel",
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
                                author: "Tamas Panczel",
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
                        {
                            type: CONTENT_TYPE.AUDIO,
                            en: {
                                author: "Tamas Panczel",
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
                            aspectRatio: IFRAME_ASPECT_RATIO.NORMAL
                        },
                    ]
                },
                anotherComposerStyle: {
                    title: {
                        en: "Others",
                        hu: "Mások stílusában"
                    },
                    content: [
                        {
                            type: CONTENT_TYPE.IFRAME,
                            src: "https://www.youtube.com/embed/E814iS5w42M?si=nyq70Ad7vDXZJ2z9",
                            aspectRatio: IFRAME_ASPECT_RATIO.NORMAL
                        },
                        {
                            type: CONTENT_TYPE.IFRAME,
                            src: "https://www.youtube.com/embed/c6KBV3-ljEw?si=uyQ7lQFQXzhKSh1z",
                            aspectRatio: IFRAME_ASPECT_RATIO.NORMAL
                        },
                        {
                            type: CONTENT_TYPE.IFRAME,
                            src: "https://www.youtube.com/embed/GoFo-taTX5w?si=BRpHtH-vZyTGio9m",
                            aspectRatio: IFRAME_ASPECT_RATIO.LOW
                        },
                        {
                            type: CONTENT_TYPE.IFRAME,
                            src: "https://www.youtube.com/embed/3hfql7b-DnQ?si=PE1LpV6PGdIrOiNw",
                            aspectRatio: IFRAME_ASPECT_RATIO.LOW
                        },
                        {
                            type: CONTENT_TYPE.IFRAME,
                            src: "https://www.youtube.com/embed/8D7ZzNtR-eI?si=rbtTmuyXuz_f_-fI",
                            aspectRatio: IFRAME_ASPECT_RATIO.LOW
                        }
                    ]
                },
                gospel: {
                    title: {
                        en: "Gospel",
                        hu: "Gospel"
                    },
                    content: [
                        {
                            type: CONTENT_TYPE.AUDIO,
                            en: {
                                author: "Tamas Panczel",
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
                                author: "Tamas Panczel",
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
        };
    },
    methods: {
        changeCategory(newCategory) {
            this.currentCategory = newCategory;
            this.stopAllAudio();
        },
        stopAllAudio() {
            this.$refs.content.$refs.songs.forEach(audio => audio.pause());
        }
    }
}
</script>

<style lang="scss">
@import "~/node_modules/bootstrap/scss/functions";
@import "~/node_modules/bootstrap/scss/variables";
@import "~/assets/bootstrap/variables";
@import "~/node_modules/bootstrap/scss/mixins/breakpoints";

.song-category {
    cursor: pointer;
    transition: .3s;
    background: $secondary;
    color: $dark;
    display: flex;
    align-items: center;

    &:hover {
        background: $primary-light;
    }

    &.category-selected {
        background: $primary;
    }

    @include media-breakpoint-down(sm) {
        width: 100%;
    }
}
</style>