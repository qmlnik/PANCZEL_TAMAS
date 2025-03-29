<template>
    <section class="p-4 d-flex align-items-center flex-column">
        <div class="bg-light p-3 mb-4 fs-6 rounded">
            <h3 class="mb-3 text-primary text-center">{{ $t("categories") }}</h3>
            <div class="d-flex justify-content-center flex-wrap" style="gap: 0.5rem;">
                <div
                    v-for="songCategory in songCategoryOrder"
                    :key="songCategory"
                    :class="[songCategory === currentCategory ? 'category-selected' : null]"
                    class="song-category p-3 rounded border border-dark"
                    @click="changeCategory(songCategory)"
                >
                    {{ songCategories[songCategory].title[$i18n.locale] }}
                </div>
            </div>
        </div>
        <div class="text-center fs-2 text-primary mb-4 fw-bold">{{ songCategories[currentCategory].title[$i18n.locale] }}</div>
        <ClientOnly>
            <div
                v-for="({ [$i18n.locale]: { author, title, description }, src, cover }, index) in songCategories[currentCategory].songs"
                :key="`${author}-${title}`"
                :class="[index < songCategories[currentCategory].songs.length - 1 ? 'mb-3' : null]"
                class="w-100"
            >
                <ScrollFadeIn>
                    <AudioPlayer
                        ref="songs"
                        :author="author"
                        :title="title"
                        :src="src"
                        :cover="cover"
                        :description="description"
                        @play="stopAllAudio"
                    />
                </ScrollFadeIn>
            </div>
        </ClientOnly>
    </section>
</template>

<script>
import Letai_Kis_Gabi_Koszonom_hogy_vagy from "~/assets/songs/ghospel/Letai_Kis_Gabi_Koszonom_hogy_vagy.mp3";
import Szeretet_himnusz from "~/assets/songs/ghospel/Szeretet_himnusz.mp3";
import Fejes_Zolies_es_a_Vidam_Szimfonikusok from "~/assets/songs/ghospel/Fejes_Zolies_es_a_Vidam_Szimfonikusok.mp3";

import Atvaltozasok from "~/assets/songs/classic/Atvaltozasok.mp3";
import Divertimento_Concertante from "~/assets/songs/classic/Divertimento_Concertante.mp3";
import Hadd_eljek from "~/assets/songs/classic/Hadd_eljek.mp3";
import Passacagila from "~/assets/songs/classic/Passacagila.mp3";
import Psalm_29 from "~/assets/songs/classic/Psalm_29.mp3";

import Fuvosotos_1 from "~/assets/songs/classic_wind_quintet/Fuvosotos_1.mp3";
import Fuvosotos_2 from "~/assets/songs/classic_wind_quintet/Fuvosotos_2.mp3";
import Fuvosotos_3 from "~/assets/songs/classic_wind_quintet/Fuvosotos_3.mp3";
import Fuvosotos_4 from "~/assets/songs/classic_wind_quintet/Fuvosotos_4.mp3";

import Klezmer_16 from "~/assets/songs/classic_klezmer_szvit/16.mp3";
import Klezmer_17 from "~/assets/songs/classic_klezmer_szvit/17.mp3";
import Klezmer_18 from "~/assets/songs/classic_klezmer_szvit/18.mp3";
import Klezmer_19 from "~/assets/songs/classic_klezmer_szvit/19.mp3";

import Bach_Largo from "~/assets/songs/other_composers_style/Bach_Largo.mp3";

import Létai_Kis_Gabi from "~/assets/images/Létai_Kis_Gabi.jpg";

