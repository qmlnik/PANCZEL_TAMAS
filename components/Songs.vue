<template>
    <section class="section-container p-4 d-flex align-items-center flex-column">
        <div class="bg-light p-3 mb-4 fs-6 rounded">
            <h3 class="mb-3 text-primary text-center">Categories</h3>
            <div class="d-flex justify-content-center flex-wrap" style="gap: 0.5rem;">
                <div
                    v-for="(songCategory, index) in songCategoryOrder"
                    :key="songCategory"
                    :class="[songCategory === currentCategory ? 'category-selected' : null]"
                    class="song-category p-3 rounded border border-dark"
                    @click="changeCategory(songCategory)"
                >
                    {{ songCategories[songCategory].title }}
                </div>
            </div>
        </div>
        <div class="text-center fs-2 text-primary mb-4 fw-bold">{{ songCategories[currentCategory].title }}</div>
        <ClientOnly>
            <div style="max-width: 1000px">
                <div
                    v-for="({ author, title, src, cover, description }, index) in songCategories[currentCategory].songs"
                    :key="`${author}-${title}`"
                    :class="[index < songCategories[currentCategory].songs.length - 1 ? 'mb-3' : null]"
                >
                    <ScrollFadeIn>
                        <AudioPlayer
                            ref="songs"
                            :author="author"
                            :title="title"
                            :src="src"
                            :cover="cover"
                            :description="description"
                            @play="stopAllAudio"
                        />
                    </ScrollFadeIn>
                </div>
            </div>
        </ClientOnly>
    </section>
</template>

<script>
import Letai_Kis_Gabi_Koszonom_hogy_vagy from "~/assets/songs/ghospel/Letai_Kis_Gabi_Koszonom_hogy_vagy.mp3";
import Szeretet_himnusz from "~/assets/songs/ghospel/Szeretet_himnusz.mp3";
import Fejes_Zolies_es_a_Vidam_Szimfonikusok from "~/assets/songs/ghospel/Fejes_Zolies_es_a_Vidam_Szimfonikusok.mp3";

import Atvaltozasok from "~/assets/songs/classic/Atvaltozasok.mp3";
import Divertimento_Concertante from "~/assets/songs/classic/Divertimento_Concertante.mp3";
import Hadd_eljek from "~/assets/songs/classic/Hadd_eljek.mp3";
import Passacagila from "~/assets/songs/classic/Passacagila.mp3";
import Psalm_29 from "~/assets/songs/classic/Psalm_29.mp3";

import Fuvosotos_1 from "~/assets/songs/classic_wind_quintet/Fuvosotos_1.mp3";
import Fuvosotos_2 from "~/assets/songs/classic_wind_quintet/Fuvosotos_2.mp3";
import Fuvosotos_3 from "~/assets/songs/classic_wind_quintet/Fuvosotos_3.mp3";
import Fuvosotos_4 from "~/assets/songs/classic_wind_quintet/Fuvosotos_4.mp3";

import Klezmer_16 from "~/assets/songs/classic_klezmer_szvit/16.mp3";
import Klezmer_17 from "~/assets/songs/classic_klezmer_szvit/17.mp3";
import Klezmer_18 from "~/assets/songs/classic_klezmer_szvit/18.mp3";
import Klezmer_19 from "~/assets/songs/classic_klezmer_szvit/19.mp3";

import Bach_Largo from "~/assets/songs/other_composers_style/Bach_Largo.mp3";

import Létai_Kis_Gabi from "~/assets/images/Létai_Kis_Gabi.jpg";

