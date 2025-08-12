<template>
    <MusicContentLayout
        currentSubcategoryMenu="composer"
        :currentSubcategory="null"
    >
        <Content
            ref="content"
            :contents="subcategories[currentCategory].content"
            @audio-play="stopAllAudio"
        />
    </MusicContentLayout>
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
            subcategoryOrder: ["classic", "anotherComposerStyle", "gospel"],
            subcategories: {
                classic: {
                    title: {
                        en: "Classic",
                        hu: "Klasszikus"
                    },
                    content: [
                        
                    ]
                },
                anotherComposerStyle: {
                    title: {
                        en: "Others",
                        hu: "Mások stílusában"
                    },
                    content: [
                        
                        
                        
                    ]
                },
                gospel: {
                    title: {
                        en: "Gospel",
                        hu: "Gospel"
                    },
                    content: [
                        
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