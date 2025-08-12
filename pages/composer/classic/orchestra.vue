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
export default {
    setup: () => ({ audioPlayerStore: useAudioPlayerStore() }),
    data: vm => {
        const route = {
            category: "composer",
            subcategory: "classic",
            album: "orchestra"
        };

        return {
            route,
            contents: vm.audioPlayerStore.getAlbumByRoute(
                route.category,
                route.subcategory,
                route.album
            ).content
        };
    }
};
</script>

<style lang="scss">
</style>