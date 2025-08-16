<template>
    <div class="selector-container dropdown">
        <div
            class="d-flex align-items-center backdrop p-2 rounded"
            style="cursor: pointer;"
            data-bs-toggle="dropdown"
        >
            <img
                :src="currentLocale.flag"
                :alt="currentLocale.code"
                width="25"
                alt="current locale flag"
            />
            <span class="mx-1">{{ currentLocale.codeDisplay }}</span>
            <i class="bi bi-caret-down-fill" style="font-size: 0.75rem;"></i>
        </div>
        <div class="selector-dropdown dropdown-menu dropdown-menu-end backdrop p-2 rounded">
            <div class="mb-2" style="white-space: nowrap;">{{ $t('languageSelect') }}:</div>
            <div
                v-for="({ code, codeDisplay, flag }) in selectableLocales"
                :key="code"
                class="selector-dropdown-lang p-2 rounded"
                style="cursor: pointer;"
                @click="$i18n.setLocale(code)"
            >
                <img :src="flag" :alt="code" width="25" />
                <span class="ms-1">{{ codeDisplay }}</span>
            </div>
        </div>
    </div>
</template> 

<script>
export default {
    computed: {
        availableLocalesProcessed() {
            return this.$i18n.availableLocales.map(code => ({
                code: code,
                codeDisplay: code.toUpperCase(), 
                flag: this.getFlag(code)
            }));
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
                return "/images/flags/gb.svg";
            case "hu":
                return "/images/flags/hu.svg";
            default:
                return "/images/flags/hu.svg";
            }
        }
    }
};
</script>

<style lang="scss">
@import "~/assets/bootstrap/variables";

.selector-container {
    color: $secondary;

    .selector-dropdown {
        color: $secondary;

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