<template>
<div
    v-if="isMobileView !== null"
    class="audio-player-container d-flex flex-column justify-content-center align-items-center"
    @click="openMobileView"
>
    <div class="audio-player-content">
        <div class="position-relative d-flex justify-content-center align-items-center mb-3 mb-sm-1">
            <div
                class="audio-control position-absolute" style="cursor: pointer;"
                @click="togglePlay"
            >
                <i
                    class="bi"
                    :class="[audioPlayerStore.currentlyPlayingAudio?.properties.isPlaying ? 'bi-pause-fill' : 'bi-play-fill']"
                ></i>
            </div>
            <div class="title-container text-center">
                {{ audioPlayerStore.currentlyPlayingAudio?.[$i18n.locale].author }}
                -&nbsp;<span class="fw-bold">{{ audioPlayerStore.currentlyPlayingAudio?.[$i18n.locale].title }}</span>
            </div>
        </div>
        <div class="d-flex align-items-center">
            <span class="timeline-time current me-2">{{ audioPlayerStore.currentlyPlayingAudio?.properties.currentTime || "00:00" }}</span>
            <div
                ref="timeline"
                class="timeline-bar w-100 bg-secondary"
                style="cursor: pointer;"
                @click="setTime"
            >
                <div
                    ref="progressBar"
                    class="bg-primary h-100"
                    :style="{ width: `${(audioPlayerStore.currentlyPlayingAudio?.properties.progressPercentage || 0) * 100}%` }"
                    style="transition: .25s;"
                ></div>
            </div>
            <span class="timeline-time ms-2">{{ audioPlayerStore.currentlyPlayingAudio?.properties.length || "00:00" }}</span>
            <div
                class="volume-icon fs-3 ms-4 me-2"
                style="cursor: pointer;"
                @click="audioPlayerStore.toggleMute"
            >
                <i
                    class="bi"
                    :class="[audioPlayerStore.currentlyPlayingAudioIsMuted ? 'bi-volume-mute-fill' : 'bi-volume-up-fill']"
                ></i>
            </div>
            <div
                ref="volumeSlider"
                class="volume-slider"
                @mouseup="setVolume"
            >
                <div
                    class="volume-percentage"
                    :style="{
                        width: `${
                            audioPlayerStore.currentlyPlayingAudioIsMuted
                                ? 0
                                : audioPlayerStore.currentlyPlayingAudioVolumePercentage * 100
                        }%`
                    }"
                >
                    <div
                        class="volume-percentage-dot"
                        @mousedown="isVolumePercentageMouseDown = true"
                    ></div>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="modal fade" ref="mobileModal">
    <div class="modal-dialog modal-fullscreen">
        <div class="modal-content">
            <div class="modal-body">
                <div class="position-relative d-flex align-items-center justify-content-center" style="height: 10%">
                    <i
                        class="position-absolute fs-1 bi bi-arrow-left"
                        style="left: 0;"
                        data-bs-dismiss="modal"
                    ></i>
                    <div class="text-center fs-4" style="width: 75%">{{ currentAlbum?.title[$i18n.locale] }}</div>
                </div>
                    <img
                        :src="currentAlbum?.img"
                        class="w-100 ratio ratio-1x1 rounded"
                    />
            </div>
        </div>
    </div>
</div>
</template>

<script>
import { useAudioPlayerStore } from "~/stores/audioPlayer.js";

