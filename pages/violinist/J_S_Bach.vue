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
            category: "violinist",
            subcategory: null,
            album: "J_S_Bach"
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