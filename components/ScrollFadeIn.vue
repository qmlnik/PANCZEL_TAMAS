<template>
    <div
        ref="scrollRef"
        :class="[
            ...(!(isBlockFadeInAfterLoad && $store.isHeroLoaded) ? [
                'scroll-animation',
                isInView ? 'in-view' : null
            ] : [])
        ]"
        :style="`transition-delay: ${transitionDelay}s`"
    >
        <slot></slot>
    </div>
</template>

<script>
import { useMainStore } from "~/stores";

export default {
    props: {
        transitionDelay: {
            type: Number,
            default: 0.25
        },
        // nyelvváltáskor ne bugoljon be az animáció
        isBlockFadeInAfterLoad: {
            type: Number,
            default: false
        }
    },
    setup () {
        return { $store: useMainStore() };
    },
    data() {
        return { isInView: false, observer: null }
    },
    mounted() {
        this.observer = new IntersectionObserver(this.observerCallback);
        this.observer.observe(this.$refs.scrollRef);
    },
    beforeUnmount() {
        this.observer.unobserve(this.$refs.scrollRef);
    },
    methods: {
        observerCallback([scrollRef]) {
            if (scrollRef.isIntersecting) {
                this.isInView = true;
                this.observer.unobserve(this.$refs.scrollRef);
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.scroll-animation {
    transition: 0.75s;
    opacity: 0;
    transform: translateY(20px);

    &.in-view {
        opacity: 1;
        transform: none;
    }
}
</style>