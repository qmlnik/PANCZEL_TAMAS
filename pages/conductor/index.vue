<template>
    <MusicContentLayout :route="route">
        <Albums :route="route" />
    </MusicContentLayout>
</template>

<script setup>
const { t } = useI18n();

useHead({
    title: `${t("meta.title")} | ${t("meta.pageTitle.conductor")}`,
});
</script>

<script>
export default {
    data: () => ({
        route: {
            category: "conductor",
            subcategory: null,
            album: null
        }
    })
};
</script>

<style lang="scss">
</style>