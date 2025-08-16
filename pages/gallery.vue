<template>
<section class="pb-4 p-sm-4 d-flex align-items-center flex-column">
    <h3 class="fs-2 text-primary-light mb-4 fw-bold w-100 text-center">{{ $t("hero.subtitle.gallery") }}</h3>
    <Lightgallery
        :settings="{ speed: 500, plugins: plugins }"
        class="row w-100" style="row-gap: 2rem;"
    >
        <div
            v-for="{ title, src } in images"
            :key="title"
            :href="src"
            class="col-lg-4 col-md-6 "
            style="cursor: pointer;"
        >
            <div class="ratio ratio-1x1 img-container rounded mb-1">
                <img
                    :src="src"
                    :alt="title"
                    class="w-100 h-100"
                    style="object-fit: cover;"
                />
            </div>
            <div class="fw-bold content-backdrop p-2 rounded text-secondary">{{ title }}</div>
        </div>
    </Lightgallery>
</section>
</template>

<script>
import Lightgallery from "lightgallery/vue";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

export default {
    components: {
        Lightgallery,
    },
    data: () => ({
        plugins: [lgThumbnail, lgZoom],
        images: [
            {
                src: "/images/album_cover/kamara_muvek.webp",
                title: ""
            },
            {
                src: "/images/album_cover/szerzo_kozremukodik.webp",
                title: ""
            },
                        {
                src: "/images/album_cover/vokalis_muvek.webp",
                title: ""
            },
                        {
                src: "/images/album_cover/zenekari_muvek.webp",
                title: ""
            },
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