<template>
    <MusicContentLayout :route="route">
        <div class="w-100 mb-4">
            <AlbumHeader :route="route" />
        </div>
        <Content
            ref="content"
            :contents="contents"
        />
    </MusicContentLayout>
</template>

<script>
import { useAudioPlayerStore } from "~/stores/audioPlayer.js";

export default {
    setup: () => ({ audioPlayerStore: useAudioPlayerStore() }),
    data: vm => {
        const route = {
            category: "composer",
            subcategory: "classic",
            album: "chamber"
        };

        return {
            route,
            contents: vm.audioPlayerStore.getAlbumByRoute(route).content
        };
    }
};
</script>

<style lang="scss">
</style>