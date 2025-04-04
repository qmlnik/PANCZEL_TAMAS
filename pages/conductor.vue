<template>
    <h3 class="text-center fs-2 text-primary-light py-4 mb-0 fw-bold">{{ $t('hero.subtitle.conductor') }}</h3>
    <Content
        ref="content"
        :contents="content"
    />
</template>

<script setup>
const { t } = useI18n();

useHead({
    title: `${t("meta.title")} | ${t("meta.pageTitle.conductor")}`,
});
</script>

<script>
export default {
    data() {
        return {
            content: []
        };
    }
};
</script>

<style lang="scss">
</style>