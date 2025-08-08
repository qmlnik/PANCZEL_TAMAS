<template>
    <div class="row">
        
        <NuxtLinkLocale
            v-for="{ img, page, title, description } in albums"
            :key="page"
            :to="page"
            class="album-container col-md-3"
        >
            <ScrollFadeIn>
                <div class="album-image-container rounded mb-2">
                    <img
                        :src="img?.length ? cover : coverPlaceholder"
                        class="w-100 ratio ratio-1x1"
                        style=""
                    />
                </div>
                <div class="fw-bold">{{ title[$i18n.locale] }}</div>
                <div>{{ description[$i18n.locale] }}</div>
            </ScrollFadeIn>
        </NuxtLinkLocale>
    </div>
</template>
<script>
import cover_placeholder from "~/assets/images/cover_placeholder.jpg";

export default {
    props: {
        albums: {
            type: Object,
            required: true
        }
    },
    data: () => ({ coverPlaceholder: cover_placeholder })
};
</script>

<style lang="scss">
.album-container {
    .album-image-container {
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
    }

    &:hover .album-image-container {
        img {
            transform: scale(1.05, 1.05);
        }

        &::after {
            opacity: 1;
        }
    }
}
</style>