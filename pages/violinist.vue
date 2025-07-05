<template>
    <h3 class="text-center fs-2 text-primary-light py-4 fw-bold">{{ $t('hero.subtitle.violinist') }}</h3>
    <Content
        ref="content"
        :contents="content"
    />
</template>

<script setup>
const { t } = useI18n();

useHead({
    title: `${t("meta.title")} | ${t("meta.pageTitle.violinist")}`,
});
</script>

<script>
import Bach_Largo from "~/assets/songs/composer/other_composers_style/Bach_Largo.mp3";
import gmollfugareszlet from "~/assets/songs/violinist/gmollfugareszlet.mp3";

export default {
    data() {
        return {
            content: [
                {
                    type: CONTENT_TYPE.AUDIO,
                    en: {
                        author: "Tamas Panczel",
                        title: "J.S.Bach - Largo from C major solo sonata",
                        description: ""
                    },
                    hu: {
                        author: "Pánczél Tamás",
                        title: "J.S.Bach - Largo C dúr szóló szonátából",
                        description: ""
                    },
                    src: Bach_Largo,
                    cover: null
                },
                {
                    type: CONTENT_TYPE.AUDIO,
                    en: {
                        author: "Tamas Panczel",
                        title: "J.S.Bach - Fuge (extract) from g-minor",
                        description: ""
                    },
                    hu: {
                        author: "Pánczél Tamás",
                        title: "J.S.Bach - Fúga (részlet) g-moll szonátából",
                        description: ""
                    },
                    src: gmollfugareszlet,
                    cover: null
                }
            ]
        };
    }
};
</script>

<style lang="scss">
</style>