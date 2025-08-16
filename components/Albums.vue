<template>
    <div class="row w-100" style="row-gap: 2rem;">
        <NuxtLinkLocale
            v-for="currentAlbum in audioPlayerStore.getCategoryOrSubcategoryByRoute(route.category, route.subcategory).albumContent.albumOrder"
            :key="currentAlbum"
            :to="getPageByRoute({ ...route, album: currentAlbum })"
            class="album-container col-lg-3 col-md-4 col-sm-6"
            style="cursor: pointer;"
        >
            <ScrollFadeIn>
                <div class="album-image-container rounded mb-1">
                    <div class="ratio ratio-1x1">
                        <img
                            :src="audioPlayerStore.getAlbumByRoute({ ...route, album: currentAlbum }).img"
                            style="object-fit: cover;"
                        />
                    </div>
                </div>
                <div class="fw-bold content-backdrop p-2 rounded">{{
                    audioPlayerStore.getAlbumByRoute({ ...route, album: currentAlbum })
                        .title[$i18n.locale]
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