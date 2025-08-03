<template>
    <div
        v-for="content in contents"
        :key="getContentKey(content)"
        style="display: contents;"
    >
        <ScrollFadeIn
            v-if="content.type === CONTENT_TYPE.IFRAME"
            class="w-100 mb-3"
        >
            <div class="p-3 rounded bg-light">
                <iframe
                    :class="[content.aspectRatio === IFRAME_ASPECT_RATIO.LOW ? 'iframe-aspect-ratio-low' : 'iframe-aspect-ratio-normal']"
                    class="w-100 content-iframe"
                    :src="content.src"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin"
                    allowfullscreen
                ></iframe>
            </div>
        </ScrollFadeIn>
        <ScrollFadeIn
            v-else
            class="w-100 mb-3"
        >
            <AudioPlayer
                ref="songs"
                :author="content[$i18n.locale].author"
                :title="content[$i18n.locale].title"
                :src="content.src"
                :cover="content.cover"
                :description="content[$i18n.locale].description"
                @play="$emit('audioPlay')"
            />
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

<style lang="scss">
@import "~/node_modules/bootstrap/scss/functions";
@import "~/node_modules/bootstrap/scss/variables";
@import "~/node_modules/bootstrap/scss/mixins/breakpoints";

.content-iframe {
    aspect-ratio: 16 / 9;

    @include media-breakpoint-up(lg) {
        &.iframe-aspect-ratio-low {
            aspect-ratio: 16 / 5;
        }

        &.iframe-aspect-ratio-normal {
            aspect-ratio: 16 / 7;
        }
    }
}
</style>