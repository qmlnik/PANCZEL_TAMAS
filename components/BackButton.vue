<template>
    <NuxtLinkLocale
        :to="to"
        class="back-button w-100 text-center py-3"
    >
        {{ $t("back") }}
    </NuxtLinkLocale>
</template>

<script>
export default {
    props: {
        to: {
            type: String,
            required: true
        }
    }
};
</script>

<style lang="scss">
.back-button {
    background: $dark
}
</style>