<template>
    <div class="error-container d-flex align-items-center justify-content-center">
        <div class="p-5 d-flex align-items-center flex-column text-center backdrop text-secondary">
            <h1 class="mb-4 fw-bold fs-1">{{ error.statusCode }}</h1>
            <h2 class="mb-4">{{ error.statusCode === 404 ? $t("error.404") : $t("error.general") }}</h2>
            <NuxtLinkLocale
                to="/violinist"
                class="btn btn-outline-secondary btn-lg"
                type="button"
            >
                {{ $t("error.back") }}
            </NuxtLinkLocale>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        error: {
            type: Object
        }
    },
};
</script>

<style>
.error-container {
    width: 100%;
    /* biztosan leérjen a háttérkép a képernyő aljáig (toolbar issue) */
    height: max(100vh, 100%);
    background: url(~/assets/images/404_background.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
}
</style>