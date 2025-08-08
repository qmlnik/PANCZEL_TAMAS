<template>
    <section class="p-sm-4 d-flex align-items-center flex-column">
        <div
            v-if="subcategoryMenu !== null"
            class="bg-light p-3 mb-4 fs-6 rounded"
        >
            <h3 class="mb-3 text-primary-light text-center">{{ $t("categories") }}</h3>
            <div class="d-flex justify-content-center flex-wrap" style="gap: 0.5rem;">
                <NuxtLinkLocale
                    v-for="subcategory in subcategoryMenu.subCategoryOrder"
                    :key="subcategory"
                    :to="subcategoryMenu.subCategoryContent[subcategory].page"
                    :class="[subcategory === currentSubCategory ? 'category-selected' : null]"
                    class="song-category p-3 rounded border border-dark"
                >
                    {{ subcategoryMenu.subCategoryContent[subcategory].title[$i18n.locale] }}
                </NuxtLinkLocale>
            </div>
        </div>
        <h3 class="text-center fs-2 text-primary-light mb-4 fw-bold">{{
            subcategoryMenu.subCategoryContent[currentSubCategory].title[$i18n.locale] }}
        </h3>
        <slot></slot>
    </section>
</template>

<script>
export default {
    props: {
        subcategoryMenu: {
            type: [Object, null],
            default: null
        },
        currentSubCategory: {
            type: [String, null],
            default: null
        }
    }
};
</script>

<style lang="scss">
@import "~/node_modules/bootstrap/scss/functions";
@import "~/node_modules/bootstrap/scss/variables";
@import "~/assets/bootstrap/variables";
@import "~/node_modules/bootstrap/scss/mixins/breakpoints";

.song-category {
    cursor: pointer;
    transition: .3s;
    background: $secondary;
    color: $dark;
    display: flex;
    align-items: center;

    &:hover {
        background: $primary-light;
    }

    &.category-selected {
        background: $primary;
    }

    @include media-breakpoint-down(sm) {
        width: 100%;
    }
}
</style>