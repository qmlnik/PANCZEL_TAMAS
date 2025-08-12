<template>
    <MusicContentLayout
        :subcategoryMenu="subcategoryMenu"
        currentSubcategory="gospel"
    >
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