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
const COLLAPSED_HEIGHT = 50;

export default {
    props: {
        content: {
            type: String,
            required: true
        }
    },
    data: () => ({ isShowMoreOpen: false, isDisplayShowMore: false, collapseHeight: 'auto' }),
    watch: {
        isShowMoreOpen() {
            this.setCollapseHeight();
        }
    },
    mounted() {
        this.isDisplayShowMore = this.$refs.content.offsetHeight > COLLAPSED_HEIGHT;
        this.setCollapseHeight();
    },
    methods: {
        setCollapseHeight() {
            this.collapseHeight =
                `${this.isDisplayShowMore && !this.isShowMoreOpen ? COLLAPSED_HEIGHT : this.$refs.content.offsetHeight}px`;
        }
    }
}
</script>

<style lang="scss" scoped>
@import "~/assets/bootstrap/variables";

.collapse-fade:after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-image: linear-gradient(to top, $light, rgba(0, 0, 0, 0) 50px),
}
</style>