export default {
    data() {
        return {
            currentCategory: "ghospel",
            songCategoryOrder: ["ghospel", "classic", "classicWindQuintet", "classicKlezmerSzvit", "anotherComposerStyle"],
            songCategories: {
                ghospel: {
                    title: "Ghospel",
                    songs: [
                        {
                            author: "Pánczél Tamás",
                            title: "Köszönöm hogy vagy (Létai Kis Gabi)",
                            src: Letai_Kis_Gabi_Koszonom_hogy_vagy,
                            cover: Létai_Kis_Gabi,
                            description: "egy hosszú hosszú hosszú hosszú hosszú hosszú hosszú hosszúleírás"
                        },
                        {
                            author: "Pánczél Tamás",
                            title: "Szeretet himnusz",
                            src: Szeretet_himnusz,
                            cover: null,
                            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
                        },
                        {
                            author: "Pánczél Tamás",
                            title: "Fejes Zoli és es a Vidám Szimfónikusok",
                            src: Fejes_Zolies_es_a_Vidam_Szimfonikusok,
                            cover: null,
                            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
                        }
                    ]
                },
                classic: {
                    title: "Classic",
                    songs: [
                        {
                            author: "Pánczél Tamás",
                            title: "Átváltozások",
                            src: Atvaltozasok,
                            cover: null,
                            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
                        },
                        {
                            author: "Pánczél Tamás",
                            title: "Divertimento Concertante",
                            src: Divertimento_Concertante,
                            cover: null,
                            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
                        },
                        {
                            author: "Pánczél Tamás",
                            title: "Hadd éljek",
                            src: Hadd_eljek,
                            cover: null,
                            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
                        },
                        {
                            author: "Pánczél Tamás",
                            title: "Passacagila",
                            src: Passacagila,
                            cover: null,
                            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
                        },
                        {
                            author: "Pánczél Tamás",
                            title: "Psalm 29",
                            src: Psalm_29,
                            cover: null,
                            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
                        }
                    ]
                },
                classicWindQuintet: {
                    title: "Classic - Wind quintet",
                    songs: [
                        {
                            author: "Pánczél Tamás",
                            title: "Fuvosotos 1",
                            src: Fuvosotos_1,
                            cover: null,
                            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
                        },
                        {
                            author: "Pánczél Tamás",
                            title: "Fuvosotos 2",
                            src: Fuvosotos_2,
                            cover: null,
                            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
                        },
                        {
                            author: "Pánczél Tamás",
                            title: "Fuvosotos 3",
                            src: Fuvosotos_3,
                            cover: null,
                            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
                        },
                        {
                            author: "Pánczél Tamás",
                            title: "Fuvosotos 4",
                            src: Fuvosotos_4,
                            cover: null,
                            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
                        }
                    ]
                },
                classicKlezmerSzvit: {
                    title: "Classic - Klezmer Szvit",
                    songs: [
                        {
                            author: "Pánczél Tamás",
                            title: "16",
                            src: Klezmer_16,
                            cover: null,
                            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
                        },
                        {
                            author: "Pánczél Tamás",
                            title: "17",
                            src: Klezmer_17,
                            cover: null,
                            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
                        },
                        {
                            author: "Pánczél Tamás",
                            title: "18",
                            src: Klezmer_18,
                            cover: null,
                            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
                        },
                        {
                            author: "Pánczél Tamás",
                            title: "19",
                            src: Klezmer_19,
                            cover: null,
                            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
                        }
                    ]
                },
                anotherComposerStyle: {
                    title: "Others",
                    songs: [
                        {
                            author: "Johann Sebastian Bach",
                            title: "Bach Largo",
                            src: Bach_Largo,
                            cover: null,
                            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
                        }
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
            this.$refs.songs.forEach(audio => audio.pause());
        }
    }
}
</script>

<style lang="scss">
@import "~/node_modules/bootstrap/scss/functions";
@import "~/assets/bootstrap/variables";
@import "~/node_modules/bootstrap/scss/variables";
@import "~/node_modules/bootstrap/scss/mixins/breakpoints";

.section-container {
    background-image: url("~/assets/images/songs_background.jpg");

    .song-category {
        cursor: pointer;
        transition: .3s;
        background: $secondary;
        color: $dark;
        display: flex;
        align-items: center;

        &:hover {
            background: #c7bc9b;
        }

        &.category-selected {
            background: $primary;
        }

        @include media-breakpoint-down(sm) {
            width: 100%;
        }
    }
}


</style>