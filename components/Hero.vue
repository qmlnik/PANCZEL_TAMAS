<template>
    <div class="hero-container position-relative">
        <div class="hero-body-img-container">
            <img
                :src="currentPageBodyImg"
                class="hero-body-img"
                ref="pageBodyImg"
            >
        </div>
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
                    <div class="d-flex d-sm-block justify-content-center flex-wrap" style="row-gap: 0.5rem;">
                        <NuxtLinkLocale
                            to="/violinist"
                            class="menu-element d-inline-block p-2 backdrop border border-secondary me-2 rounded"
                            activeClass="menu-active"
                        >
                            {{ $t('hero.subtitle.violinist') }}
                        </NuxtLinkLocale>
                        <NuxtLinkLocale
                            to="/composer"
                            class="menu-element d-inline-block p-2 backdrop border border-secondary me-2 rounded"
                            activeClass="menu-active"
                        >
                            {{ $t('hero.subtitle.composer') }}
                        </NuxtLinkLocale>
                        <NuxtLinkLocale
                            to="/conductor"
                            class="menu-element d-inline-block p-2 backdrop border border-secondary me-2 rounded"
                            activeClass="menu-active"
                        >
                            {{ $t('hero.subtitle.conductor') }}
                        </NuxtLinkLocale>
                    </div>
                </div>
            </ScrollFadeIn>
            
            <ScrollFadeIn :transitionDelay="0.5" :isBlockFadeInAfterLoad="true">
                <div class="hero-introduction text-secondary backdrop">
                    <h3 class="hero-introduction-title text-uppercase fw-bold">{{ $t('hero.introduction.title') }}</h3>
                    <div>{{ $t('hero.introduction.subtitle') }}</div>
                    <div class="bg-primary mt-4 mb-4" style="width: 50px; height: 3px;"></div>
                    <div class="fst-italic mb-3">
                        {{ $t('hero.introduction.content') }}
                    </div>
                </div>
            </ScrollFadeIn>
        </div>
        <div class="scroll-indicator-container">
            <ScrollIndicator />
        </div>
    </div>
    <div class="introduction-separate py-4">
        <div class="container">
            <ScrollFadeIn :transitionDelay="0.5" :isBlockFadeInAfterLoad="true">
                <div class="hero-introduction text-secondary backdrop">
                    <h3 class="hero-introduction-title text-uppercase fw-bold">{{ $t('hero.introduction.title') }}</h3>
                    <div>{{ $t('hero.introduction.subtitle') }}</div>
                    <div class="bg-primary mt-4 mb-4" style="width: 50px; height: 3px;"></div>
                    <div class="fst-italic mb-3">
                        {{ $t('hero.introduction.content') }}
                    </div>
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

        onMounted(() => {
            if (pageBodyImg.value.complete) {
                pageBodyImgInitLoaded();
            } else {
                pageBodyImg.value.addEventListener("load", pageBodyImgInitLoaded);
            }
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

            let callback = null;

            await new Promise(resolve => {
                callback = resolve;
                pageBodyImg.value.addEventListener("load", resolve);
            });

            pageBodyImg.value.removeEventListener("load", callback);

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
    width: 100%;
    height: 90vh;
    min-height: 720px;

    @media (max-aspect-ratio: 12/9) {
        min-height: auto;
    }

    @media (max-aspect-ratio: 9/9) {
        height: 95vh;
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
        left: 5%;
        width: 25%;
        height: 95%;
        position: absolute;
        bottom: 0;
        display: flex;
        justify-content: center;

        @media (max-aspect-ratio: 12/9) {
            height: 90%;
            left: 8%;
        }

        @media (max-aspect-ratio: 9/9) {
            left: 50%;
            transform: translate(-50%, 0);
            height: 98%;
        }

        .hero-body-img {
            opacity: 0;
            bottom: 30px;
            position: relative;
            height: 100%;
            width: auto;
            -webkit-mask-image: linear-gradient(rgb(0 0 0 / 100%), rgb(0 0 0 / 100%) calc(100% - 30px), transparent);
            mask-image: linear-gradient(rgb(0 0 0 / 100%), rgb(0 0 0 / 100%) calc(100% - 30px), transparent);
        }
    }

    .language-selector-container {
        position: absolute;
        right: 15%;
        top: 5%;

        @media (max-aspect-ratio: 12/9) {
            right: 5%;
        }
    }

    .hero-content {
        position: absolute;
        left: 35%;
        width: 50%;
        top: 15%;

        @media (max-aspect-ratio: 12/9) {
            left: 41%;
            width: 54%;
        }

        @media (max-aspect-ratio: 9/9) {
            width: 80%;
            left: 10%;
            top: 25%;
            display: flex;
            align-items: center;
            flex-direction: column;
        }

        @media (max-aspect-ratio: 7/9) {
            top: auto;
            bottom: 18%;
            width: 94%;
            left: 3%;
        }

        .hero-title-container {
            @media (max-aspect-ratio: 9/9) {
                background: $backdrop;
                padding: 1.5rem;
                border-radius: 0.5rem;
                text-align: center;
                display: inline-block;
            }

            @media (max-aspect-ratio: 6/9) {
                padding: 4vw;
            }

            .hero-title {
                letter-spacing: 0.2rem;
                font-size: 4rem;

                @media (max-aspect-ratio: 12/9) {
                    font-size: 6vw;
                }

                @media (max-aspect-ratio: 9/9) {
                    font-size: 7vw;
                }

                @media (max-aspect-ratio: 7/9) {
                    font-size: 7.75vw;
                }

                @media (max-aspect-ratio: 6/9) {
                    font-size: 9.5vw;
                }
            }

            .menu-element {
                transition: .3s;

                @media (max-aspect-ratio: 12/9) {
                    font-size: 1.75vw;
                }

                @media (max-aspect-ratio: 9/9) {
                    font-size: 2vw;
                }

                @media (max-aspect-ratio: 7/9) {
                    font-size: 3vw;
                }

                @media (max-aspect-ratio: 6/9) {
                    font-size: 3.5vw;
                }

                &:hover, &.menu-active {
                    background: $primary-light;
                    color: $dark;
                }
            }
        }
    }

    .scroll-indicator-container {
        position: absolute;
        bottom: 5%;
        left: 50%;
        transform: translate(-50%, 0);
        width: 1.25vw;
        height: 1.25vw;

        @media (max-aspect-ratio: 12/9) {
            width: 2vw;
            height: 2vw;
        }

        @media (max-aspect-ratio: 9/9) {
            bottom: 8%;
            width: 3vw;
            height: 3vw;
        }

        @media (max-aspect-ratio: 7/9) {
            width: 4vw;
            height: 4vw;
        }
    }
}

.hero-introduction {
    border-radius: 0.5rem;
    padding: 1.75rem;
    margin-top: 7%;
    max-width: 600px;

    @media (max-aspect-ratio: 12/9) {
        font-size: 1.5vw;
        max-width: none;
    }

    @media (max-aspect-ratio: 9/9) {
        margin-top: 5%;
        font-size: 2vw;
    }

    @media (max-aspect-ratio: 7/9) {
        display: none;
        font-size: 1rem;
    }

    .hero-introduction-title {
        @media (max-aspect-ratio: 12/9) {
            font-size: 3vw;
        }

        @media (max-aspect-ratio: 9/9) {
            font-size: 3.5vw;
        }

        @media (max-aspect-ratio: 7/9) {
            font-size: 1.5rem;
        }
    }
}

.introduction-separate {
    background: $content-backdrop;
    display: none;

    @media (max-aspect-ratio: 7/9) {
        display: block;
    }

    .hero-introduction {
        margin: 0;

        @media (max-aspect-ratio: 7/9) {
            display: block !important;
        }
    }
}
</style>