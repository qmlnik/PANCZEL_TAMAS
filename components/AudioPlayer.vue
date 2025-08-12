<template>

</template>

<script>

</script>

<style lang="scss">
@import "~/assets/bootstrap/variables";

.audio-player {
    color: $secondary;

    .volume-container {
        position: relative;

        &:hover {
            .volume-slider-container {
                height: 100px;
                padding: 10px 0;
            }
        }

        .volume-slider-container {
            position: absolute;
            right: 0;
            bottom: 100%;
            width: 22px;
            height: 0;
            padding: 0;
            transition: .2s;
            background: $dark;
            overflow: hidden;
            border-radius: 0.2rem;

            &:hover {
                .volume-percentage {
                    background: $primary;

                    &::after {
                        background: $primary;
                    }
                }
            }

            .volume-slider {
                position: relative;
                width: 100%;
                height: 100%;
                display: flex;
                justify-content: center;
                cursor: pointer;

                .volume-percentage {
                    width: 2px;
                    position: absolute;
                    bottom: 0;
                    background: $secondary;
                    transition: 0.1s;

                    &::after {
                        content: "";
                        position: absolute;
                        top: 0;
                        left: 50%;
                        transform: translate(-50%, 0);
                        width: 8px;
                        height: 8px;
                        border-radius: 50%;
                        background: $secondary;
                        transition: 0.1s;
                    }
                }
            }
        }
    }
}
</style>