<template>
    <div class="hero-container position-relative">
        <div
            class="hero-body-img-container"
            :class="[currentPageBodyImg?.isAlignLeft ? 'hero-body-img-align-left' : null]"
        >
            <img
                :key="imgUpdateKey"
                :src="currentPageBodyImg?.src"
                class="hero-body-img"
                ref="pageBodyImg"
                height="1177"
                width="640"
                alt="portrait"
            >
        </div>
        <div class="hero-content">
            <ScrollFadeIn :isBlockFadeInAfterLoad="true">
                <div class="hero-title-container">
                    <h1 class="hero-title text-primary text-uppercase fw-normal">
                        {{ $t('hero.title') }}
                    </h1>
                    <div class="d-flex d-sm-block justify-content-center flex-wrap" style="row-gap: 0.5rem;">
                        <div
                            to="composer-classic"
                            class="menu-element d-inline-block p-2 backdrop border border-secondary me-2 rounded"
                            style="cursor: pointer;"
                            :class="[getRouteBasePageName($route) === 'composer' ? 'menu-active' : null]"
                            @click="navigateTo(localePath('composer-classic'))"
                        >
                            {{ $t('hero.subtitle.composer') }}
                        </div>
                        <div
                            to="violinist"
                            class="menu-element d-inline-block p-2 backdrop border border-secondary me-2 rounded"
                            style="cursor: pointer;"
                            :class="[getRouteBasePageName($route) === 'violinist' ? 'menu-active' : null]"
                            @click="navigateTo(localePath('violinist'))"
                        >
                            {{ $t('hero.subtitle.violinist') }}
                        </div>
                        <div
                            to="conductor"
                            class="menu-element d-inline-block p-2 backdrop border border-secondary me-2 rounded"
                            style="cursor: pointer;"
                            :class="[getRouteBasePageName($route) === 'conductor' ? 'menu-active' : null]"
                            @click="navigateTo(localePath('conductor'))"
                        >
                            {{ $t('hero.subtitle.conductor') }}
                        </div>
                    </div>
                </div>
            </ScrollFadeIn>
            
            <ScrollFadeIn
                :transitionDelay="0.5"
                :isBlockFadeInAfterLoad="true"
                :style="{
                    display: 'flex',
                    'flex-direction': 'column',
                    'min-height': 0
                }"
            >
                <div class="hero-introduction text-secondary backdrop">
                    <h2 class="hero-introduction-title text-uppercase fw-bold">{{ $t('hero.introduction.title') }}</h2>
                    <div>{{ $t('hero.introduction.subtitle') }}</div>
                    <div class="bg-primary mt-4 mb-4" style="width: 50px; height: 3px;"></div>
                    <div class="hero-introduction-content">
                        {{ $t('hero.introduction.content') }}
                     </div>
                </div>
            </ScrollFadeIn>
        </div>
        <div class="language-selector-container">
            <LanguageSelector />
        </div>
        <div class="scroll-indicator-container">
            <ScrollIndicator />
        </div>
    </div>
    <div class="introduction-separate py-4">
        <div class="container">
            <ScrollFadeIn
                :transitionDelay="0.5"
                :isBlockFadeInAfterLoad="true"
            >
                <div class="hero-introduction text-secondary backdrop">
                    <h2 class="hero-introduction-title text-uppercase fw-bold">{{ $t('hero.introduction.title') }}</h2>
                    <div>{{ $t('hero.introduction.subtitle') }}</div>
                    <div class="bg-primary mt-4 mb-4" style="width: 50px; height: 3px;"></div>
                    <ShowMore :content="$t('hero.introduction.content')" />
                </div>
            </ScrollFadeIn>
        </div>
    </div>
</template>

<script>
import gsap from "gsap";
import { useMainStore } from "~/stores";

import heroBodyConductorImg from "~/assets/images/hero_body_conductor.png";
import heroBodyViolinistImg from "~/assets/images/hero_body_violinist.png";
import heroBodyComposer from "~/assets/images/hero_body_composer.png";

const ALL_PAGE_BODY_IMG = {
    composer: {
        src: heroBodyComposer,
        isAlignLeft: true
    },
    conductor: {
        src: heroBodyConductorImg,
        isAlignLeft: false
    },
    violinist: {
        src: heroBodyViolinistImg,
        isAlignLeft: false
    }
};
const PAGE_BODY_TRANSITION_MS = 500;

