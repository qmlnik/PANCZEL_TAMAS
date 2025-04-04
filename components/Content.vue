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
                <iframe class="w-100" style="aspect-ratio: 16 / 9;" :src="content.src" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
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

<style>
</style>