<template>
    <MusicContentLayout
        :subcategoryMenu="subcategoryMenu"
        currentSubCategory="others"
    >
        <div class="w-100 mb-4">
            <AlbumHeader
                :img="albumContent.img"
                :title="albumContent.title"
                :description="albumContent.description"
            />
        </div>
        <Content
            ref="content"
            :contents="albumContent.content"
        />
    </MusicContentLayout>
</template>

<script>
import { getSubcategoryMenu, getAlbumContent } from "~/pages/musicCategoryContent.js";

export default {
    data() {
        return {
            subcategoryMenu: getSubcategoryMenu("composer"),
            albumContent: getAlbumContent("composer", "others", "composer-others-Mozart")
        };
    }
};
</script>

<style lang="scss">
</style>