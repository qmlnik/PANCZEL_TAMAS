<template>
    <div style="position: fixed; height: 100vh; width: 100vw; z-index: -1;">
        <img src="~/assets/images/Hero_Background.webp" class="hero-background">
    </div>


    <Hero @navigation-body-img-finished="scrollToContent" />
    <div class="content-backdrop" ref="content">
        <div class="container">
            <NuxtPage />
        </div>
    </div>
    <Footer />
</template>

<script>
export default {
    methods: {
        scrollToContent() {
            this.$refs.content.scrollIntoView();
        }
    }
};
</script>

<style lang="scss">
.hero-background {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    object-fit: cover;
}

.content-backdrop {
    background: rgba(0, 0, 0, 0.4);
    position: relative;

    &:after {
        content: '';
        position: absolute;
        left: 0;
        right: 0;
        height: 30px;
        top: -30px;
        bottom: 0;
        background-image: linear-gradient(to top, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0));
    }
}
</style>