export default {
    data() {
        return {
            currentCategory: "ghospel",
            songCategoryOrder: ["ghospel", "classic", "classicWindQuintet", "classicKlezmerSzvit", "anotherComposerStyle"],
            songCategories: {
                ghospel: {
                    title: {
                        en: "Ghospel",
                        hu: "Ghospel"
                    },
                    songs: [
                        {
                            en: {
                                author: "Tamas Panczel",
                                title: "Köszönöm hogy vagy (Létai Kis Gabi)",
                                description: "a long long long long long long long long long long long long description"
                            },
                            hu: {
                                author: "Pánczél Tamás",
                                title: "Köszönöm hogy vagy (Létai Kis Gabi)",
                                description: "egy hosszú hosszú hosszú hosszú hosszú hosszú hosszú hosszúleírás"
                            },
                            src: Letai_Kis_Gabi_Koszonom_hogy_vagy,
                            cover: Létai_Kis_Gabi
                        },
                        {
                            en: {
                                author: "Tamas Panczel",
                                title: "Szeretet himnusz",
                                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
                            },
                            hu: {
                                author: "Pánczél Tamás",
                                title: "Szeretet himnusz",
                                description: "Lórum ipse száran, jogán, de a medó besítő, a főzés pedig egészen gyűjtő pali. A válka tömbjére üvözölte: a bibecske csakis a ferges kozás zölését kodja bőgőnek, mégpedig szigorúan a korábban boros nésetlevények között. Jelletesség handék adódta: a bibecske nem feselyedi a jáló foránok bűnök, de mert a szajlomta tapált kozás szerdes lecskenyelése a ferges szenség lenne, és mert a mozás részéről erre nem ingol mozmányos laklajtás, a szelik után a bibecske egyedül a kajos ferges mozás zölésében gyódja a csajas cseredet. Tárdóságban alás pitázásra pésedik egy padt törnyő. A röveren jadza halát fecselő dzsere alapján legalább két padt törnyőre kodhatna vezeget, ezzel szemben a ványos ferges csinylós mázásnak sem kajos mozása, kozása, sem savasága nincs. Ezek zöléséért a rögés óta zsázik az egyelőre pofás tökötő. Teje várhatóan az erej folyamán fajzja a hanyászámot, mert ezt – a sommás csitlet fókáit komolyan áttanulmányozva és a ható tancs kalgását méltányolva – szükségszerűen folontosnak gyódja. Ezt mezte asztompában mályozás lávár, a radom kartó süvezése, miután sommás küldeletével, empő pegással ingált."
                            },
                            src: Szeretet_himnusz,
                            cover: null
                        },
                        {
                            en: {
                                author: "Tamas Panczel",
                                title: "Fejes Zoli és es a Vidám Szimfónikusok",
                                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
                            },
                            hu: {
                                author: "Pánczél Tamás",
                                title: "Fejes Zoli és es a Vidám Szimfónikusok",
                                description: "Lórum ipse száran, jogán, de a medó besítő, a főzés pedig egészen gyűjtő pali. A válka tömbjére üvözölte: a bibecske csakis a ferges kozás zölését kodja bőgőnek, mégpedig szigorúan a korábban boros nésetlevények között. Jelletesség handék adódta: a bibecske nem feselyedi a jáló foránok bűnök, de mert a szajlomta tapált kozás szerdes lecskenyelése a ferges szenség lenne, és mert a mozás részéről erre nem ingol mozmányos laklajtás, a szelik után a bibecske egyedül a kajos ferges mozás zölésében gyódja a csajas cseredet. Tárdóságban alás pitázásra pésedik egy padt törnyő. A röveren jadza halát fecselő dzsere alapján legalább két padt törnyőre kodhatna vezeget, ezzel szemben a ványos ferges csinylós mázásnak sem kajos mozása, kozása, sem savasága nincs. Ezek zöléséért a rögés óta zsázik az egyelőre pofás tökötő. Teje várhatóan az erej folyamán fajzja a hanyászámot, mert ezt – a sommás csitlet fókáit komolyan áttanulmányozva és a ható tancs kalgását méltányolva – szükségszerűen folontosnak gyódja. Ezt mezte asztompában mályozás lávár, a radom kartó süvezése, miután sommás küldeletével, empő pegással ingált."
                            },
                            src: Fejes_Zolies_es_a_Vidam_Szimfonikusok,
                            cover: null
                        }
                    ]
                },
                classic: {
                    title: {
                        en: "Classic",
                        hu: "Klasszikus"
                    },
                    songs: [
                        {
                            en: {
                                author: "Tamas Panczel",
                                title: "Átváltozások",
                                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
                            },
                            hu: {
                                author: "Pánczél Tamás",
                                title: "Átváltozások",
                                description: "Lórum ipse száran, jogán, de a medó besítő, a főzés pedig egészen gyűjtő pali. A válka tömbjére üvözölte: a bibecske csakis a ferges kozás zölését kodja bőgőnek, mégpedig szigorúan a korábban boros nésetlevények között. Jelletesség handék adódta: a bibecske nem feselyedi a jáló foránok bűnök, de mert a szajlomta tapált kozás szerdes lecskenyelése a ferges szenség lenne, és mert a mozás részéről erre nem ingol mozmányos laklajtás, a szelik után a bibecske egyedül a kajos ferges mozás zölésében gyódja a csajas cseredet. Tárdóságban alás pitázásra pésedik egy padt törnyő. A röveren jadza halát fecselő dzsere alapján legalább két padt törnyőre kodhatna vezeget, ezzel szemben a ványos ferges csinylós mázásnak sem kajos mozása, kozása, sem savasága nincs. Ezek zöléséért a rögés óta zsázik az egyelőre pofás tökötő. Teje várhatóan az erej folyamán fajzja a hanyászámot, mert ezt – a sommás csitlet fókáit komolyan áttanulmányozva és a ható tancs kalgását méltányolva – szükségszerűen folontosnak gyódja. Ezt mezte asztompában mályozás lávár, a radom kartó süvezése, miután sommás küldeletével, empő pegással ingált."
                            },
                            src: Atvaltozasok,
                            cover: null
                        },
                        {
                            en: {
                                author: "Tamas Panczel",
                                title: "Divertimento Concertante",
                                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
                            },
                            hu: {
                                author: "Pánczél Tamás",
                                title: "Divertimento Concertante",
                                description: "Lórum ipse száran, jogán, de a medó besítő, a főzés pedig egészen gyűjtő pali. A válka tömbjére üvözölte: a bibecske csakis a ferges kozás zölését kodja bőgőnek, mégpedig szigorúan a korábban boros nésetlevények között. Jelletesség handék adódta: a bibecske nem feselyedi a jáló foránok bűnök, de mert a szajlomta tapált kozás szerdes lecskenyelése a ferges szenség lenne, és mert a mozás részéről erre nem ingol mozmányos laklajtás, a szelik után a bibecske egyedül a kajos ferges mozás zölésében gyódja a csajas cseredet. Tárdóságban alás pitázásra pésedik egy padt törnyő. A röveren jadza halát fecselő dzsere alapján legalább két padt törnyőre kodhatna vezeget, ezzel szemben a ványos ferges csinylós mázásnak sem kajos mozása, kozása, sem savasága nincs. Ezek zöléséért a rögés óta zsázik az egyelőre pofás tökötő. Teje várhatóan az erej folyamán fajzja a hanyászámot, mert ezt – a sommás csitlet fókáit komolyan áttanulmányozva és a ható tancs kalgását méltányolva – szükségszerűen folontosnak gyódja. Ezt mezte asztompában mályozás lávár, a radom kartó süvezése, miután sommás küldeletével, empő pegással ingált."
                            },
                            src: Divertimento_Concertante,
                            cover: null
                        },
                        {
                            en: {
                                author: "Tamas Panczel",
                                title: "Hadd éljek",
                                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
                            },
                            hu: {
                                author: "Pánczél Tamás",
                                title: "Hadd éljek",
                                description: "Lórum ipse száran, jogán, de a medó besítő, a főzés pedig egészen gyűjtő pali. A válka tömbjére üvözölte: a bibecske csakis a ferges kozás zölését kodja bőgőnek, mégpedig szigorúan a korábban boros nésetlevények között. Jelletesség handék adódta: a bibecske nem feselyedi a jáló foránok bűnök, de mert a szajlomta tapált kozás szerdes lecskenyelése a ferges szenség lenne, és mert a mozás részéről erre nem ingol mozmányos laklajtás, a szelik után a bibecske egyedül a kajos ferges mozás zölésében gyódja a csajas cseredet. Tárdóságban alás pitázásra pésedik egy padt törnyő. A röveren jadza halát fecselő dzsere alapján legalább két padt törnyőre kodhatna vezeget, ezzel szemben a ványos ferges csinylós mázásnak sem kajos mozása, kozása, sem savasága nincs. Ezek zöléséért a rögés óta zsázik az egyelőre pofás tökötő. Teje várhatóan az erej folyamán fajzja a hanyászámot, mert ezt – a sommás csitlet fókáit komolyan áttanulmányozva és a ható tancs kalgását méltányolva – szükségszerűen folontosnak gyódja. Ezt mezte asztompában mályozás lávár, a radom kartó süvezése, miután sommás küldeletével, empő pegással ingált."
                            },
                            src: Hadd_eljek,
                            cover: null
                        },
                        {
                            en: {
                                author: "Tamas Panczel",
                                title: "Passacagila",
                                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
                            },
                            hu: {
                                author: "Pánczél Tamás",
                                title: "Passacagila",
                                description: "Lórum ipse száran, jogán, de a medó besítő, a főzés pedig egészen gyűjtő pali. A válka tömbjére üvözölte: a bibecske csakis a ferges kozás zölését kodja bőgőnek, mégpedig szigorúan a korábban boros nésetlevények között. Jelletesség handék adódta: a bibecske nem feselyedi a jáló foránok bűnök, de mert a szajlomta tapált kozás szerdes lecskenyelése a ferges szenség lenne, és mert a mozás részéről erre nem ingol mozmányos laklajtás, a szelik után a bibecske egyedül a kajos ferges mozás zölésében gyódja a csajas cseredet. Tárdóságban alás pitázásra pésedik egy padt törnyő. A röveren jadza halát fecselő dzsere alapján legalább két padt törnyőre kodhatna vezeget, ezzel szemben a ványos ferges csinylós mázásnak sem kajos mozása, kozása, sem savasága nincs. Ezek zöléséért a rögés óta zsázik az egyelőre pofás tökötő. Teje várhatóan az erej folyamán fajzja a hanyászámot, mert ezt – a sommás csitlet fókáit komolyan áttanulmányozva és a ható tancs kalgását méltányolva – szükségszerűen folontosnak gyódja. Ezt mezte asztompában mályozás lávár, a radom kartó süvezése, miután sommás küldeletével, empő pegással ingált."
                            },
                            src: Passacagila,
                            cover: null
                        },
                        {
                            en: {
                                author: "Tamas Panczel",
                                title: "Psalm 29",
                                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
                            },
                            hu: {
                                author: "Pánczél Tamás",
                                title: "Psalm 29",
                                description: "Lórum ipse száran, jogán, de a medó besítő, a főzés pedig egészen gyűjtő pali. A válka tömbjére üvözölte: a bibecske csakis a ferges kozás zölését kodja bőgőnek, mégpedig szigorúan a korábban boros nésetlevények között. Jelletesség handék adódta: a bibecske nem feselyedi a jáló foránok bűnök, de mert a szajlomta tapált kozás szerdes lecskenyelése a ferges szenség lenne, és mert a mozás részéről erre nem ingol mozmányos laklajtás, a szelik után a bibecske egyedül a kajos ferges mozás zölésében gyódja a csajas cseredet. Tárdóságban alás pitázásra pésedik egy padt törnyő. A röveren jadza halát fecselő dzsere alapján legalább két padt törnyőre kodhatna vezeget, ezzel szemben a ványos ferges csinylós mázásnak sem kajos mozása, kozása, sem savasága nincs. Ezek zöléséért a rögés óta zsázik az egyelőre pofás tökötő. Teje várhatóan az erej folyamán fajzja a hanyászámot, mert ezt – a sommás csitlet fókáit komolyan áttanulmányozva és a ható tancs kalgását méltányolva – szükségszerűen folontosnak gyódja. Ezt mezte asztompában mályozás lávár, a radom kartó süvezése, miután sommás küldeletével, empő pegással ingált."
                            },
                            src: Psalm_29,
                            cover: null
                        }
                    ]
                },
                classicWindQuintet: {
                    title: {
                        en: "Classic - Wind quintet",
                        hu: "Klasszikus - Fúvós ötös"
                    },
                    songs: [
                        {
                            en: {
                                author: "Tamas Panczel",
                                title: "Fuvosotos 1",
                                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
                            },
                            hu: {
                                author: "Pánczél Tamás",
                                title: "Fuvosotos 1",
                                description: "Lórum ipse száran, jogán, de a medó besítő, a főzés pedig egészen gyűjtő pali. A válka tömbjére üvözölte: a bibecske csakis a ferges kozás zölését kodja bőgőnek, mégpedig szigorúan a korábban boros nésetlevények között. Jelletesség handék adódta: a bibecske nem feselyedi a jáló foránok bűnök, de mert a szajlomta tapált kozás szerdes lecskenyelése a ferges szenség lenne, és mert a mozás részéről erre nem ingol mozmányos laklajtás, a szelik után a bibecske egyedül a kajos ferges mozás zölésében gyódja a csajas cseredet. Tárdóságban alás pitázásra pésedik egy padt törnyő. A röveren jadza halát fecselő dzsere alapján legalább két padt törnyőre kodhatna vezeget, ezzel szemben a ványos ferges csinylós mázásnak sem kajos mozása, kozása, sem savasága nincs. Ezek zöléséért a rögés óta zsázik az egyelőre pofás tökötő. Teje várhatóan az erej folyamán fajzja a hanyászámot, mert ezt – a sommás csitlet fókáit komolyan áttanulmányozva és a ható tancs kalgását méltányolva – szükségszerűen folontosnak gyódja. Ezt mezte asztompában mályozás lávár, a radom kartó süvezése, miután sommás küldeletével, empő pegással ingált."
                            },
                            src: Fuvosotos_1,
                            cover: null
                        },
                        {
                            en: {
                                author: "Tamas Panczel",
                                title: "Fuvosotos 2",
                                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
                            },
                            hu: {
                                author: "Pánczél Tamás",
                                title: "Fuvosotos 2",
                                description: "Lórum ipse száran, jogán, de a medó besítő, a főzés pedig egészen gyűjtő pali. A válka tömbjére üvözölte: a bibecske csakis a ferges kozás zölését kodja bőgőnek, mégpedig szigorúan a korábban boros nésetlevények között. Jelletesség handék adódta: a bibecske nem feselyedi a jáló foránok bűnök, de mert a szajlomta tapált kozás szerdes lecskenyelése a ferges szenség lenne, és mert a mozás részéről erre nem ingol mozmányos laklajtás, a szelik után a bibecske egyedül a kajos ferges mozás zölésében gyódja a csajas cseredet. Tárdóságban alás pitázásra pésedik egy padt törnyő. A röveren jadza halát fecselő dzsere alapján legalább két padt törnyőre kodhatna vezeget, ezzel szemben a ványos ferges csinylós mázásnak sem kajos mozása, kozása, sem savasága nincs. Ezek zöléséért a rögés óta zsázik az egyelőre pofás tökötő. Teje várhatóan az erej folyamán fajzja a hanyászámot, mert ezt – a sommás csitlet fókáit komolyan áttanulmányozva és a ható tancs kalgását méltányolva – szükségszerűen folontosnak gyódja. Ezt mezte asztompában mályozás lávár, a radom kartó süvezése, miután sommás küldeletével, empő pegással ingált."
                            },
                            src: Fuvosotos_2,
                            cover: null
                        },
                        {
                            en: {
                                author: "Tamas Panczel",
                                title: "Fuvosotos 3",
                                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
                            },
                            hu: {
                                author: "Pánczél Tamás",
                                title: "Fuvosotos 3",
                                description: "Lórum ipse száran, jogán, de a medó besítő, a főzés pedig egészen gyűjtő pali. A válka tömbjére üvözölte: a bibecske csakis a ferges kozás zölését kodja bőgőnek, mégpedig szigorúan a korábban boros nésetlevények között. Jelletesség handék adódta: a bibecske nem feselyedi a jáló foránok bűnök, de mert a szajlomta tapált kozás szerdes lecskenyelése a ferges szenség lenne, és mert a mozás részéről erre nem ingol mozmányos laklajtás, a szelik után a bibecske egyedül a kajos ferges mozás zölésében gyódja a csajas cseredet. Tárdóságban alás pitázásra pésedik egy padt törnyő. A röveren jadza halát fecselő dzsere alapján legalább két padt törnyőre kodhatna vezeget, ezzel szemben a ványos ferges csinylós mázásnak sem kajos mozása, kozása, sem savasága nincs. Ezek zöléséért a rögés óta zsázik az egyelőre pofás tökötő. Teje várhatóan az erej folyamán fajzja a hanyászámot, mert ezt – a sommás csitlet fókáit komolyan áttanulmányozva és a ható tancs kalgását méltányolva – szükségszerűen folontosnak gyódja. Ezt mezte asztompában mályozás lávár, a radom kartó süvezése, miután sommás küldeletével, empő pegással ingált."
                            },
                            src: Fuvosotos_3,
                            cover: null
                        },
                        {
                            en: {
                                author: "Tamas Panczel",
                                title: "Fuvosotos 4",
                                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
                            },
                            hu: {
                                author: "Pánczél Tamás",
                                title: "Fuvosotos 4",
                                description: "Lórum ipse száran, jogán, de a medó besítő, a főzés pedig egészen gyűjtő pali. A válka tömbjére üvözölte: a bibecske csakis a ferges kozás zölését kodja bőgőnek, mégpedig szigorúan a korábban boros nésetlevények között. Jelletesség handék adódta: a bibecske nem feselyedi a jáló foránok bűnök, de mert a szajlomta tapált kozás szerdes lecskenyelése a ferges szenség lenne, és mert a mozás részéről erre nem ingol mozmányos laklajtás, a szelik után a bibecske egyedül a kajos ferges mozás zölésében gyódja a csajas cseredet. Tárdóságban alás pitázásra pésedik egy padt törnyő. A röveren jadza halát fecselő dzsere alapján legalább két padt törnyőre kodhatna vezeget, ezzel szemben a ványos ferges csinylós mázásnak sem kajos mozása, kozása, sem savasága nincs. Ezek zöléséért a rögés óta zsázik az egyelőre pofás tökötő. Teje várhatóan az erej folyamán fajzja a hanyászámot, mert ezt – a sommás csitlet fókáit komolyan áttanulmányozva és a ható tancs kalgását méltányolva – szükségszerűen folontosnak gyódja. Ezt mezte asztompában mályozás lávár, a radom kartó süvezése, miután sommás küldeletével, empő pegással ingált."
                            },
                            src: Fuvosotos_4,
                            cover: null
                        }
                    ]
                },
                classicKlezmerSzvit: {
                    title: {
                        en: "Classic - Klezmer Szvit",
                        hu: "Klasszikus - Klezmer Szvit"
                    },
                    songs: [
                        {
                            en: {
                                author: "Tamas Panczel",
                                title: "16",
                                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
                            },
                            hu: {
                                author: "Pánczél Tamás",
                                title: "16",
                                description: "Lórum ipse száran, jogán, de a medó besítő, a főzés pedig egészen gyűjtő pali. A válka tömbjére üvözölte: a bibecske csakis a ferges kozás zölését kodja bőgőnek, mégpedig szigorúan a korábban boros nésetlevények között. Jelletesség handék adódta: a bibecske nem feselyedi a jáló foránok bűnök, de mert a szajlomta tapált kozás szerdes lecskenyelése a ferges szenség lenne, és mert a mozás részéről erre nem ingol mozmányos laklajtás, a szelik után a bibecske egyedül a kajos ferges mozás zölésében gyódja a csajas cseredet. Tárdóságban alás pitázásra pésedik egy padt törnyő. A röveren jadza halát fecselő dzsere alapján legalább két padt törnyőre kodhatna vezeget, ezzel szemben a ványos ferges csinylós mázásnak sem kajos mozása, kozása, sem savasága nincs. Ezek zöléséért a rögés óta zsázik az egyelőre pofás tökötő. Teje várhatóan az erej folyamán fajzja a hanyászámot, mert ezt – a sommás csitlet fókáit komolyan áttanulmányozva és a ható tancs kalgását méltányolva – szükségszerűen folontosnak gyódja. Ezt mezte asztompában mályozás lávár, a radom kartó süvezése, miután sommás küldeletével, empő pegással ingált."
                            },
                            src: Klezmer_16,
                            cover: null
                        },
                        {
                            en: {
                                author: "Tamas Panczel",
                                title: "17",
                                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
                            },
                            hu: {
                                author: "Pánczél Tamás",
                                title: "17",
                                description: "Lórum ipse száran, jogán, de a medó besítő, a főzés pedig egészen gyűjtő pali. A válka tömbjére üvözölte: a bibecske csakis a ferges kozás zölését kodja bőgőnek, mégpedig szigorúan a korábban boros nésetlevények között. Jelletesség handék adódta: a bibecske nem feselyedi a jáló foránok bűnök, de mert a szajlomta tapált kozás szerdes lecskenyelése a ferges szenség lenne, és mert a mozás részéről erre nem ingol mozmányos laklajtás, a szelik után a bibecske egyedül a kajos ferges mozás zölésében gyódja a csajas cseredet. Tárdóságban alás pitázásra pésedik egy padt törnyő. A röveren jadza halát fecselő dzsere alapján legalább két padt törnyőre kodhatna vezeget, ezzel szemben a ványos ferges csinylós mázásnak sem kajos mozása, kozása, sem savasága nincs. Ezek zöléséért a rögés óta zsázik az egyelőre pofás tökötő. Teje várhatóan az erej folyamán fajzja a hanyászámot, mert ezt – a sommás csitlet fókáit komolyan áttanulmányozva és a ható tancs kalgását méltányolva – szükségszerűen folontosnak gyódja. Ezt mezte asztompában mályozás lávár, a radom kartó süvezése, miután sommás küldeletével, empő pegással ingált."
                            },
                            src: Klezmer_17,
                            cover: null
                        },
                        {
                            en: {
                                author: "Tamas Panczel",
                                title: "18",
                                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
                            },
                            hu: {
                                author: "Pánczél Tamás",
                                title: "18",
                                description: "Lórum ipse száran, jogán, de a medó besítő, a főzés pedig egészen gyűjtő pali. A válka tömbjére üvözölte: a bibecske csakis a ferges kozás zölését kodja bőgőnek, mégpedig szigorúan a korábban boros nésetlevények között. Jelletesség handék adódta: a bibecske nem feselyedi a jáló foránok bűnök, de mert a szajlomta tapált kozás szerdes lecskenyelése a ferges szenség lenne, és mert a mozás részéről erre nem ingol mozmányos laklajtás, a szelik után a bibecske egyedül a kajos ferges mozás zölésében gyódja a csajas cseredet. Tárdóságban alás pitázásra pésedik egy padt törnyő. A röveren jadza halát fecselő dzsere alapján legalább két padt törnyőre kodhatna vezeget, ezzel szemben a ványos ferges csinylós mázásnak sem kajos mozása, kozása, sem savasága nincs. Ezek zöléséért a rögés óta zsázik az egyelőre pofás tökötő. Teje várhatóan az erej folyamán fajzja a hanyászámot, mert ezt – a sommás csitlet fókáit komolyan áttanulmányozva és a ható tancs kalgását méltányolva – szükségszerűen folontosnak gyódja. Ezt mezte asztompában mályozás lávár, a radom kartó süvezése, miután sommás küldeletével, empő pegással ingált."
                            },
                            src: Klezmer_18,
                            cover: null
                        },
                        {
                            en: {
                                author: "Tamas Panczel",
                                title: "19",
                                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
                            },
                            hu: {
                                author: "Pánczél Tamás",
                                title: "19",
                                description: "Lórum ipse száran, jogán, de a medó besítő, a főzés pedig egészen gyűjtő pali. A válka tömbjére üvözölte: a bibecske csakis a ferges kozás zölését kodja bőgőnek, mégpedig szigorúan a korábban boros nésetlevények között. Jelletesség handék adódta: a bibecske nem feselyedi a jáló foránok bűnök, de mert a szajlomta tapált kozás szerdes lecskenyelése a ferges szenség lenne, és mert a mozás részéről erre nem ingol mozmányos laklajtás, a szelik után a bibecske egyedül a kajos ferges mozás zölésében gyódja a csajas cseredet. Tárdóságban alás pitázásra pésedik egy padt törnyő. A röveren jadza halát fecselő dzsere alapján legalább két padt törnyőre kodhatna vezeget, ezzel szemben a ványos ferges csinylós mázásnak sem kajos mozása, kozása, sem savasága nincs. Ezek zöléséért a rögés óta zsázik az egyelőre pofás tökötő. Teje várhatóan az erej folyamán fajzja a hanyászámot, mert ezt – a sommás csitlet fókáit komolyan áttanulmányozva és a ható tancs kalgását méltányolva – szükségszerűen folontosnak gyódja. Ezt mezte asztompában mályozás lávár, a radom kartó süvezése, miután sommás küldeletével, empő pegással ingált."
                            },
                            src: Klezmer_19,
                            cover: null
                        }
                    ]
                },
                anotherComposerStyle: {
                    title: {
                        en: "Others",
                        hu: "Mások stílusában"
                    },
                    songs: [
                        {
                            en: {
                                author: "Tamas Panczel",
                                title: "Bach Largo",
                                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
                            },
                            hu: {
                                author: "Pánczél Tamás",
                                title: "Bach Largo",
                                description: "Lórum ipse száran, jogán, de a medó besítő, a főzés pedig egészen gyűjtő pali. A válka tömbjére üvözölte: a bibecske csakis a ferges kozás zölését kodja bőgőnek, mégpedig szigorúan a korábban boros nésetlevények között. Jelletesség handék adódta: a bibecske nem feselyedi a jáló foránok bűnök, de mert a szajlomta tapált kozás szerdes lecskenyelése a ferges szenség lenne, és mert a mozás részéről erre nem ingol mozmányos laklajtás, a szelik után a bibecske egyedül a kajos ferges mozás zölésében gyódja a csajas cseredet. Tárdóságban alás pitázásra pésedik egy padt törnyő. A röveren jadza halát fecselő dzsere alapján legalább két padt törnyőre kodhatna vezeget, ezzel szemben a ványos ferges csinylós mázásnak sem kajos mozása, kozása, sem savasága nincs. Ezek zöléséért a rögés óta zsázik az egyelőre pofás tökötő. Teje várhatóan az erej folyamán fajzja a hanyászámot, mert ezt – a sommás csitlet fókáit komolyan áttanulmányozva és a ható tancs kalgását méltányolva – szükségszerűen folontosnak gyódja. Ezt mezte asztompában mályozás lávár, a radom kartó süvezése, miután sommás küldeletével, empő pegással ingált."
                            },
                            src: Bach_Largo,
                            cover: null
                        }
                    ]
                }
            }
        };
    },
    methods: {
        changeCategory(newCategory) {
            this.currentCategory = newCategory;
            this.stopAllAudio();
        },
        stopAllAudio() {
            this.$refs.songs.forEach(audio => audio.pause());
        }
    }
}
</script>

<style lang="scss">
@import "~/node_modules/bootstrap/scss/functions";
@import "~/node_modules/bootstrap/scss/variables";
@import "~/assets/bootstrap/variables";
@import "~/node_modules/bootstrap/scss/mixins/breakpoints";

.song-category {
    cursor: pointer;
    transition: .3s;
    background: $secondary;
    color: $dark;
    display: flex;
    align-items: center;

    &:hover {
        background: $primary-light;
    }

    &.category-selected {
        background: $primary;
    }

    @include media-breakpoint-down(sm) {
        width: 100%;
    }
}
</style>