export default {
    setup: () => ({ audioPlayerStore: useAudioPlayerStore() }),
    data: () => ({ isVolumePercentageMouseDown: false, isMobileView: null, isMobileViewOpen: false }),
    computed: {
        currentAlbum() {
            const isAudioAlreadyPlayed = this.audioPlayerStore.currentlyPlayingAudio !== null;
            
            if (isAudioAlreadyPlayed) {
                const { category, subcategory, album } = this.audioPlayerStore.currentlyPlayingAudio?.properties.route;
            
                return this.audioPlayerStore.getAlbumByRoute(category, subcategory, album);
            }
            
            return null;
        }
    },
    mounted() {
        document.addEventListener("mousemove", ({ clientX }) => {
            if (this.isVolumePercentageMouseDown) {
                const { left } = this.$refs.volumeSlider.getBoundingClientRect();

                const cursorPositionXToSliderLeft = clientX - left;
                const sliderWidth = parseFloat(window.getComputedStyle(this.$refs.volumeSlider).width);
                const positionUpperBounded = Math.min(cursorPositionXToSliderLeft, sliderWidth);
                const positionLowerBounded = Math.max(positionUpperBounded, 0);
                
                const volumePercentage = positionLowerBounded / sliderWidth;

                this.audioPlayerStore.setVolume(volumePercentage);
            }
        });

        document.addEventListener("mouseup", () => {
            this.isVolumePercentageMouseDown = false;
        });

        this.isMobileView = window.innerWidth < 576;

        window.addEventListener("resize", () => {
            this.isMobileView = window.innerWidth < 576;
        });
    },
    methods: {
        setTime({ offsetX }) {
            if (!this.isMobileView) {
                const timelineWidth = parseFloat(window.getComputedStyle(this.$refs.timeline).width);
                const progressPercentage = offsetX / timelineWidth;
                this.audioPlayerStore.setTime(progressPercentage);
            }
        },
        setVolume({ offsetX }) {
            if (!this.isVolumePercentageMouseDown) {
                const sliderWidth = parseFloat(window.getComputedStyle(this.$refs.volumeSlider).width);
                const volumePercentage = offsetX / sliderWidth;
                this.audioPlayerStore.setVolume(volumePercentage);
            }
        },
        openMobileView() {
            const isAudioAlreadyPlayed = this.audioPlayerStore.currentlyPlayingAudio !== null;

            if (this.isMobileView && isAudioAlreadyPlayed) {
                const modal = this.$nuxt.$bootstrap.Modal.getOrCreateInstance(this.$refs.mobileModal);
                modal.show();
            }
        },
        togglePlay(event) {
            this.audioPlayerStore.togglePlay();
            event.stopPropagation();
        }
    }
};
</script>

<style lang="scss" scoped>
@import "~/node_modules/bootstrap/scss/functions";
@import "~/node_modules/bootstrap/scss/variables";
@import "~/assets/bootstrap/variables";
@import "~/node_modules/bootstrap/scss/mixins/breakpoints";

.audio-player-container {
    height: 100px;
    background: $veryDark;
    color: $secondary;

    .audio-player-content {
        width: 80%;

        .audio-control {
            font-size: 2rem;
            left: -6px;
        }

        .title-container {
            width: 80%;
        }

        .timeline-bar {
            height: 8px;
        }

        .volume-slider {
            width: 120px;
            height: 4px;
            position: relative;
            cursor: pointer;
            border-radius: 1px;
            background: $light;
            
            .volume-percentage {
                height: 100%;
                position: absolute;
                background: $secondary;
                transition: 0.1s;
                display: flex;
                align-items: center;
                border-radius: 1px;

                .volume-percentage-dot {
                    position: absolute;
                    width: 12px;
                    height: 12px;
                    border-radius: 50%;
                    background: $secondary;
                    transition: 0.1s;
                    right: -6px;
                }
            }
        }
    }
}

@include media-breakpoint-down(sm) {
    .audio-player-container {
        min-height: 80px;
        padding: 1rem 0;
        height: auto;

        .audio-player-content {
            width: 90%;

            .audio-control {
                font-size: 2.5rem;
                left: -8px;
            }

            .timeline-time {
                display: none;
            }

            .timeline-bar {
                height: 3px;
            }

            .volume-icon {
                display: none;
            }

            .volume-slider {
                display: none;
            }
        }
    }
}
</style>