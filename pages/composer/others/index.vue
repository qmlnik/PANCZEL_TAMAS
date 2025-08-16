<template>
    <MusicContentLayout :route="route">
        <Albums :route="route" />
    </MusicContentLayout>
</template>

<script setup>
definePageMeta({
    middleware: ["redirect-to-only-album"]
})
</script>

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