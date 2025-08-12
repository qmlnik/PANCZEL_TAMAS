<template>
    <MusicContentLayout
        :subcategoryMenu="subcategoryMenu"
        currentSubcategory="classic"
    >
        <div class="w-100 mb-4">
            <AlbumHeader
                :img="albumContent.img"
                :title="albumContent.title"
                :description="albumContent.description"
            />
        </div>
    </MusicContentLayout>
</template>

<script>
import { getSubcategoryMenu, getAlbumContent } from "~/pages/musicCategoryContent.js";

export default {
    data() {
        return {
            subcategoryMenu: getSubcategoryMenu("composer"),
            albumContent: getAlbumContent("composer", "classic", "composer-classic-vocal")
        };
    }
};
</script>

<style lang="scss">
</style>