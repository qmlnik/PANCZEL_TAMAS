<template>
    <div class="position-relative" style="width: 100%; height: 90vh;">
        <img src="~/assets/images/Hero_Background.webp" class="hero-background">
        <img src="~/assets/images/Hero_Tamas.png" class="hero-full-body-portrait">
        <!--<picture>
            <source
                media="(max-width: 576px)"
                srcset="~/assets/images/Tamas_mobile.jpg"
            >
            <source srcset="~/assets/images/header_background.avif">
            <img style="object-fit: cover; height: 100%; width: 100%;" src="~/assets/images/header_background.avif" />
        </picture>-->
        <div class="hero-content">
            <ScrollFadeIn>
                <div class="hero-title-container">
                    <h1 class="hero-title text-primary text-uppercase mb-0 fw-normal">
                        tamas panczel
                    </h1>
                    <div class="text-secondary fst-italic fs-5">
                        Violinist. Composer. Conductor
                    </div>
                </div>
            </ScrollFadeIn>
            
            <div class="hero-card d-none d-sm-block">
                <ScrollFadeIn :transitionDelay="0.5">
                    <div
                        class="text-secondary"
                        style="
                            background: rgba(0, 0, 0, 0.6);
                            border-radius: 0.5rem;
                            padding: 1.5rem;
                            margin-top: 75px;
                            max-width: 600px;
                        "
                    >
                        <h3 class="text-uppercase fw-bold">introduction</h3>
                        <div>Passion drives every note</div>
                        <div class="bg-primary mt-4 mb-4" style="width: 50px; height: 3px;"></div>
                        <div class="fst-italic mb-3">
                            At the heart of this extraordinary artist's musical journey lies a profound and unwavering motivation, one that has been the driving force behind every note played, composed, and conducted. The motivation is not merely personal accomplishment or recognition, but the genuine desire to touch the lives of others through the universal language of music, forging emotional connections that transcend boundaries and time itself.
                        </div>
                        <button class="btn btn-primary text-dark">Show more</button>
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
                class="text-secondary"
                style="background: rgba(0, 0, 0, 0.6); border-radius: 0.5rem; padding: 1.5rem;"
            >
                <h3 class="text-uppercase fw-bold">introduction</h3>
                <div>Passion drives every note</div>
                <div class="bg-primary mt-4 mb-4" style="width: 50px; height: 3px;"></div>
                <div class="fst-italic mb-3">
                    At the heart of this extraordinary artist's musical journey lies a profound and unwavering motivation, one that has been the driving force behind every note played, composed, and conducted. The motivation is not merely personal accomplishment or recognition, but the genuine desire to touch the lives of others through the universal language of music, forging emotional connections that transcend boundaries and time itself.
                </div>
                <button class="btn btn-primary text-dark">Show more</button>
            </div>
        </ScrollFadeIn>
    </div>
</template>

<style lang="scss" scoped>
@import "~/node_modules/bootstrap/scss/functions";
@import "~/node_modules/bootstrap/scss/variables";
@import "~/node_modules/bootstrap/scss/mixins/breakpoints";

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
        background: rgba(0, 0, 0, 0.6);
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