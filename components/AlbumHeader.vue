<template>
    <div class="row text-secondary" style="row-gap: 1rem;">
        <div class="col-md-4">
            <img
                :src="audioPlayerStore.getAlbumByRoute(route).img"
                class="w-100 ratio ratio-1x1 rounded"
            />
        </div>
        <div class="col-md-8" >
            <div class="content-backdrop rounded p-3 h-100">
                <h4 class="mb-2">{{ audioPlayerStore.getAlbumByRoute(route).title[$i18n.locale] }}</h4>
                <div>{{ audioPlayerStore.getAlbumByRoute(route).description[$i18n.locale] }}</div>
            </div>
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