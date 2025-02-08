<template>
    <div class="position-relative" style="width: 100%; height: 90vh;">
        <img src="~/assets/images/Hero_Background.webp" class="hero-background">
        <img src="~/assets/images/Hero_Tamas.png" class="hero-full-body-portrait">
        <div class="language-selector-container">
            <LanguageSelector />
        </div>
        
        <!--<picture>
            <source
                media="(max-width: 576px)"
                srcset="~/assets/images/Tamas_mobile.jpg"
            >
            <source srcset="~/assets/images/header_background.avif">
            <img style="object-fit: cover; height: 100%; width: 100%;" src="~/assets/images/header_background.avif" />
        </picture>-->
        <div class="hero-content">
            <ScrollFadeIn :isBlockFadeInAfterLoad="true">
                <div class="hero-title-container">
                    <h1 class="hero-title text-primary text-uppercase mb-0 fw-normal">
                        {{ $t('hero.title') }}
                    </h1>
                    <div class="text-secondary fst-italic fs-5">
                        {{ $t('hero.subtitle') }}
                    </div>
                </div>
            </ScrollFadeIn>
            
            <div class="hero-card d-none d-sm-block">
                <ScrollFadeIn :transitionDelay="0.5" :isBlockFadeInAfterLoad="true">
                    <div
                        class="text-secondary backdrop"
                        style="
                            border-radius: 0.5rem;
                            padding: 1.5rem;
                            margin-top: 75px;
                            max-width: 600px;
                        "
                    >
                        <h3 class="text-uppercase fw-bold">{{ $t('hero.introduction.title') }}</h3>
                        <div>{{ $t('hero.introduction.subtitle') }}</div>
                        <div class="bg-primary mt-4 mb-4" style="width: 50px; height: 3px;"></div>
                        <div class="fst-italic mb-3">
                            {{ $t('hero.introduction.content') }}
                        </div>
                        <button class="btn btn-primary text-dark">{{ $t('showMore') }}</button>
                    </div>
                </ScrollFadeIn>
            </div>
        </div>
        <div
            class="position-absolute"
            style="bottom: 3%; left: 50%; transform: translate(-50%, 0);"
        >
            <ScrollIndicator />
        </div>
    </div>
    <div class="d-block d-sm-none p-4">
        <ScrollFadeIn>
            <div
                class="text-secondary backdrop"
                style="border-radius: 0.5rem; padding: 1.5rem;"
            >
                <h3 class="text-uppercase fw-bold">{{ $t('hero.introduction.title') }}</h3>
                <div>{{ $t('hero.introduction.subtitle') }}</div>
                <div class="bg-primary mt-4 mb-4" style="width: 50px; height: 3px;"></div>
                <div class="fst-italic mb-3">
                    {{ $t('hero.introduction.content') }}
                </div>
                <button class="btn btn-primary text-dark">{{ $t('showMore') }}</button>
            </div>
        </ScrollFadeIn>
    </div>
</template>

<script>
import { useMainStore } from "~/stores";

export default {
    setup () {
        return { $store: useMainStore() };
    },
    mounted() {
        setTimeout(() => {
            this.$store.isHeroLoaded = true; 
        }, 500);   
    }
};
</script>

<style lang="scss" scoped>
@import "~/node_modules/bootstrap/scss/functions";
@import "~/node_modules/bootstrap/scss/variables";
@import "~/assets/bootstrap/variables";
@import "~/node_modules/bootstrap/scss/mixins/breakpoints";

.language-selector-container {
    position: absolute;
    right: 20%;
    top: 50px;

    @include media-breakpoint-down(sm) {
        right: 5%;
        top: 20px;
    }
}

.hero-background {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    object-fit: cover;
}

.hero-full-body-portrait {
    position: absolute;
    bottom: 0;
    left: 3%;
    object-fit: contain;
    height: 95%;
    width: 33%;

    @include media-breakpoint-down(sm) {
        height: 100%;
        width: auto;
        left: 50%;
        transform: translate(-50%, 0);
    }
}

.hero-title-container {
    background: none;
    padding: 0;

    @include media-breakpoint-down(sm) {
        background: $backdrop;
        padding: 1.5rem;
        border-radius: 0.5rem;
        text-align: center;
    }
}

.hero-content {
    position: absolute;
    left: 35%;
    top: 150px;

    @include media-breakpoint-down(sm) {
        top: 70%;
        width: 90%;
        left: 5%;
    }

    .hero-title {
        letter-spacing: 0.2rem;
        font-size: 4rem;

        @include media-breakpoint-down(sm) {
            font-size: 8vw;
        }
    }
}
</style>