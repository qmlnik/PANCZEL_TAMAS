<template>
    <MusicContentLayout :route="route">
        <div class="w-100 mb-4">
            <AlbumHeader :route="route" />
        </div>
        <Content :route="route" />
    </MusicContentLayout>
</template>

<script>
export default {
    setup: () => ({ audioPlayerStore: useAudioPlayerStore() }),
    data: vm => {
        const route = {
            category: "composer",
            subcategory: "classic",
            album: "composerParticipate"
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