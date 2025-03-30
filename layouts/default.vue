<template>
    <img
        v-show="isBackgroundImgLoaded"
        src="~/assets/images/Hero_Background.webp"
        class="background-img"
        ref="backgroundImg"
        @load="backgroundImgLoaded"
    >

    <Hero @navigation-body-img-finished="scrollToContent" />
    <div class="content-backdrop" ref="content">
        <div class="container-md">
            <NuxtPage />
        </div>
    </div>
    <Footer />
</template>

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
            this.$refs.content.scrollIntoView();
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