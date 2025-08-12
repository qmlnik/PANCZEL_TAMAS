<template>
    <MusicContentLayout
        :subcategoryMenu="subcategoryMenu"
        currentSubcategory="others"
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
            albums: getAlbums("composer", "others")
        };
    }
};
</script>

<style lang="scss">
</style>