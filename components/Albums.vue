<template>
    <div class="row">
        <NuxtLinkLocale
            v-for="currentAlbum in audioPlayerStore.categories[route.category].subcategoies[route.subcategory].albumContent.albumOrder"
            :key="currentAlbum"
            :to="getPage(currentAlbum)"
            class="album-container col-md-3"
            style="cursor: pointer;"
        >
            <ScrollFadeIn>
                <div class="album-image-container rounded mb-2">
                    <img
                        :src="audioPlayerStore.getAlbumByRoute(route.category, route.subcategory, currentAlbum).img"
                        class="w-100 ratio ratio-1x1"
                    />
                </div>
                <div class="fw-bold">{{
                    audioPlayerStore.getAlbumByRoute(route.category, route.subcategory, currentAlbum)
                        .title[$i18n.locale]
                }}</div>
                <div>{{
                    audioPlayerStore.getAlbumByRoute(route.category, route.subcategory, currentAlbum)
                        .description[$i18n.locale]
                }}</div>
            </ScrollFadeIn>
        </NuxtLinkLocale>
    </div>
</template>
<script>
import { useAudioPlayerStore } from "~/stores/audioPlayer.js";

export default {
    props: {
        route: {
            type: Object,
            required: true
        }
    },
    setup: () => ({ audioPlayerStore: useAudioPlayerStore() }),
    methods: {
        getPage(album) {
            const { category, subcategory } = this.route;

            let page = category;

            if (subcategory !== null) {
                page += `-${subcategory}`;
            }

            page += `-${album}`;

            return page;
        }
    }
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