export default {
    emits: ["navigationBodyImgFinished"],
    setup (props, { emit }) {
        const currentPageBodyImg = ref(null);

        const pageBodyImg = useTemplateRef("pageBodyImg");

        const imgUpdateKey = ref(0);

        onMounted(async () => {
            await new Promise(resolve => {
                setTimeout(() => {
                    resolve();
                }, 10);
            });

            const route = useRoute();

            currentPageBodyImg.value = ALL_PAGE_BODY_IMG[getRouteBasePageName(route)];

            let isPageBodyImgInitLoaded = false;

            const pageBodyImgInitLoaded = () => {
                if (!isPageBodyImgInitLoaded) {
                    gsap.to(
                        pageBodyImg.value,
                        {
                            opacity: 1,
                            bottom: 0,
                            duration: PAGE_BODY_TRANSITION_MS / 1000,
                            ease: "power4.out"
                        }
                    );

                    isPageBodyImgInitLoaded = true;
                }
            };

            if (pageBodyImg.value?.complete) {
                pageBodyImgInitLoaded();
            } else {
                pageBodyImg.value?.addEventListener("load", pageBodyImgInitLoaded);
            }
        });

        const router = useRouter();

        router.afterEach(async (to, from) => {
            const toPageName = getRouteBasePageName(to);
            const fromPageName = getRouteBasePageName(from);

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
            imgUpdateKey.value++;

            await nextTick();

            if (!pageBodyImg.value?.complete) {
                let callback = null;

                await new Promise(resolve => {
                    callback = resolve;
                    pageBodyImg.value.addEventListener("load", resolve);
                });

                pageBodyImg.value.removeEventListener("load", callback);
            }

            await new Promise(resolve => {
                gsap.to(
                    pageBodyImg.value,
                    {
                        opacity: 1,
                        bottom: 0,
                        delay: 0.2, 
                        duration: PAGE_BODY_TRANSITION_MS / 1000,
                        ease: "power4.out",
                        onComplete: resolve
                    }
                );
            });

            emit("navigationBodyImgFinished");
        })

        return { imgUpdateKey, currentPageBodyImg, store: useMainStore(), localePath: useLocalePath() };
    },
    mounted() {
        setTimeout(() => {
            this.store.isHeroLoaded = true; 
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
    width: 100%;
    height: 90vh;

    @media screen and (orientation: landscape) and (max-height: 576px) {
        min-height: 500px;
    }

    &:after {
        content: '';
        position: absolute;
        left: 0;
        right: 0;
        height: 30px;
        bottom: 0;
        background-image: linear-gradient(to top, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0));
    }

    .hero-body-img-container {
        left: 17.5%;
        height: 95%;
        position: absolute;
        bottom: 0;
        display: flex;
        justify-content: center;
        width: 0;

        @include media-breakpoint-down(xl) {
            height: 90%;
            left: 15%;
        }

        @include media-breakpoint-down(lg) {
            height: 95%;
            left: 50%;
        }

        &.hero-body-img-align-left {
            left: 0;
            justify-content: start;

            @include media-breakpoint-down(xl) {
                left: -7%;
            }

            @include media-breakpoint-down(lg) {
                left: 0;
            }
        }

        .hero-body-img {
            max-width: 100vw;
            object-fit: cover;
            opacity: 0;
            bottom: 30px;
            position: relative;
            height: 100%;
            width: auto;
            -webkit-mask-image: linear-gradient(rgb(0 0 0 / 100%), rgb(0 0 0 / 100%) calc(100% - 30px), transparent);
            mask-image: linear-gradient(rgb(0 0 0 / 100%), rgb(0 0 0 / 100%) calc(100% - 30px), transparent);
        }
    }

    .hero-content {
        position: absolute;
        left: 35%;
        width: 60%;
        height: 80%;
        top: 10%;
        display: flex;
        flex-direction: column;

        @include media-breakpoint-down(xl) {
            top: 7%;
            left: 30%;
            width: 65%;
        }

        @include media-breakpoint-down(lg) {
            width: 100%;
            left: 0;
            display: flex;
            align-items: center;
            top: auto;
            bottom: 18%;
            height: auto;
        }

        @include media-breakpoint-down(sm) {
            width: 94%;
            left: 3%;
        }

        .hero-title-container {
            @include media-breakpoint-down(lg) {
                background: $backdrop;
                padding: 1.5rem;
                border-radius: 0.5rem;
                text-align: center;
                display: inline-block;
            }

            @include media-breakpoint-down(sm) {
                padding: 4vw;
            }

            .hero-title {
                letter-spacing: 0.2rem;
                font-size: 4rem;
                font-family: heroHeader;

                @include media-breakpoint-down(xl) {
                    font-size: 3.5rem;
                }

                @include media-breakpoint-down(sm) {
                    font-size: 9vw;
                    letter-spacing: 0.5vw;
                }
            }

            .menu-element {
                transition: .3s;
                font-size: 1.2rem;
                color: $secondary;

                @include media-breakpoint-down(xl) {
                    font-size: 1rem;
                }

                @include media-breakpoint-down(sm) {
                    font-size: 3.5vw;
                }

                &:hover, &.menu-active {
                    background: $primary-light;
                    color: $dark;
                }
            }
        }
    }

    .language-selector-container {
        position: absolute;
        right: 5%;
        top: 5%;
    }

    .scroll-indicator-container {
        position: absolute;
        bottom: 5%;
        left: 50%;
        transform: translate(-50%, 0);
        width: 20px;
        height: 20px;
    }
}

.hero-introduction {
    border-radius: 0.5rem;
    padding: 1.75rem;
    margin-top: 3rem;
    min-height: 0;
    display: flex;
    flex-direction: column;
    max-width: 900px;

    @include media-breakpoint-down(xl) {
        margin-top: 2rem;
    }

    @include media-breakpoint-down(lg) {
        display: none;
    }

    .hero-introduction-content {
        overflow: auto;
        padding-right: 6px;
    }
}

.introduction-separate {
    background: $content-backdrop;
    display: none;

    @include media-breakpoint-down(lg) {
        display: block;
    }

    .hero-introduction {
        margin: 0;

        @include media-breakpoint-down(lg) {
            display: block !important;
        }

        :deep(.simplebar-scrollbar::before) {
            background: $secondary;
        }

        :deep(.simplebar-track.simplebar-vertical) {
            right: -8px;
        }
    }
}
</style>