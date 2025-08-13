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
            <div
                class="title-container text-center"
                style="cursor: pointer;"
                @click="navigateToAlbum"
            >
                <div>{{ currentAlbum?.title[$i18n.locale] }}</div>
                {{ audioPlayerStore.currentlyPlayingAudio?.[$i18n.locale].author }}
                -&nbsp;<span class="fw-bold">{{ audioPlayerStore.currentlyPlayingAudio?.[$i18n.locale].title }}</span>
            </div>
        </div>
        <div class="d-flex align-items-center">
            <span class="timeline-time current me-2">{{ audioPlayerStore.currentlyPlayingAudio?.properties.currentTime || "00:00" }}</span>
            <div
                ref="timelineDesktop"
                class="timeline-bar w-100 bg-secondary"
                style="cursor: pointer;"
                @click="setTime"
            >
                <div
                    class="timeline-progress-bar bg-primary h-100"
                    :style="{ width: `${(audioPlayerStore.currentlyPlayingAudio?.properties.progressPercentage || 0) * 100}%` }"
                    style="transition: .25s;"
                ></div>
            </div>
            <span class="timeline-time ms-2">{{ audioPlayerStore.currentlyPlayingAudio?.properties.length || "00:00" }}</span>
            <div class="volume-container">
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
                    ref="volumeSliderDesktop"
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
</div>
<div class="modal fade mobile-audio-player-container" ref="mobileModal">
    <div class="modal-dialog modal-fullscreen">
        <div class="modal-content mobile-audio-player-content">
            <div class="modal-body pt-0 pb-5">
                <div class="position-relative d-flex align-items-center justify-content-center" style="height: 70px;">
                    <i
                        class="position-absolute fs-1 bi bi-arrow-left"
                        style="left: 0;"
                        data-bs-dismiss="modal"
                        @click="isMobileViewOpen = false;"
                    ></i>
                    <div class="text-center fs-5" style="width: 75%">{{ currentAlbum?.title[$i18n.locale] }}</div>
                </div>
                <img
                    :src="currentAlbum?.img"
                    class="w-100 ratio ratio-1x1 rounded"
                    style="object-fit: contain; max-height: 300px;"
                />
                <div class="fs-2 text-center mt-3">
                    <div class="fw-bold">{{ audioPlayerStore.currentlyPlayingAudio?.[$i18n.locale].title }}</div>
                    <div>{{ audioPlayerStore.currentlyPlayingAudio?.[$i18n.locale].author }}</div>
                </div>
                <div
                    ref="timelineMobile"
                    class="timeline-bar w-100 bg-secondary mt-4"
                    @click="setTime"
                >
                    <div
                        class="timeline-progress-bar bg-primary h-100"
                        :style="{ width: `${(audioPlayerStore.currentlyPlayingAudio?.properties.progressPercentage || 0) * 100}%` }"
                        style="transition: .25s;"
                    ></div>
                </div>
                <div class="d-flex justify-content-between mt-1" style="margin-bottom: -5px;">
                    <span class="timeline-time current me-2">{{ audioPlayerStore.currentlyPlayingAudio?.properties.currentTime || "00:00" }}</span>
                    <span class="timeline-time ms-2">{{ audioPlayerStore.currentlyPlayingAudio?.properties.length || "00:00" }}</span>
                </div>
                <div class="d-flex justify-content-center mb-3">
                    <i
                        class="audio-control bi"
                    
                        :class="[audioPlayerStore.currentlyPlayingAudio?.properties.isPlaying ? 'bi-pause-fill' : 'bi-play-fill']"
                        @click="togglePlay"
                    ></i>
                </div>
                <div class="volume-container">
                    <div
                        ref="volumeSliderMobile"
                        class="volume-slider"
                        @mouseup="setVolume"
                    >
                        <div
                            class="volume-icon"
                            @click="audioPlayerStore.toggleMute"
                        >
                            <i
                                class="bi"
                                :class="[audioPlayerStore.currentlyPlayingAudioIsMuted ? 'bi-volume-mute-fill' : 'bi-volume-up-fill']"
                            ></i>
                        </div>
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
                return this.audioPlayerStore.getAlbumByRoute(this.audioPlayerStore.currentlyPlayingAudio?.properties.route);
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
            if (!this.isMobileView || this.isMobileViewOpen) {
                const timelineRef = this.isMobileView ? this.$refs.timelineMobile : this.$refs.timelineDesktop;
                const timelineWidth = parseFloat(window.getComputedStyle(timelineRef).width);
                const progressPercentage = offsetX / timelineWidth;
                this.audioPlayerStore.setTime(progressPercentage);
            }
        },
        setVolume({ offsetX }) {
            if (!this.isVolumePercentageMouseDown) {
                const volumeSliderRef = this.isMobileView ? this.$refs.volumeSliderMobile : this.$refs.volumeSliderDesktop;
                const sliderWidth = parseFloat(window.getComputedStyle(volumeSliderRef).width);
                const volumePercentage = offsetX / sliderWidth;
                this.audioPlayerStore.setVolume(volumePercentage);
            }
        },
        openMobileView() {
            const isAudioAlreadyPlayed = this.audioPlayerStore.currentlyPlayingAudio !== null;

            if (this.isMobileView && isAudioAlreadyPlayed) {
                const modal = this.$nuxt.$bootstrap.Modal.getOrCreateInstance(this.$refs.mobileModal);
                modal.show();
                this.isMobileViewOpen = true;
            }
        },
        togglePlay(event) {
            this.audioPlayerStore.togglePlay();
            event.stopPropagation();
        },
        navigateToAlbum() {
            const isNavigate = !this.isMobileView && this.audioPlayerStore.currentlyPlayingAudio !== null;
            const localePath = useLocalePath();

            if (isNavigate) {
                navigateTo(localePath(getPageByRoute(this.audioPlayerStore.currentlyPlayingAudio.properties.route)));
            }
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
    min-height: 110px;
    padding: 1rem 0;
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
            border-radius: 4px;

            .timeline-progress-bar {
                border-radius: 4px;
            }
        }
    }
}
.volume-container {
    display: flex;
    justify-content: center;
    align-items: center;

    .volume-slider {
        width: 120px;
        height: 4px;
        position: relative;
        cursor: pointer;
        border-radius: 2px;
        background: $light;
        
        .volume-percentage {
            height: 100%;
            position: absolute;
            background: $secondary;
            transition: 0.1s;
            display: flex;
            align-items: center;
            border-radius: 2px;

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

            .volume-container {
                display: none;
            }
        }
    }
}

.mobile-audio-player-container {
    .mobile-audio-player-content {
        background: $veryDark;
        color: $secondary;

        .timeline-bar {
            height: 10px;
            border-radius: 5px;

            .timeline-progress-bar {
                border-radius: 5px;
            }
        }

        .audio-control {
            font-size: 3rem;
        }

        .volume-slider {
            width: 60%;
            height: 8px;
            border-radius: 4px;
            position: relative;
            display: flex;
            align-items: center;

            .volume-icon {
                font-size: 1.7rem;
                position: absolute;
                left: -2.2rem; 
            }

            .volume-percentage {
                border-radius: 4px;

                .volume-percentage-dot {
                    width: 16px;
                    height: 16px;
                    right: -8px;
                }
            }
        }
    }
}
</style>