import { defineStore } from "pinia";

import Letai_Kis_Gabi_Koszonom_hogy_vagy from "~/assets/songs/composer/gospel/Letai_Kis_Gabi_Koszonom_hogy_vagy.mp3";
import Szeretet_himnusz from "~/assets/songs/composer/gospel/Szeretet_himnusz.mp3";
import Fejes_Zolies_es_a_Vidam_Szimfonikusok from "~/assets/songs/composer/gospel/Fejes_Zolies_es_a_Vidam_Szimfonikusok.mp3";

import Atvaltozasok from "~/assets/songs/composer/classic/Atvaltozasok.mp3";
import Divertimento_Concertante from "~/assets/songs/composer/classic/Divertimento_Concertante.mp3";
import Hadd_eljek from "~/assets/songs/composer/classic/Hadd_eljek.mp3";
import Passacagila from "~/assets/songs/composer/classic/Passacagila.mp3";
import Psalm_29 from "~/assets/songs/composer/classic/Psalm_29.mp3";
import Fuvosotos from "~/assets/songs/composer/classic/Fuvosotos.mp3";
import Klezmer_Szvit from "~/assets/songs/composer/classic/Klezmer_Szvit.mp3";
import Violin_Concerto from "~/assets/songs/composer/classic/Violin_Concerto.mp3";
import Piano_Concerto from "~/assets/songs/composer/classic/Piano_Concerto.mp3";
import Klezmer_Suite from "~/assets/songs/composer/classic/Klezmer_Suite.mp3";
import Pikolo_eletkepek from "~/assets/songs/composer/classic/Pikolo_eletkepek.mp3";

import cisz_moll_fuga_a_la_Bach from "~/assets/songs/composer/other_composers_style/cisz_moll_fuga_a_la_Bach.mp3";
import Chaconne_baroque from "~/assets/songs/composer/other_composers_style/Chaconne_baroque.mp3";
import Fuga_a_4_voci_a_la_Bach from "~/assets/songs/composer/other_composers_style/Fuga_a_4_voci_a_la_Bach.mp3";
import Requiem_Lacrymosa_and_Amen_fugue from "~/assets/songs/composer/other_composers_style/Requiem_Lacrymosa_and_Amen_fugue.mp3";
import AMEN_FUGUE_to_Mozarts_Requiem from "~/assets/songs/composer/other_composers_style/AMEN_FUGUE_to_Mozarts_Requiem.mp3";
import Les_quatre_élémens from "~/assets/songs/composer/other_composers_style/Les_quatre_élémens.mp3";

import Bach_Largo from "~/assets/songs/violinist/Bach_Largo.mp3";
import gmollfugareszlet from "~/assets/songs/violinist/gmollfugareszlet.mp3";

import cover_placeholder from "~/assets/images/cover_placeholder.jpg";

