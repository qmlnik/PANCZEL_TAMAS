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

export default {
    data() {
        return {
            content: [
                {
                    type: CONTENT_TYPE.AUDIO,
                    en: {
                        author: "Tamas Panczel",
                        title: "Bach Largo",
                        description: ""
                    },
                    hu: {
                        author: "Pánczél Tamás",
                        title: "Bach Largo",
                        description: ""
                    },
                    src: Bach_Largo,
                    cover: null
                }
            ]
        };
    }
};
</script>

<style lang="scss">
</style>