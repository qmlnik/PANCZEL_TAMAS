import { defineStore } from "pinia";

export const useMainStore = defineStore("main", {
    state: () => ({
        isHeroLoaded: false,
    }),
    actions: {
        setHeroLoaded(isLoaded) {
            this.isHeroLoaded = isLoaded;
        },
    },
})