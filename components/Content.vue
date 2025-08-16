<template>
    <div style="display: contents;">
        <ScrollFadeIn
            v-for="(content, index) in audioPlayerStore.getAlbumByRoute(route).content"
            :key="`${content.author}-${content.title}`"
            class="w-100 mb-3"
        >
            <div
                v-if="!(content.onlyLanguages !== undefined && !content.onlyLanguages.includes($i18n.locale))"
                class="media-container w-100 d-flex justify-content-between align-items-center p-3 ps-0 rounded"
                :class="[audioPlayerStore.currentlyPlayingAudio === content ? 'current-audio' : null]"
            >
                <div class="d-flex w-100">
                    <div class="d-flex align-items-center justify-content-center fs-4" style="width: 60px;">
                        <div class="media-default-view">
                            <i
                                v-if="content.properties.isPlaying"
                                class="bi bi-music-note-beamed"
                                style="cursor: pointer;"
                                @click="audioPlayerStore.pause()"
                            ></i>
                            <span v-else>{{ index + 1 }}</span>
                        </div>
                        <div class="media-hover-view">
                            <i
                                v-if="content.properties.isPlaying"
                                class="bi bi-pause-fill"
                                style="cursor: pointer;"
                                @click="audioPlayerStore.pause()"
                            ></i>
                            <i
                                v-else
                                class="bi bi-play-fill"
                                style="cursor: pointer;"
                                @click="audioPlayerStore.setCurrentAudio(content); audioPlayerStore.play()"
                            ></i>
                        </div>
                    </div>
                    <div class="d-flex flex-column justify-content-center">
                        <div class="fw-bold">{{ content[$i18n.locale].title }}</div>
                        <div>{{ content[$i18n.locale].author }}</div>
                    </div>
                    <a
                        v-if="content.type === CONTENT_TYPE.AUDIO_WITH_VIDEO"
                        :href="content.video"
                        class="btn btn-primary d-flex align-items-center ms-4"
                        target="_blank"
                    >
                        <span class="d-none d-sm-block me-2">Ugrás</span><i class="bi bi-youtube fs-3"></i>
                    </a>
                </div>
                <div>{{ content.properties.length }}</div>
            </div>
        </ScrollFadeIn>
    </div>
</template>

<script>
import { useAudioPlayerStore } from "~/stores/audioPlayer.js";

export default {
    props: {
        route: {
            type: Object,
            required: true
        }
    },
    setup() {
        return { audioPlayerStore: useAudioPlayerStore() };
    },
    mounted() {
        this.loadAudioPlayer();
    },
    methods: {
        loadAudioPlayer() {
            this.audioPlayerStore.getAlbumByRoute(this.route).content.forEach(content => {
                const isAudioLoaded = content.properties.audioPlayer !== null;

                if (!isAudioLoaded) {
                    const audioPlayer = new Audio();

                    audioPlayer.preload = "metadata";
                    audioPlayer.src = content.src;
                    
                    content.properties.audioPlayer = audioPlayer;
                    
                    audioPlayer.addEventListener(
                        "loadeddata",
                        () => {
                            content.properties.length = this.audioPlayerStore.getTimeCodeFromNum(audioPlayer.duration);
                        },
                        { once: true }
                    );
                }
            });
        }
    }
}; 
</script>

<style lang="scss" scoped>
@import "~/node_modules/bootstrap/scss/functions";
@import "~/node_modules/bootstrap/scss/variables";
@import "~/node_modules/bootstrap/scss/mixins/breakpoints";
@import "~/assets/bootstrap/variables";

.media-container {
    background: $light;
    color: $secondary;
    transition: .3s;

    &.current-audio {
        background: $secondary;
        color: $light;
    }

    .media-default-view {
        display: block;
    }

    .media-hover-view {
        display: none;
    }

    &:hover {
        .media-default-view {
            display: none;
        }

        .media-hover-view {
            display: block;
        }
    }

    @include media-breakpoint-down(sm) {
        .media-default-view {
            display: none;
        }

        .media-hover-view {
            display: block;
        }
    }
}
</style>