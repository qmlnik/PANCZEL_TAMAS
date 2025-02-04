<template>
    <div
        ref="scrollRef"
        :class="['scroll-animation', isInView ? 'in-view' : null]"
        :style="`transition-delay: ${transitionDelay}s`"
    >
        <slot></slot>
    </div>
</template>

<script>
export default {
    props: {
        transitionDelay: {
            type: Number,
            default: 0.25
        }
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