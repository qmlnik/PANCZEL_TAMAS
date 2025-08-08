<template>
    <MusicContentLayout
        :subcategoryMenu="subcategoryMenu"
        currentSubCategory="classic"
    >
        <Content
            ref="content"
            :contents="content"
        />
    </MusicContentLayout>
</template>

<script>
import { getSubcategoryMenu, getContent } from "~/pages/musicCategoryContent.js";

export default {
    data() {
        return {
            subcategoryMenu: getSubcategoryMenu("composer"),
            content: getContent("composer", "classic", "composer-classic-vocal")
        };
    }
};
</script>

<style lang="scss">
</style>