const categoryContent = {
    "composer-classic-orchestra": [
        {
            type: CONTENT_TYPE.AUDIO_WITH_VIDEO,
            en: {
                author: "Tamás Pánczél",
                title: "Violin Concerto",
                description: ""
            },
            hu: {
                author: "Pánczél Tamás",
                title: "Violin Concerto",
                description: ""
            },
            src: Violin_Concerto,
            video: "https://www.youtube.com/watch?v=Z_wT0pKZZf4"
        },
        {
            type: CONTENT_TYPE.AUDIO_WITH_VIDEO,
            en: {
                author: "Tamás Pánczél",
                title: "Piano Concerto",
                description: ""
            },
            hu: {
                author: "Pánczél Tamás",
                title: "Piano Concerto",
                description: ""
            },
            src: Piano_Concerto,
            video: "https://www.youtube.com/watch?v=3Tpobd5Fn80"
        },
        {
            type: CONTENT_TYPE.AUDIO,
            en: {
                author: "Tamás Pánczél",
                title: "Átváltozások",
                description: ""
            },
            hu: {
                author: "Pánczél Tamás",
                title: "Átváltozások",
                description: ""
            },
            src: Atvaltozasok
        },
        {
            type: CONTENT_TYPE.AUDIO,
            en: {
                author: "Tamás Pánczél",
                title: "Divertimento Concertante",
                description: ""
            },
            hu: {
                author: "Pánczél Tamás",
                title: "Divertimento Concertante",
                description: ""
            },
            src: Divertimento_Concertante
        },
        {
            type: CONTENT_TYPE.AUDIO,
            en: {
                author: "Tamás Pánczél",
                title: "Klezmer Szvit",
                description: ""
            },
            hu: {
                author: "Pánczél Tamás",
                title: "Klezmer Szvit",
                description: ""
            },
            src: Klezmer_Szvit
        },
        {
            type: CONTENT_TYPE.AUDIO_WITH_VIDEO,
            en: {
                author: "Tamás Pánczél",
                title: "Klezmer Suite",
                description: ""
            },
            hu: {
                author: "Pánczél Tamás",
                title: "Klezmer Suite",
                description: ""
            },
            src: Klezmer_Suite,
            video: "https://www.youtube.com/watch?v=RZtEK81213U"
        },
        {
            type: CONTENT_TYPE.AUDIO,
            en: {
                author: "Tamás Pánczél",
                title: "Szeretet himnusz",
                description: ""
            },
            hu: {
                author: "Pánczél Tamás",
                title: "Szeretet himnusz",
                description: ""
            },
            src: Szeretet_himnusz
        },
        {
            type: CONTENT_TYPE.AUDIO,
            en: {
                author: "Tamás Pánczél",
                title: "Passacagila",
                description: ""
            },
            hu: {
                author: "Pánczél Tamás",
                title: "Passacagila",
                description: ""
            },
            src: Passacagila
        },
    ],
    "composer-classic-vocal": [
        {
            type: CONTENT_TYPE.AUDIO,
            en: {
                author: "Tamás Pánczél",
                title: "Psalm 29",
                description: ""
            },
            hu: {
                author: "Pánczél Tamás",
                title: "29. Zsoltár",
                description: ""
            },
            src: Psalm_29
        },
        {
            type: CONTENT_TYPE.AUDIO,
            en: {
                author: "Tamás Pánczél",
                title: "Hadd éljek",
                description: ""
            },
            hu: {
                author: "Pánczél Tamás",
                title: "Hadd éljek",
                description: ""
            },
            src: Hadd_eljek
        },
    ],
    "composer-classic-chamber": [
        {
            type: CONTENT_TYPE.AUDIO,
            en: {
                author: "Tamás Pánczél",
                title: "Wind quintet",
                description: ""
            },
            hu: {
                author: "Pánczél Tamás",
                title: "Fúvósötös",
                description: ""
            },
            src: Fuvosotos
        },
        {
            type: CONTENT_TYPE.AUDIO_WITH_VIDEO,
            en: {
                author: "Tamás Pánczél",
                title: "Genres for piccolo",
                description: ""
            },
            hu: {
                author: "Pánczél Tamás",
                title: "Pikoló életképek",
                description: ""
            },
            src: Pikolo_eletkepek,
            video: "https://www.youtube.com/watch?v=bTg4-bp8DKU"
        },
    ],
    "composer-others-Bach": [
        {
            type: CONTENT_TYPE.AUDIO_WITH_VIDEO,
            en: {
                author: "Tamás Pánczél",
                title: "fugue in c sharp minor - \"a la Bach\"",
                description: ""
            },
            hu: {
                author: "Pánczél Tamás",
                title: "cisz moll fuga - \"a la Bach\"",
                description: ""
            },
            src: cisz_moll_fuga_a_la_Bach,
            video: "https://www.youtube.com/watch?v=GoFo-taTX5w"
        },
        {
            type: CONTENT_TYPE.AUDIO_WITH_VIDEO,
            en: {
                author: "Tamás Pánczél",
                title: "Chaconne (baroque)",
                description: ""
            },
            hu: {
                author: "Pánczél Tamás",
                title: "Chaconne (baroque)",
                description: ""
            },
            src: Chaconne_baroque,
            video: "https://www.youtube.com/watch?v=3hfql7b-DnQ"
        },
        {
            type: CONTENT_TYPE.AUDIO_WITH_VIDEO,
            en: {
                author: "Tamás Pánczél",
                title: "Fuga a 4 voci \"à la Bach\"",
                description: ""
            },
            hu: {
                author: "Pánczél Tamás",
                title: "Fuga a 4 voci \"à la Bach\"",
                description: ""
            },
            src: Fuga_a_4_voci_a_la_Bach,
            video: "https://www.youtube.com/watch?v=8D7ZzNtR-eI"
        },
    ],
    "composer-others-Mozart": [
        {
            type: CONTENT_TYPE.AUDIO_WITH_VIDEO,
            en: {
                author: "Tamás Pánczél",
                title: "Requiem Lacrymosa & Amen fugue",
                description: ""
            },
            hu: {
                author: "Pánczél Tamás",
                title: "Requiem Lacrymosa & Amen fugue",
                description: ""
            },
            src: Requiem_Lacrymosa_and_Amen_fugue,
            video: "https://www.youtube.com/watch?v=E814iS5w42M"
        },
        {
            type: CONTENT_TYPE.AUDIO_WITH_VIDEO,
            en: {
                author: "Tamás Pánczél",
                title: "AMEN FUGUE to Mozart's Requiem",
                description: ""
            },
            hu: {
                author: "Pánczél Tamás",
                title: "AMEN FUGUE to Mozart's Requiem",
                description: ""
            },
            src: AMEN_FUGUE_to_Mozarts_Requiem,
            video: "https://www.youtube.com/watch?v=s3qfyOAARdc"
        },
    ],
    "composer-others-Liszt": [
        {
            type: CONTENT_TYPE.AUDIO_WITH_VIDEO,
            en: {
                author: "Tamás Pánczél",
                title: "Les quatre élémens",
                description: ""
            },
            hu: {
                author: "Pánczél Tamás",
                title: "Les quatre élémens",
                description: ""
            },
            src: Les_quatre_élémens,
            video: "https://www.youtube.com/watch?v=c6KBV3-ljEw&t=1s"
        },
    ],
    "composer-gospel-all": [
        {
            type: CONTENT_TYPE.AUDIO,
            en: {
                author: "Tamás Pánczél",
                title: "Köszönöm hogy vagy (Létay Kiss Gabriella)",
                description: ""
            },
            hu: {
                author: "Pánczél Tamás",
                title: "Köszönöm hogy vagy (Létay Kiss Gabriella)",
                description: ""
            },
            src: Letai_Kis_Gabi_Koszonom_hogy_vagy,
        },
        {
            type: CONTENT_TYPE.AUDIO,
            en: {
                author: "Tamás Pánczél",
                title: "Fejes Zoli és es a Vidám Szimfónikusok",
                description: ""
            },
            hu: {
                author: "Pánczél Tamás",
                title: "Fejes Zoli és es a Vidám Szimfónikusok",
                description: ""
            },
            src: Fejes_Zolies_es_a_Vidam_Szimfonikusok,
        },
    ],
    "violinist-J_S_Bach": [
        {
            type: CONTENT_TYPE.AUDIO,
            en: {
                author: "Tamás Pánczél",
                title: "J.S.Bach - Largo from C major solo sonata",
                description: ""
            },
            hu: {
                author: "Pánczél Tamás",
                title: "J.S.Bach - Largo C dúr szóló szonátából",
                description: ""
            },
            src: Bach_Largo
        },
        {
            type: CONTENT_TYPE.AUDIO,
            en: {
                author: "Tamás Pánczél",
                title: "J.S.Bach - Fuge (extract) from g-minor",
                description: ""
            },
            hu: {
                author: "Pánczél Tamás",
                title: "J.S.Bach - Fúga (részlet) g-moll szonátából",
                description: ""
            },
            src: gmollfugareszlet
        }
    ]
};

