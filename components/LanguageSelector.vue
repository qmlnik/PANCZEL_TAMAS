<template>
    <div class="selector-container position-relative d-inline-block">
        <div class="d-flex align-items-center backdrop p-2 rounded" style="cursor: pointer;">
            <img :src="currentLocale.src" :alt="currentLocale.code" width="25" height="13" />
            <span class="mx-1">{{ currentLocale.codeDisplay }}</span>
            <i class="bi bi-caret-down-fill" style="font-size: 0.75rem;"></i>
        </div>
        <div class="selector-dropdown backdrop p-2 rounded">
            <div class="mb-2" style="white-space: nowrap;">{{ $t('languageSelect') }}:</div>
            <div
                v-for="({ code, codeDisplay, src }) in selectableLocales"
                :key="code"
                class="selector-dropdown-lang px-2 rounded"
                style="cursor: pointer;"
                @click="$i18n.setLocale(code)"
            >
                <img :src="src" :alt="code" width="25" height="13" />
                <span class="ms-1">{{ codeDisplay }}</span>
            </div>
        </div>
    </div>
</template> 

<script>
import english_flag from "~/assets/images/english_flag.webp";
import hungarian_flag from "~/assets/images/hungarian_flag.webp";

export default {
    computed: {
        availableLocalesProcessed() {
            return this.$i18n.availableLocales.map(code => ({
                code: code,
                codeDisplay: code.toUpperCase(), 
                src: this.getFlag(code)
            }))
        },
        selectableLocales() {
            return this.availableLocalesProcessed.filter(({ code }) => code !== this.$i18n.locale);
        },
        currentLocale() {
            return this.availableLocalesProcessed.find(({ code }) => code === this.$i18n.locale);
        },
    },
    methods: {
        getFlag(code) {
            switch(code) {
            case "en":
                return english_flag;
            case "hu":
                return hungarian_flag;
            default:
                return hungarian_flag;
            }
        }
    }
};
</script>

<style lang="scss">
@import "~/assets/bootstrap/variables";

.selector-container {
    color: $secondary;

    &:hover .selector-dropdown {
        opacity: 1;
    }

    .selector-dropdown {
        position: absolute;
        top: calc(100% + 10px);
        right: 0;
        opacity: 0;
        transition: .3s;
        z-index: 1;

        .selector-dropdown-lang {
            transition: .3s;

            &:hover {
                background: $secondary;
                color: $dark;
            }
        }
    }
}
</style>