<template>
    <MusicContentLayout
        :subcategoryMenu="subcategoryMenu"
        currentSubCategory="gospel"
    >
        <Content
            ref="content"
            :contents="content"
        />
    </MusicContentLayout>
</template>

<script>
import { getSubcategoryMenu, getRegularContent } from "~/pages/musicCategoryContent.js";

export default {
    data() {
        return {
            subcategoryMenu: getSubcategoryMenu("composer"),
            content: getRegularContent("composer", "gospel")
        };
    }
};
</script>

<style lang="scss">
</style>