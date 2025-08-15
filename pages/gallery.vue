<template>
<section class="pb-4 p-sm-4 d-flex align-items-center flex-column">
    <h3 class="fs-2 text-primary-light mb-4 fw-bold w-100 text-center">{{ $t("hero.subtitle.gallery") }}</h3>
    <Lightgallery
        :settings="{ speed: 500, plugins: plugins }"
        class="row w-100" style="row-gap: 2rem;"
    >
        <a
            v-for="{ title, src } in images"
            :key="title"
            :href="src"
            class="img-container col-lg-3 col-md-4 col-sm-6"
        >
            <img
                :src="src"
                :alt="title"
                class="w-100 ratio ratio-1x1"
            />
        </a>
    </Lightgallery>
</section>
</template>

<script>
import Lightgallery from "lightgallery/vue";
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';

import hero_body_composer from "~/assets/images/hero_body_composer.png";
import hero_body_violinist from "~/assets/images/hero_body_violinist.png";

export default {
    components: {
        Lightgallery,
    },
    data: () => ({
        plugins: [lgThumbnail, lgZoom],
        images: [
            {
                src: hero_body_composer,
                title: "hero_body_composer"
            },
            {
                src: hero_body_violinist,
                title: "hero_body_violinist"
            }
        ]        
    }),
};
</script>

<style lang="scss">
@import 'lightgallery/css/lightgallery.css';
@import 'lightgallery/css/lg-thumbnail.css';
@import 'lightgallery/css/lg-zoom.css';

.img-container {
    position: relative;
    overflow: hidden;

    img {
        transition: .2s;
    }

    &::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        opacity: 0;
        background: rgba(255, 255, 255, 0.3);
        transition: .2s;
    }

    &:hover {
        img {
            transform: scale(1.05, 1.05);
        }

        &::after {
            opacity: 1;
        }
    }
}    
</style>