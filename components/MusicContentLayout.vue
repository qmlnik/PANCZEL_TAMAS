<template>
    <section class="pb-4 p-sm-4 d-flex align-items-center flex-column">
        <div
            v-if="route.subcategory !== null"
            class="bg-light p-3 mb-4 fs-6 rounded"
        >
            <h3 class="mb-3 text-primary-light text-center">{{ $t("categories") }}</h3>
            <div class="d-flex justify-content-center flex-wrap" style="gap: 0.5rem;">
                <NuxtLinkLocale
                    v-for="subcategory in audioPlayerStore.categories[route.category].subcategoryOrder"
                    :key="subcategory"
                    :to="getPage(subcategory)"
                    :class="[subcategory === route.subcategory ? 'category-selected' : null]"
                    class="song-category p-3 rounded border border-dark"
                >
                    {{ audioPlayerStore.categories[route.category].subcategoies[subcategory].title[$i18n.locale] }}
                </NuxtLinkLocale>
            </div>
        </div>
        <h3
            class="position-relative d-flex flex-column align-items-center justify-content-center fs-2 text-primary-light mb-4 fw-bold w-100"
            style="row-gap: 1rem;"
        >
            <NuxtLinkLocale
                v-if="route.album !== null"
                :to="getPageByRoute({ ...route, album: null })"
                class="title-back-button btn btn-primary fs-5"
                style="left: 0;"
            >
                <i class="bi bi-arrow-left"></i>
                Vissza
            </NuxtLinkLocale>
            <div class="title-text text-center">
                {{ pageTitle }}
            </div>
        </h3>
        <slot></slot>
    </section>
</template>

<script>
import { useAudioPlayerStore } from "~/stores/audioPlayer.js";

export default {
    props: {
        route: {
            type: Object,
            required: true
        }
    },
    setup: () => ({ audioPlayerStore: useAudioPlayerStore(), localePath: useLocalePath() }),
    computed: {
        pageTitle() {
            const { category, subcategory } = this.route;

            let title = this.$t(`hero.subtitle.${category}`);

            if (subcategory !== null) {
                title += ` - ${this.audioPlayerStore.categories[category].subcategoies[subcategory].title[this.$i18n.locale]}`;
            }

            return title;
        }
    },
    methods: {
        getPage(subcategory) {
            return `${this.route.category}-${subcategory}`;
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

.title-back-button {
    position: absolute;
    left: 0;
}

.title-text {
    width: 80%;
}

@include media-breakpoint-down(md) {
    .title-back-button {
        position: relative;
        width: 100%;
    }

    .title-text {
        width: 100%;
    }
}
</style>