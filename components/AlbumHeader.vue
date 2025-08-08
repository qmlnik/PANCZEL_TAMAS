<template>
    <div class="row text-secondary">
        <div class="col-md-4">
            <img
                :src="img?.length ? cover : coverPlaceholder"
                class="w-100 ratio ratio-1x1 rounded"
            />
        </div>
        <div class="col-md-8">
            <h4 class="mb-2">{{ title[$i18n.locale] }}</h4>
            <div>{{ description[$i18n.locale] }}</div>
        </div>
    </div>
</template>

<script>
import cover_placeholder from "~/assets/images/cover_placeholder.jpg";

export default {
    props: {
        img: {
            type: [String, null],
            default: null
        },
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            default: ""
        }
    },
    data: () => ({ coverPlaceholder: cover_placeholder })
};
</script>

<style lang="scss">
</style>