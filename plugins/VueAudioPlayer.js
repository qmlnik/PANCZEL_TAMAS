import VueAudioPlayer from "@liripeng/vue-audio-player";

export default defineNuxtPlugin(nuxtApp => {
    nuxtApp.vueApp.use(VueAudioPlayer);
});