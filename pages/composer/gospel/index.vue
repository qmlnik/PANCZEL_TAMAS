<template>
    <MusicContentLayout :route="route">
        <Albums :route="route" />
    </MusicContentLayout>
</template>

<script>
import { useAudioPlayerStore } from "~/stores/audioPlayer.js";

export default {
    setup: () => ({ audioPlayerStore: useAudioPlayerStore() }),
    data: () => ({
        route: {
            category: "composer",
            subcategory: "gospel",
            album: null
        }
    })
};
</script>

<style lang="scss">
</style>