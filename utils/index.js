export const CONTENT_TYPE = {
    AUDIO_WITH_VIDEO: "audio_with_video",
    AUDIO: "audio"
};

/*
    NAMING CONVENTION
    route: { category:, subcategory:, album: }
    path: zeneszerzo/klasszikus/zenekari-muvek
    page: composer-classic-orchestra,
    category: composer
*/

export function getCategoryByPath(path) {
    const getRouteBaseName = useRouteBaseName();

    return getRouteBaseName(path)?.split("-")?.[0];
};

export function getRouteByPage(page) {
    const splitResult = page.split("-");
    const isSubcategoryExists = splitResult.length === 3;

    if (isSubcategoryExists) {
        const [category, subcategory, album] = splitResult;

        return { category, subcategory, album };
    }

    const [category, album] = splitResult;

    return { category, subcategory: null, album };
}

export function getPageByRoute(route) {
    const { category, subcategory, album } = route;

    return [category, subcategory, album].filter(element => element !== null).join("-");
}