<template>
    <MusicContentLayout :route="route">
        <Albums :route="route" />
    </MusicContentLayout>
</template>

<script>
export default {
    data: () => ({
        route: {
            category: "composer",
            subcategory: "others",
            album: null
        }
    })
};
</script>

<style lang="scss">
</style>