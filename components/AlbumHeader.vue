<template>
    <div class="row text-secondary">
        <div class="col-md-4">
            <img
                :src="audioPlayerStore.getAlbumByRoute(route.category, route.subcategory, route.album).img"
                class="w-100 ratio ratio-1x1 rounded"
            />
        </div>
        <div class="col-md-8">
            <h4 class="mb-2">{{ audioPlayerStore.getAlbumByRoute(route.category, route.subcategory, route.album).title[$i18n.locale] }}</h4>
            <div>{{ audioPlayerStore.getAlbumByRoute(route.category, route.subcategory, route.album).description[$i18n.locale] }}</div>
        </div>
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
</style>