function setAudioContentProperties() {
    Object.entries(categoryContent).forEach(([page, contentList]) => {
        contentList.forEach((content, index) => {
            content.properties = {
                audioPlayer: null,
                isPlaying: false,
                isMuted: false,
                currentTime: "00:00",
                progressPercentage: 0,
                progressInterval: null,
                route: getRouteByPage(page),
                index
            };
        });        
    });
}

setAudioContentProperties();

const categoryStructure = {
    composer: {
        subcategoryOrder: ["classic", "others", "gospel"],
        subcategoies: {
            classic: {
                title: {
                    en: "Classic",
                    hu: "Klasszikus"
                },
                albumContent: {
                    albumOrder: ["orchestra", "vocal", "chamber"],
                    albums: {
                        orchestra: {
                            img: cover_placeholder,
                            title: {
                                en: "Orchestra compositions",
                                hu: "Zenekari művek"
                            },
                            description: {
                                en: "Orchestra compositions",
                                hu: "Zenekari művek"
                            },
                            content: categoryContent["composer-classic-orchestra"],
                        },
                        vocal: {
                            img: cover_placeholder,
                            title: {
                                en: "Vocal compositions",
                                hu: "Vokális művek"
                            },
                            description: {
                                en: "Vocal compositions",
                                hu: "Vokális művek"
                            },
                            content: categoryContent["composer-classic-vocal"],
                        },
                        chamber: {
                            img: cover_placeholder,
                            title: {
                                en: "Chamber compositions",
                                hu: "Kamara művek"
                            },
                            description: {
                                en: "Chamber compositions",
                                hu: "Kamara művek"
                            },
                            content: categoryContent["composer-classic-chamber"],
                        }
                    }
                },
            },
            others: {
                title: {
                    en: "Others",
                    hu: "Mások stílusában"
                },
                albumContent: {
                    albumOrder: ["Bach", "Mozart", "Liszt"],
                    albums: {
                        Bach: {
                            img: cover_placeholder,
                            title: {
                                en: "ala Bach",
                                hu: "ala Bach"
                            },
                            description: {
                                en: "ala Bach",
                                hu: "ala Bach"
                            },
                            content: categoryContent["composer-others-Bach"],
                        },
                        Mozart: {
                            img: cover_placeholder,
                            title: {
                                en: "Mozart Requiem additions",
                                hu: "Mozart Requiem kiegészítések"
                            },
                            description: {
                                en: "Mozart Requiem additions",
                                hu: "Mozart Requiem kiegészítések"
                            },
                            content: categoryContent["composer-others-Mozart"],
                        },
                        Liszt: {
                            img: cover_placeholder,
                            title: {
                                en: "Liszt Les Quatre Élémens",
                                hu: "Liszt Les Quatre Élémens"
                            },
                            description: {
                                en: "Liszt Les Quatre Élémens",
                                hu: "Liszt Les Quatre Élémens"
                            },
                            content: categoryContent["composer-others-Liszt"],
                        }
                    }
                }
            },
            gospel: {
                title: {
                    en: "Gospel",
                    hu: "Gospel"
                },
                albumContent: {
                    albumOrder: ["all"],
                    albums: {
                        all: {
                            img: cover_placeholder,
                            title: {
                                en: "All Gospel",
                                hu: "Összes Gospel"
                            },
                            description: {
                                en: "All Gospel",
                                hu: "Összes Gospel"
                            },
                            content: categoryContent["composer-gospel-all"],
                        }
                    }
                }
            }
        }
    },
    violinist: {
        title: {
            en: "J.S. Bach",
            hu: "J.S. Bach"
        },
        albumContent: {
            albumOrder: ["J_S_Bach"],
            albums: {
                J_S_Bach: {
                    img: cover_placeholder,
                    title: {
                        en: "All J.S. Bach",
                        hu: "Összes J.S. Bach"
                    },
                    description: {
                        en: "All J.S. Bach",
                        hu: "Összes J.S. Bach"
                    },
                    content: categoryContent["violinist-J_S_Bach"],
                }
            }
        }
    },
    conductor: {

    }
};

