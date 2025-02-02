<template>
    <section class="section-container p-4">
        <div class="d-flex justify-content-center">
            <div class="d-flex justify-content-center bg-light p-4 mb-4 fs-6" style="border-radius: 1rem;">
                <div
                    v-for="(songCategory, index) in songCategoryOrder"
                    :key="songCategory"
                    :class="[
                        songCategory === currentCategory ? 'category-selected' : null,
                        index !== songCategoryOrder.length - 1 ? 'me-4' : null
                    ]"
                    class="song-category"
                    @click="changeCategory(songCategory)"
                >
                    {{ songCategories[songCategory].title }}
                </div>
            </div>
        </div>
        <div class="text-center fs-2 text-primary mb-4 fw-bold">{{ songCategories[currentCategory].title }}</div>
        <ClientOnly>
            <div class="row g-3">
                <div
                    v-for="({ author, title, src, cover, description }) in songCategories[currentCategory].songs"
                    :key="`${author}-${title}`"
                    class="col-md-6 col-xl-4"
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
import Letai_Kis_Gabi_Koszonom_hogy_vagy from "~/assets/songs/ghospel/Letai_Kis_Gabi_Koszonom_hogy_vagy.wav";
import Szeretet_himnusz from "~/assets/songs/ghospel/Szeretet_himnusz.wav";

import Létai_Kis_Gabi from "~/assets/images/Létai_Kis_Gabi.jpg";

export default {
    data() {
        return {
            currentCategory: "ghospel",
            songCategoryOrder: ["ghospel", "classic", "anotherComposerStyle"],
            songCategories: {
                ghospel: {
                    title: "Ghospel",
                    songs: [
                        {
                            author: "Pánczél Tamás",
                            title: "Létai Kis Gabi - Köszönöm hogy vagy",
                            src: Letai_Kis_Gabi_Koszonom_hogy_vagy,
                            cover: Létai_Kis_Gabi,
                            description: "egy hosszú hosszú hosszú hosszú hosszú hosszú hosszú hosszúleírás"
                        },
                        {
                            author: "Pánczél Tamás",
                            title: "Szeretet himnusz",
                            src: Szeretet_himnusz,
                            cover: null,
                            description: "egy hosszú hosszú hosszú hosszú hosszú hosszú hosszú hosszúleírás"
                        }
                    ]
                },
                classic: {
                    title: "Classic",
                    songs: [

                    ]
                },
                anotherComposerStyle: {
                    title: "Others",
                    songs: [

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

.section-container {
    background-image: url("~/assets/images/background_dark.webp");

    .song-category {
        cursor: pointer;
        border: 2px solid $secondary;
        transition: .3s;
        color: $secondary;
        border-radius: 25px;
        padding: 0 1rem;
        height: 50px;
        display: flex;
        align-items: center;

        &:hover, &.category-selected {
            background: $primary;
            color: $secondary;
        }
    }
}


</style>