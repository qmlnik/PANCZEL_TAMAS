<template>
    <div
        v-for="(content, index) in contents"
        :key="getContentKey(content)"
        style="display: contents;"
    >
        <ScrollFadeIn
            v-if="content.type === CONTENT_TYPE.IFRAME"
            class="w-100 mb-3"
        >
            <a :href="content.src" target="_blank" class="media-container text-secondary w-100 d-flex align-items-center p-3 ps-0 rounded bg-light">
                <div class="d-flex align-items-center justify-content-center fs-4" style="width: 60px;">
                    <span class="media-default-view">{{ index + 1 }}</span>
                    <i class="media-hover-view bi bi-youtube"></i>
                </div>
                <div>
                    <div class="fw-bold">{{ "egy hosszú cím" }}</div>
                    <div>{{ "Tamás" }}</div>
                </div>
            </a>
        </ScrollFadeIn>
        <ScrollFadeIn
            v-else
            class="w-100 mb-3"
        >
            <div class="media-container text-secondary w-100 d-flex justify-content-between align-items-center p-3 ps-0 rounded bg-light">
                <div class="d-flex">
                    <div class="d-flex align-items-center justify-content-center fs-4" style="width: 60px;">
                        <div class="media-default-view">
                            <i
                                v-if="isPlaying"
                                class="bi bi-music-note-beamed"
                                style="cursor: pointer;"
                                @click="togglePlay"
                            ></i>
                            <span v-else>{{ index + 1 }}</span>
                        </div>
                        <div class="media-hover-view">
                            <i
                                class="bi"
                                :class="[isPlaying ? 'bi-pause-fill' : 'bi-play-fill']"  
                                style="cursor: pointer;"
                                @click="togglePlay"
                            ></i>
                        </div>
                    </div>
                    <div>
                        <div class="fw-bold">{{ content[$i18n.locale].title }}</div>
                        <div>{{ content[$i18n.locale].author }}</div>
                    </div>
                </div>
                <div>{{ "00:00" }}</div>
            </div>
            <!--<AudioPlayer
                ref="songs"
                :author="content[$i18n.locale].author"
                :title="content[$i18n.locale].title"
                :src="content.src"
                :cover="content.cover"
                :description="content[$i18n.locale].description"
                @play="$emit('audioPlay')"
            />-->
        </ScrollFadeIn>
    </div>
</template>

<script>
export default {
    props: {
        contents: {
            required: true
        }
    },
    methods: {
        getContentKey(content) {
            if (content.type === CONTENT_TYPE.IFRAME) {
                return content.src;
            }

            const { [this.$i18n.locale]: { author, title } } = content;

            return `${author}-${title}`;
        }
    }
}; 
</script>

<style lang="scss" scoped>
@import "~/node_modules/bootstrap/scss/functions";
@import "~/node_modules/bootstrap/scss/variables";
@import "~/node_modules/bootstrap/scss/mixins/breakpoints";

.media-container {
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
}
</style>