export const useAudioPlayerStore = defineStore("audioPlayer", {
    state: () => {
        return {
            categories: categoryStructure,
            currentlyPlayingAudio: null,
            currentlyPlayingAudioVolumePercentage: 0.75,
            currentlyPlayingAudioIsMuted: false
        };
    },
    actions: {
        setCurrentAudio(audio) {
            const isNewAudio = this.currentlyPlayingAudio !== audio;

            if (isNewAudio) {
                const isFirstPlayingAudio = this.currentlyPlayingAudio === null;

                if (!isFirstPlayingAudio) {
                    this.pause();
                    this.currentlyPlayingAudio.properties.isPlaying = false;
                }

                this.currentlyPlayingAudio = audio;
                this.setTime(0);
                this.currentlyPlayingAudio.properties.audioPlayer.volume = this.currentlyPlayingAudioVolumePercentage;
                this.currentlyPlayingAudio.properties.audioPlayer.muted = this.currentlyPlayingAudioIsMuted;
            }
        },
        play() {
            const { currentTime, duration } = this.currentlyPlayingAudio.properties.audioPlayer;
            const isAudioEnded = currentTime === duration;

            if (isAudioEnded) {
                this.setTime(0);
            }

            this.currentlyPlayingAudio.properties.audioPlayer.play();
            this.currentlyPlayingAudio.properties.isPlaying = true;

            this.currentlyPlayingAudio.properties.progressInterval = setInterval(() => {
                const { audioPlayer, isPlaying } = this.currentlyPlayingAudio.properties;

                this.currentlyPlayingAudio.properties.currentTime = this.getTimeCodeFromNum(audioPlayer.currentTime);
                this.currentlyPlayingAudio.properties.progressPercentage =
                    audioPlayer.currentTime / audioPlayer.duration;

                const isAudioFinished = audioPlayer.paused && isPlaying;

                if (isAudioFinished) {
                    this.pause();
                }
            }, 500);
        },
        pause() {
            this.currentlyPlayingAudio.properties.audioPlayer.pause();
            this.currentlyPlayingAudio.properties.isPlaying = false;

            clearInterval(this.currentlyPlayingAudio.properties.progressInterval);
        },
        togglePlay() {
            this.currentlyPlayingAudio.properties.isPlaying ? this.pause() : this.play();            
        },
        toggleMute() {
            this.currentlyPlayingAudioIsMuted = !this.currentlyPlayingAudioIsMuted;
            const isAudioAlreadyPlayed = this.currentlyPlayingAudio !== null;

            if (isAudioAlreadyPlayed) {
                this.currentlyPlayingAudio.properties.audioPlayer.muted = this.currentlyPlayingAudioIsMuted;
            }
        },
        setTime(progressPercentage) {
            const timeToSeek = progressPercentage * this.currentlyPlayingAudio.properties.audioPlayer.duration;
            this.currentlyPlayingAudio.properties.audioPlayer.currentTime = timeToSeek;
            this.currentlyPlayingAudio.properties.currentTime = this.getTimeCodeFromNum(timeToSeek);
            this.currentlyPlayingAudio.properties.progressPercentage = progressPercentage;
        },
        setVolume(volumePercentage) {
            this.currentlyPlayingAudioVolumePercentage = volumePercentage;
            const isAudioAlreadyPlayed = this.currentlyPlayingAudio !== null;

            if (isAudioAlreadyPlayed) {
                this.currentlyPlayingAudio.properties.audioPlayer.volume = this.currentlyPlayingAudioVolumePercentage;
            }
        },
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
        getAlbumByRoute({ category, subcategory, album }) {
            if (subcategory !== null) {
                return this.categories[category].subcategoies[subcategory].albumContent.albums[album];
            }

            return this.categories[category].albumContent.albums[album];
        }
    },
});