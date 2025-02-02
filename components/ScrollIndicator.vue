<template>
    <div>
        <div class="scroll-indicator-arrow" style="margin-bottom: -3px;"></div>
        <div class="scroll-indicator-arrow" style="animation-delay: 100ms"></div>
    </div>
</template>

<script>
</script>

<style lang="scss">
.scroll-indicator-arrow {
    width: 25px;
    height: 25px;
    border-width: 2px;
    border-right-color: white;
    border-bottom-color: white;
    border-left-color: transparent;
    border-top-color: transparent;
    border-style: solid;
    transform: rotate(45deg);
    position: relative;
    border-radius: 2px;
    animation: scroll-indicator 1.5s infinite;
}

@keyframes scroll-indicator {
    0% {
        bottom: 25px;
        opacity: 0;
    }
    50%  {
        opacity: 1;
    }
    100% {
        bottom: 0px;
        opacity: 0;
    }
}
</style>