<template>
<div class="audio-player d-flex flex-column justify-content-center align-items-center">
    <div style="width: 80%;">
        <div class="position-relative d-flex justify-content-center align-items-center mb-1">
            <div
                class="fs-1 me-2 position-absolute" style="left: -6px; cursor: pointer;"
                @click="togglePlay"
            >
                <i
                    class="bi"
                    :class="[isPlaying ? 'bi-pause-fill' : 'bi-play-fill']"
                ></i>
            </div>
            {{ author }} - <span class="fw-bold">{{ title }}</span>
        </div>
        <div class="d-flex align-items-center ">
            <span class="current me-2">{{ currentTime }}</span>
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
            <span class="ms-2">{{ length }}</span>
            <div
                class="fs-3 ms-4 me-2"
                style="cursor: pointer;"
                @click="toggleMute"
            >
                <i
                    class="bi"
                    :class="[isMuted ? 'bi-volume-mute-fill' : 'bi-volume-up-fill']"
                ></i>
            </div>
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
            audioPlayer: null,
            currentTime: "00:00",
            length: "00:00",
            progressBarInterval: null,
            isPlaying: false,
            isMuted: false,
            coverPlaceholder: cover_placeholder,
            isMobileView: false,
            resizeEventListener: null
        };
    },
    mounted() {
        this.audioPlayer = new Audio();
        this.audioPlayer.src = this.src;
        this.audioPlayer.volume = .75;

        this.audioPlayer.addEventListener(
            "loadeddata",
            () => {
                this.length = this.getTimeCodeFromNum(this.audioPlayer.duration);
            },
            false
        );

        this.isMobileView = window.innerWidth < 576;
        
        this.resizeEventListener = () => {
            this.isMobileView = window.innerWidth < 576;
        };

        window.addEventListener("resize", this.resizeEventListener);
    },
    beforeUnmount() {
        window.removeEventListener("resize", this.resizeEventListener);
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
        setVolume({ offsetX }) {
            const sliderWidth = parseFloat(window.getComputedStyle(this.$refs.volumeSlider).width);
            const newVolume = offsetX / sliderWidth;
            this.audioPlayer.volume = newVolume;
            this.$refs.volumePercentage.style.width = (newVolume * 100) + "%";
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

<style lang="scss" scoped>
@import "~/assets/bootstrap/variables";

.audio-player {
    height: 100px;
    background: $veryDark;
    color: $secondary;

    .volume-slider {
        width: 120px;
        height: 4px;
        position: relative;
        cursor: pointer;
        border-radius: 1px;
        background: $light;
        
        .volume-percentage {
            height: 100%;
            width: 75%;
            position: absolute;
            background: $secondary;
            transition: 0.1s;
            display: flex;
            align-items: center;
            border-radius: 1px;

            &::after {
                content: "";
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
</style>