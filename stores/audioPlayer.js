import { defineStore } from "pinia";

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
                title: "Hegedűverseny",
                description: ""
            },
            src: "/songs/composer/classic/Violin_Concerto.mp3",
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
                title: "Zongoraverseny",
                description: ""
            },
            src: "/songs/composer/classic/Piano_Concerto.mp3",
            video: "https://www.youtube.com/watch?v=3Tpobd5Fn80"
        },
        {
            type: CONTENT_TYPE.AUDIO,
            en: {
                author: "Tamás Pánczél",
                title: "Transfigurations, Budafok Dohnány Orchestra, concertmaster: Gábor Berán",
                description: ""
            },
            hu: {
                author: "Pánczél Tamás",
                title: "Átváltozások, Budafoki Dohnányi Zenekar, Koncertmester: Berán Gábor",
                description: ""
            },
            src: "/songs/composer/classic/Atvaltozasok.mp3"
        },
        {
            type: CONTENT_TYPE.AUDIO,
            en: {
                author: "Tamás Pánczél",
                title: "Divertimento Concertante, Budafok Dohnány Orchestra, conductor: Gábor Hollerung",
                description: ""
            },
            hu: {
                author: "Pánczél Tamás",
                title: "Divertimento Concertante, Budafoki Dohnányi Zenekar, vezényel: Hollerung Gábor",
                description: ""
            },
            src: "/songs/composer/classic/Divertimento_Concertante.mp3"
        },
        {
            type: CONTENT_TYPE.AUDIO,
            en: {
                author: "Tamás Pánczél",
                title: "Klezmer Suite full peace (CD recording), Budafok Dohnány Orchestra, conductor: Gábor Hollerung",
                description: ""
            },
            hu: {
                author: "Pánczél Tamás",
                title: "Klezmer Szvit egész mű (CD felvétel), Budafoki Dohnányi Zenekar, vezényel: Hollerung Gábor",
                description: ""
            },
            src: "/songs/composer/classic/Klezmer_Szvit.mp3"
        },
        {
            type: CONTENT_TYPE.AUDIO_WITH_VIDEO,
            en: {
                author: "Tamás Pánczél",
                title: "Klezmer Suite 4. movement (concert recording)",
                description: ""
            },
            hu: {
                author: "Pánczél Tamás",
                title: "Klezmer Szvit 4. tétel (koncert felvétel)",
                description: ""
            },
            src: "/songs/composer/classic/Klezmer_Suite.mp3",
            video: "https://www.youtube.com/watch?v=RZtEK81213U"
        },
        {
            type: CONTENT_TYPE.AUDIO,
            en: {
                author: "Tamás Pánczél",
                title: "Hymn of Love - incidental music, Budafok Dohnány Orchestra, conductor: Dávid Kanyó",
                description: ""
            },
            hu: {
                author: "Pánczél Tamás",
                title: "Szeretet himnusza - kísérőzene, Budafoki Dohnányi Zenekar, vezényel: Kanyó Dávid",
                description: ""
            },
            src: "/songs/composer/gospel/Szeretet_himnusz.mp3"
        },
        {
            type: CONTENT_TYPE.AUDIO,
            en: {
                author: "Tamás Pánczél",
                title: "Passacaglia, Budafok Dohnány Orchestra, conductor: Howard Williams",
                description: ""
            },
            hu: {
                author: "Pánczél Tamás",
                title: "Passacaglia, Budafoki Dohnányi Zenekar, vezényel: Howard Williams",
                description: ""
            },
            src: "/songs/composer/classic/Passacaglia.mp3"
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
            src: "/songs/composer/classic/Psalm_29.mp3"
        },
        {
            type: CONTENT_TYPE.AUDIO,
            en: {
                author: "Tamás Pánczél",
                title: "Let me Live - air for soprano",
                description: ""
            },
            hu: {
                author: "Pánczél Tamás",
                title: "Hadd éljek! - szoprán ária",
                description: ""
            },
            src: "/songs/composer/classic/Hadd_eljek.mp3"
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
            src: "/songs/composer/classic/Fuvosotos.mp3"
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
            src: "/songs/composer/classic/Pikolo_eletkepek.mp3",
            video: "https://www.youtube.com/watch?v=bTg4-bp8DKU"
        },
    ],
    "composer-classic-composerParticipate": [
        {
            type: CONTENT_TYPE.AUDIO_WITH_VIDEO,
            en: {
                author: "Tamás Pánczél",
                title: "The Prayer of a Broken Heart",
                description: ""
            },
            hu: {
                author: "Pánczél Tamás",
                title: "Egy megtört szív imája",
                description: ""
            },
            src: "/songs/composer/classic/Egy_megtort_sziv_imaja.mp3",
            video: "https://www.youtube.com/watch?v=ewOjPIhHAhM"
        },
        {
            type: CONTENT_TYPE.AUDIO_WITH_VIDEO,
            en: {
                author: "Tamás Pánczél",
                title: "Reminiscences in the Rocking Chair",
                description: ""
            },
            hu: {
                author: "Pánczél Tamás",
                title: "Emlékek a hintaszékben",
                description: ""
            },
            src: "/songs/composer/classic/Emlekek_a_hintaszékben.mp3",
            video: "https://www.youtube.com/watch?v=KN_wiPNI4HM"
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
            src: "/songs/composer/other_composers_style/cisz_moll_fuga_a_la_Bach.mp3",
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
            src: "/songs/composer/other_composers_style/Chaconne_baroque.mp3",
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
            src: "/songs/composer/other_composers_style/Fuga_a_4_voci_a_la_Bach.mp3",
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
            src: "/songs/composer/other_composers_style/Requiem_Lacrymosa_and_Amen_fugue.mp3",
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
            src: "/songs/composer/other_composers_style/AMEN_FUGUE_to_Mozarts_Requiem.mp3",
            video: "https://www.youtube.com/watch?v=s3qfyOAARdc"
        },
        {
            type: CONTENT_TYPE.AUDIO_WITH_VIDEO,
            en: {
                author: "Tamás Pánczél",
                title: "Mozart - Requiem completion (full peace)",
                description: ""
            },
            hu: {
                author: "Pánczél Tamás",
                title: "Mozart - Requiem (teljes)",
                description: ""
            },
            src: "/songs/composer/other_composers_style/Mozart_Requiem_full_peace_completion.mp3",
            video: "https://www.youtube.com/watch?v=BrGSruAOKyg"
        }
    ],
    "composer-others-Liszt": [
        {
            type: CONTENT_TYPE.AUDIO_WITH_VIDEO,
            en: {
                author: "Tamás Pánczél",
                title: "Liszt: Les Quatre Élémens - instrumentations",
                description: ""
            },
            hu: {
                author: "Pánczél Tamás",
                title: "Liszt: Les Quatre Élémens - hangszerelés",
                description: ""
            },
            src: "/songs/composer/other_composers_style/Les_quatre_élémens.mp3",
            video: "https://www.youtube.com/watch?v=c6KBV3-ljEw&t=1s"
        },
    ],
    "composer-gospel-all": [
        {
            type: CONTENT_TYPE.AUDIO,
            en: {
                author: "Tamás Pánczél",
                title: "Thank your for being here (Gabriella Létay Kiss - singing)",
                description: ""
            },
            hu: {
                author: "Pánczél Tamás",
                title: "Köszönöm hogy vagy (Létay Kiss Gabriella - ének)",
                description: ""
            },
            src: "/songs/composer/gospel/Letai_Kis_Gabi_Koszonom_hogy_vagy.mp3",
        },
        {
            type: CONTENT_TYPE.AUDIO,
            en: {
                author: "Martin Smith",
                title: "Did You Feel the Mountains Tremble? (instrumental, symphonyc orchestral version)",
                description: ""
            },
            hu: {
                author: "Martin Smith",
                title: "Megrendülnek mind a hegyek... (szimfonikus zenekari átirat: Pánczél Tamás)",
                description: ""
            },
            src: "/songs/composer/gospel/Fejes_Zolies_es_a_Vidam_Szimfonikusok.mp3",
        },
        {
            type: CONTENT_TYPE.AUDIO_WITH_VIDEO,
            en: {
                author: "Tamás Pánczél",
                title: "Hymn of Love",
                description: ""
            },
            hu: {
                author: "Pánczél Tamás",
                title: "Szeretet himnusza",
                description: ""
            },
            src: "/songs/composer/gospel/Szeretet_himnusza.mp3",
            video: "https://www.youtube.com/watch?v=NpmSxHjmuzw",
            onlyLanguages: ["hu"]
        },
        {
            type: CONTENT_TYPE.AUDIO_WITH_VIDEO,
            en: {
                author: "Tamás Pánczél",
                title: "Hymn of Love",
                description: ""
            },
            hu: {
                author: "Pánczél Tamás",
                title: "Szeretet himnusza",
                description: ""
            },
            src: "/songs/composer/gospel/Szeretet_himnusza.mp3",
            video: "https://www.youtube.com/watch?v=i7q7jP-djqI",
            onlyLanguages: ["en"]
        },
    ],
    "violinist-J_S_Bach": [
        {
            type: CONTENT_TYPE.AUDIO,
            en: {
                author: "J. S. Bach",
                title: "Largo from the C major sonata, Tamás Pánczél violin",
                description: ""
            },
            hu: {
                author: "J. S. Bach",
                title: "Largo a C dúr szólószonátából, Pánczél Tamás hegedű",
                description: ""
            },
            src: "/songs/violinist/Bach_Largo.mp3"
        },
        {
            type: CONTENT_TYPE.AUDIO,
            en: {
                author: "J. S. Bach",
                title: "Fuge (extract) from g-minor, Tamás Pánczél violin",
                description: ""
            },
            hu: {
                author: "J. S. Bach",
                title: "Fúga (részlet) g-moll szonátából, Pánczél Tamás hegedű",
                description: ""
            },
            src: "/songs/violinist/gmollfugareszlet.mp3"
        },
    ],
    "conductor-all": [
        {
            type: CONTENT_TYPE.AUDIO_WITH_VIDEO,
            en: {
                author: "Antonín Dvořák",
                title: "IX. (New world) symphony",
                description: ""
            },
            hu: {
                author: "Antonín Dvořák",
                title: "IX. (Új világ) szimfónia",
                description: ""
            },
            src: "/songs/conductor/Dvorak_IX_uj_vilag_szimfonia.mp3",
            video: "https://www.youtube.com/watch?v=vZqGJ2_cAr4"
        },
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
                    albumOrder: ["orchestra", "vocal", "chamber", "composerParticipate"],
                    albums: {
                        orchestra: {
                            img: "/images/album_cover/zenekari_muvek.webp",
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
                            img: "/images/album_cover/vokalis_muvek.webp",
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
                            img: "/images/album_cover/kamara_muvek.webp",
                            title: {
                                en: "Chamber compositions",
                                hu: "Kamara művek"
                            },
                            description: {
                                en: "Chamber compositions",
                                hu: "Kamara művek"
                            },
                            content: categoryContent["composer-classic-chamber"],
                        },
                        composerParticipate: {
                            img: "/images/album_cover/szerzo_kozremukodik.webp",
                            title: {
                                en: "The composer participates",
                                hu: "A szerző közreműködik"
                            },
                            description: {
                                en: "The composer participates",
                                hu: "A szerző közreműködik"
                            },
                            content: categoryContent["composer-classic-composerParticipate"],
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
                            img: "/images/album_cover/cover_placeholder.jpg",
                            title: {
                                en: "à la Bach",
                                hu: "à la Bach"
                            },
                            description: {
                                en: "à la Bach",
                                hu: "à la Bach"
                            },
                            content: categoryContent["composer-others-Bach"],
                        },
                        Mozart: {
                            img: "/images/album_cover/cover_placeholder.jpg",
                            title: {
                                en: "Mozart's Requiem completions",
                                hu: "Mozart Requiem kiegészítések"
                            },
                            description: {
                                en: "Mozart's Requiem completions",
                                hu: "Mozart Requiem kiegészítések"
                            },
                            content: categoryContent["composer-others-Mozart"],
                        },
                        Liszt: {
                            img: "/images/album_cover/cover_placeholder.jpg",
                            title: {
                                en: "Liszt: Les Quatre Élémens - instrumentations",
                                hu: "Liszt: Les Quatre Élémens - hangszerelés"
                            },
                            description: {
                                en: "Liszt: Les Quatre Élémens - instrumentations",
                                hu: "Liszt: Les Quatre Élémens - hangszerelés"
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
                            img: "/images/album_cover/cover_placeholder.jpg",
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
        albumContent: {
            albumOrder: ["J_S_Bach"],
            albums: {
                J_S_Bach: {
                    img: "/images/album_cover/cover_placeholder.jpg",
                    title: {
                        en: "J.S. Bach",
                        hu: "J.S. Bach"
                    },
                    description: {
                        en: "J.S. Bach",
                        hu: "J.S. Bach"
                    },
                    content: categoryContent["violinist-J_S_Bach"],
                }
            }
        }
    },
    conductor: {
        albumContent: {
            albumOrder: ["all"],
            albums: {
                all: {
                    img: "/images/album_cover/cover_placeholder.jpg",
                    title: {
                        en: "All",
                        hu: "Összes"
                    },
                    description: {
                        en: "All",
                        hu: "Összes"
                    },
                    content: categoryContent["conductor-all"],
                }
            }
        }
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
        getCategoryOrSubcategoryByRoute(category, subcategory) {
            if (subcategory !== null) {
                return this.categories[category].subcategoies[subcategory];
            }

            return this.categories[category];
        },
        getAlbumByRoute({ category, subcategory, album }) {
            return this.getCategoryOrSubcategoryByRoute(category, subcategory).albumContent.albums[album];
        }
    },
});