<template>
    <div class="d-flex flex-column h-100">
        <div class="content-container" style="overflow-y: auto;">
            <picture>
                <source media="(min-width:1536px)" srcset="~/assets/images/Hero_background_desktop.webp" />
                <source media="(min-width:1366px)" srcset="~/assets/images/Hero_background_laptop_1.webp" />
                <source media="(min-width:576px)" srcset="~/assets/images/Hero_background_laptop_2.webp" />
                <img
                    src="~/assets/images/Hero_background_mobile.webp"
                    alt="background"
                    class="background-img"
                    ref="backgroundImg"
                    @load="backgroundImgLoaded"
                />
            </picture>
            <Hero @navigation-body-img-finished="scrollToContent" />
            <div class="content-backdrop w-100 d-inline-block" ref="content">
                <div class="container-md">
                    <NuxtPage />
                </div>
            </div>
            <Footer />
        </div>
        <div class="flex-shrink-0">
            <AudioPlayerFinal />
        </div>
    </div>
</template>

<script setup>
const { t } = useI18n();
const i18nHead = useLocaleHead({
    addDirAttribute: true,
    addSeoAttributes: true
});

useHead({
    htmlAttrs: {
        lang: () => i18nHead.value.htmlAttrs.lang,
        dir: () => i18nHead.value.htmlAttrs.dir
    },
    link: [...(i18nHead.value.link || [])],
    meta: [
        { name: "description", content: () => t("meta.content") },
        { name: "robots", content: "noindex, nofollow" },
        ...(i18nHead.value.meta || [])
    ]
});
</script>

<script>
export default {
    data() {
        return { isBackgroundImgLoaded: false };
    },
    mounted() {
        if (this.$refs.backgroundImg.complete) {
            this.backgroundImgLoaded();
        }
    },
    methods: {
        scrollToContent() {
            setTimeout(() => this.$refs.content.scrollIntoView({ behavior: "smooth" }), 1000);
        },
        backgroundImgLoaded() {
            this.isBackgroundImgLoaded = true;
        }
    }
};
</script>

<style lang="scss">
@import "~/assets/bootstrap/variables";

body {
    .background-img {
        position: fixed;
        height: 100vh;
        width: 100vw;
        z-index: -1;
        top: 0;
        left: 0;
        object-fit: cover;
    }

    .content-backdrop {
        background: $content-backdrop;
    }
}
</style>