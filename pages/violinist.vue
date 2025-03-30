<template>
    <div class="text-center fs-2 text-primary mb-4 fw-bold">{{ $t('hero.subtitle.violinist') }}</div>
    <div
        v-for="video in videos"
        :key="video"
        class="d-flex"
    >
        <ScrollFadeIn class="w-100 mb-3">
            <div class="p-3 rounded bg-light">
                <iframe class="w-100" style="aspect-ratio: 16 / 9;" :src="video" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
        </ScrollFadeIn>
    </div>
</template>

<script>
export default {
    data() {
        return {
            videos: [
                "https://www.youtube.com/embed/RZtEK81213U?si=hMA05DlpbJTDq-zD",
                "https://www.youtube.com/embed/E814iS5w42M?si=nyq70Ad7vDXZJ2z9",
                "https://www.youtube.com/embed/muFgh1CSPEE?si=oLY-NrJh-hg6hkMl"
            ]
        };
    }
};
</script>

<style lang="scss">
</style>