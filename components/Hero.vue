<template>
    <div class="hero-container position-relative" style="width: 100%; height: 90vh;">
        <img :src="currentPageBodyImg" class="hero-body-img" ref="pageBodyImg">
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
                    <h1 class="hero-title text-primary text-uppercase fw-normal">
                        {{ $t('hero.title') }}
                    </h1>
                    <NuxtLinkLocale
                        to="/violinist"
                        class="menu-element p-2 backdrop border border-secondary me-2 rounded"
                        activeClass="menu-active"
                    >
                        {{ $t('hero.subtitle.violinist') }}
                    </NuxtLinkLocale>
                    <NuxtLinkLocale
                        to="/composer"
                        class="menu-element p-2 backdrop border border-secondary me-2 rounded"
                        activeClass="menu-active"
                    >
                        {{ $t('hero.subtitle.composer') }}
                    </NuxtLinkLocale>
                    <NuxtLinkLocale
                        to="/conductor"
                        class="menu-element p-2 backdrop border border-secondary me-2 rounded"
                        activeClass="menu-active"
                    >
                        {{ $t('hero.subtitle.conductor') }}
                    </NuxtLinkLocale>
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
import gsap from "gsap";
import { useMainStore } from "~/stores";

import heroBodyConductorImg from "~/assets/images/hero_body_conductor.png";
import heroBodyViolinistImg from "~/assets/images/hero_body_violinist.png";

const ALL_PAGE_BODY_IMG = {
    composer: heroBodyConductorImg,
    conductor: heroBodyConductorImg,
    violinist: heroBodyViolinistImg,
};
const PAGE_BODY_TRANSITION_MS = 500;

export default {
    emits: ["navigationBodyImgFinished"],
    setup (props, { emit }) {
        const route = useRoute();
        const getRouteBaseName = useRouteBaseName();

        const currentPageBodyImg = ref(ALL_PAGE_BODY_IMG[getRouteBaseName(route)]);
        const pageBodyImg = useTemplateRef("pageBodyImg");

        onMounted(() => {
            gsap.to(
                pageBodyImg.value,
                {
                    opacity: 1,
                    bottom: 0,
                    duration: PAGE_BODY_TRANSITION_MS / 1000,
                    ease: "power4.out"
                }
            );
        });

        const router = useRouter();

        router.afterEach(async (to, from) => {
            const toPageName = getRouteBaseName(to);
            const fromPageName = getRouteBaseName(from);

            const isLocaleRouteChange = toPageName === fromPageName;

            if (isLocaleRouteChange) {
                return;
            }

            await new Promise(resolve => {
                gsap.to(
                    pageBodyImg.value,
                    {
                        opacity: 0,
                        bottom: "30px",
                        duration: PAGE_BODY_TRANSITION_MS / 1000,
                        ease: "power4.out",
                        onComplete: resolve
                    }
                );
            });

            currentPageBodyImg.value = ALL_PAGE_BODY_IMG[toPageName];

            await new Promise(resolve => {
                gsap.to(
                    pageBodyImg.value,
                    {
                        opacity: 1,
                        bottom: 0,
                        delay: 0.1,
                        duration: PAGE_BODY_TRANSITION_MS / 1000,
                        ease: "power4.out",
                        onComplete: resolve
                    }
                );
            });

            emit("navigationBodyImgFinished");
        })

        return { currentPageBodyImg, $store: useMainStore() };
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

.hero-container {
    .menu-element {
        transition: .3s;

        &:hover, &.menu-active {
            background: $primary-light;
            color: $dark;
        }

        &.menu-active {

        }
    }

    .language-selector-container {
        position: absolute;
        right: 20%;
        top: 50px;

        @include media-breakpoint-down(sm) {
            right: 5%;
            top: 20px;
        }
    }

    .hero-body-img {
        opacity: 0;
        position: absolute;
        bottom: 100px;
        left: 3%;
        object-fit: contain;
        height: 95%;
        width: 33%;
        -webkit-mask-image: linear-gradient(rgb(0 0 0 / 100%), rgb(0 0 0 / 100%) calc(100% - 30px), transparent);
        mask-image: linear-gradient(rgb(0 0 0 / 100%), rgb(0 0 0 / 100%) calc(100% - 30px), transparent);

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
}
</style>