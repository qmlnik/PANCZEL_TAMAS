<template>
    <MusicContentLayout
        :subcategoryMenu="subcategoryMenu"
        currentSubCategory="classic"
    >
        <Albums :albums="albums" />
    </MusicContentLayout>
</template>

<script>
import { getSubcategoryMenu, getAlbums } from "~/pages/musicCategoryContent.js";

export default {
    data() {
        return {
            subcategoryMenu: getSubcategoryMenu("composer"),
            albums: getAlbums("composer", "classic")
        };
    }
};
</script>

<style lang="scss">
</style>