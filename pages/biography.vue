<template>
<section class="pb-4 p-sm-4 d-flex align-items-center flex-column">
    <h3 class="fs-2 text-primary-light mb-4 fw-bold w-100 text-center">{{ $t("hero.subtitle.biography") }}</h3>
    <div class="text-secondary">
        <template v-if="$i18n.locale === 'hu'">
            <p>magyar nasdasdasd as dasdasd asd asd as d asd asd as d asd as d adsdsadsa
            asdasdasd</p>
            asd<br>
            as
        </template>
        <template v-else>
            angol
        </template>
    </div>
</section>
</template>

<script>
</script>

<style lang="scss">
</style>