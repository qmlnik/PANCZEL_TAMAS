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

const categoriesContent = {
    
};

function getSubcategoryMenu(category) {
    const hasCategorySubcategoryMenu  =
        categoriesContent[category].subcategoies !== undefined
        && categoriesContent[category].subcategoryOrder !== undefined;

    if (!hasCategorySubcategoryMenu) {
        return null;
    }

    const subcategoryContentProcessed = Object.entries(categoriesContent[category].subcategoies)
        .map(([subcategory, { title, page }]) => ([subcategory, { title: { ...title }, page }]));

    return {
        subcategoryOrder: { ...categoriesContent[category].subcategoryOrder },
        subcategoryContent: Object.fromEntries(subcategoryContentProcessed)
    };
}

function getAlbums(category, subcategory = null) {
    const isAlbumsInSubcategory = categoriesContent[category].subcategoies?.[subcategory]?.albums !== undefined;

    if (isAlbumsInSubcategory) {
        return JSON.parse(JSON.stringify(categoriesContent[category].subcategoies[subcategory].albums));
    }

    const isAlbumsinCategory = categoriesContent[category].albums !== undefined;

    if (isAlbumsinCategory) {
        return JSON.parse(JSON.stringify(categoriesContent[category].albums));
    }

    return null;
}

function getAlbumContent(category, subcategory, albumPage) {
    const albums = getAlbums(category, subcategory);

    if (albums !== null) {
        const album = albums.find(({ page }) => page === albumPage);

        return JSON.parse(JSON.stringify(album || null));
    }

    return null;
}

function getRegularContent(category, subcategory = null,) {
    if (subcategory !== null) {
        return JSON.parse(JSON.stringify(categoriesContent[category].subcategoies[subcategory].content));
    }

    return JSON.parse(JSON.stringify(categoriesContent[category].content));
}

export { getSubcategoryMenu, getAlbums, getAlbumContent, getRegularContent };