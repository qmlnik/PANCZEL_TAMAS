<template>
<div class="audio-player p-4 rounded bg-light">
    <div class="d-flex">
        <img
            :src="cover?.length ? cover : coverPlaceholder"
            width="150"
            height="150"
            style="box-shadow: rgba(0, 0, 0, 0.4) 10px 10px 40px -5px; object-fit: cover;"
        />
        <div class="ms-3 w-100">
            <div class="d-flex flex-column justify-content-between h-100 w-100">
                <div>
                    <div class="fs-5">
                        {{ title }}
                    </div>
                    <div>
                        {{ author }}
                    </div>
                </div>
                <div class="w-100 d-none d-sm-block">
                    <div class="d-flex justify-content-between align-items-center w-100">
                        <div class="d-flex align-items-center">
                            <div
                                class="fs-1 me-2 position-relative" style="left: -6px; cursor: pointer;"
                                @click="togglePlay"
                            >
                                <i
                                    class="bi"
                                    :class="[isPlaying ? 'bi-pause-fill' : 'bi-play-fill']"
                                ></i>
                            </div>
                            <div>
                                <span class="current">{{ currentTime }}</span>
                                <span class="mx-1">/</span>
                                <span>{{ length }}</span>
                            </div>
                        </div>
                        <div class="volume-container">
                            <div
                                class="fs-3"
                                style="cursor: pointer;"
                                @click="toggleMute"
                            >
                                <i
                                    class="bi"
                                    :class="[isMuted ? 'bi-volume-mute-fill' : 'bi-volume-up-fill']"
                                ></i>
                            </div>
                            
                            <div class="volume-slider-container">
                                <div
                                    ref="volumeSlider"
                                    class="volume-slider"
                                    @click="setVolume"
                                >
                                    <div class="volume-percentage" ref="volumePercentage"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        ref="timeline"
                        class="w-100 bg-secondary"
                        style="height: 8px; cursor: pointer;"
                        @click="setTime"
                    >
                        <div
                            ref="progressBar"
                            class="bg-primary h-100"
                            style="transition: .25s; width: 0;"
                        ></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="w-100 d-block d-sm-none mt-2">
        <div class="d-flex justify-content-between align-items-center w-100">
            <div class="d-flex align-items-center">
                <div
                    class="fs-1 me-2 position-relative" style="left: -6px; cursor: pointer;"
                    @click="togglePlay"
                >
                    <i
                        class="bi"
                        :class="[isPlaying ? 'bi-pause-fill' : 'bi-play-fill']"
                    ></i>
                </div>
                <div>
                    <span class="current">{{ currentTime }}</span>
                    <span class="mx-1">/</span>
                    <span>{{ length }}</span>
                </div>
            </div>
            <div class="volume-container">
                <div
                    class="fs-3"
                    style="cursor: pointer;"
                    @click="toggleMute"
                >
                    <i
                        class="bi"
                        :class="[isMuted ? 'bi-volume-mute-fill' : 'bi-volume-up-fill']"
                    ></i>
                </div>
                
                <div class="volume-slider-container">
                    <div
                        ref="volumeSlider"
                        class="volume-slider"
                        @click="setVolume"
                    >
                        <div class="volume-percentage" ref="volumePercentage"></div>
                    </div>
                </div>
            </div>
        </div>
        <div
            ref="timeline"
            class="w-100 bg-secondary"
            style="height: 8px; cursor: pointer;"
            @click="setTime"
        >
            <div
                ref="progressBar"
                class="bg-primary h-100"
                style="transition: .25s; width: 0;"
            ></div>
        </div>
    </div>
    <div class="mt-3">
        <ShowMore :content="description" />
    </div>
</div>
</template>

<script>
import cover_placeholder from "~/assets/images/cover_placeholder.jpg";

export default {
    props: {
        src: {
            type: String,
            required: true
        },
        author: {
            type: String,
            required: true
        },
        title: {
            type: String,
            default: ""
        },
        cover: {
            type: String,
            default: ""   
        },
        description: {
            type: String,
            default: ""   
        },
    },
    data() {
        return {
            audioPlayer: new Audio(this.src),
            currentTime: "00:00",
            length: "00:00",
            progressBarInterval: null,
            isPlaying: false,
            isMuted: false,
            coverPlaceholder: cover_placeholder
        };
    },
    mounted() {
        this.audioPlayer.addEventListener(
            "loadeddata",
            () => {
                this.length = this.getTimeCodeFromNum(this.audioPlayer.duration);
                this.audioPlayer.volume = .75;
                // language select reference null
                if (this.$refs.volumePercentage !== null) {
                    this.$refs.volumePercentage.style.height = "75%";
                }
            },
            false
        );
    },
    methods: {
        getTimeCodeFromNum(num) {
            let seconds = parseInt(num);
            let minutes = parseInt(seconds / 60);
            seconds -= minutes * 60;
            const hours = parseInt(minutes / 60);
            minutes -= hours * 60;

            if (hours === 0) {
                return `${minutes}:${String(seconds % 60).padStart(2, 0)}`
            };

            return `${String(hours).padStart(2, 0)}:${minutes}:${String(
                seconds % 60
            ).padStart(2, 0)}`;
        },
        setTime({ offsetX }) {
            const timelineWidth = window.getComputedStyle(this.$refs.timeline).width;
            const timeToSeek = offsetX / parseInt(timelineWidth) * this.audioPlayer.duration;
            this.audioPlayer.currentTime = timeToSeek;
            this.currentTime = this.getTimeCodeFromNum(this.audioPlayer.currentTime);
            this.$refs.progressBar.style.width = this.audioPlayer.currentTime / this.audioPlayer.duration * 100 + "%";
        },
        setVolume({ offsetY }) {
            const sliderHeight = parseFloat(window.getComputedStyle(this.$refs.volumeSlider).height);
            const newVolume = (sliderHeight - offsetY) / sliderHeight;
            this.audioPlayer.volume = newVolume;
            console.log(offsetY, sliderHeight, newVolume);
            this.$refs.volumePercentage.style.height = (newVolume * 100 + 1.5) + "%";
        },
        togglePlay() {
            this.isPlaying ? this.pause() : this.play();
        },
        play() {
            this.$emit("play");
            this.audioPlayer.play();
            this.isPlaying = true;

            this.progressBarInterval = setInterval(() => {
                this.currentTime = this.getTimeCodeFromNum(this.audioPlayer.currentTime);
                this.$refs.progressBar.style.width = this.audioPlayer.currentTime / this.audioPlayer.duration * 100 + "%";
                

                const isAudioFinished = this.isPlaying && this.audioPlayer.paused;

                if (isAudioFinished) {
                    this.togglePlay();
                }
            }, 500);
        },
        pause() {
            this.audioPlayer.pause();
            this.isPlaying = false;

            clearInterval(this.progressBarInterval);
        },
        toggleMute() {
            this.isMuted = !this.isMuted;
            this.audioPlayer.muted = !this.audioPlayer.muted;
        }
    }
};
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