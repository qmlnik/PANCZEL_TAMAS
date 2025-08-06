<template>
    <div class="w-100">
        <div
            class="overflow-hidden position-relative"
            :class="[isDisplayShowMore && !isShowMoreOpen ? 'collapse-fade' : null]"
            style="transition: .3s;"
            :style="{ height: collapseHeight }"
        >
            <div ref="content">
                {{ content }}
            </div>
        </div>
        <div class="d-flex justify-content-center">
            <button v-if="isDisplayShowMore" class="btn btn-primary mt-3" @click="isShowMoreOpen = !isShowMoreOpen">
                {{ $t(isShowMoreOpen ? "showLess" : "showMore") }}
                <i :class="['bi', isShowMoreOpen ? 'bi-caret-up-fill' : 'bi-caret-down-fill']"></i>
            </button>
        </div>
    </div>
</template>

<script>
const COLLAPSED_HEIGHT = 300;

export default {
    props: {
        content: {
            type: String,
            required: true
        }
    },
    data: () => ({
        isShowMoreOpen: false,
        isDisplayShowMore: false,
        collapseHeight: 'auto',
        resizeEventListener: null
    }),
    watch: {
        isShowMoreOpen(nextIsShowMoreOpen) {
            this.setCollapseHeight();

            if (!nextIsShowMoreOpen) {
                this.scrollToContentTop();
            }
        }
    },
    mounted() {
        this.isDisplayShowMore = this.$refs.content.offsetHeight > COLLAPSED_HEIGHT;
        this.setCollapseHeight();

        this.resizeEventListener = () => {
            this.isDisplayShowMore = this.$refs.content.offsetHeight > COLLAPSED_HEIGHT;
            this.setCollapseHeight();
        };

        window.addEventListener("resize", this.resizeEventListener);
    },
    beforeUnmount() {
        window.removeEventListener("resize", this.resizeEventListener);
    },
    methods: {
        setCollapseHeight() {
            this.collapseHeight =
                `${this.isDisplayShowMore && !this.isShowMoreOpen ? COLLAPSED_HEIGHT : this.$refs.content.offsetHeight}px`;            
        },
        scrollToContentTop() {
            const { top } = this.$refs.content.getBoundingClientRect();
            const isScrollToContentTop = top < 0;

            if (isScrollToContentTop) {
                this.$refs.content.scrollIntoView();
            }
        }
    }
}
</script>

<style lang="scss" scoped>
@import "~/assets/bootstrap/variables";

.collapse-fade {
    mask-image: linear-gradient(to top, transparent, black 50px);
}
</style>