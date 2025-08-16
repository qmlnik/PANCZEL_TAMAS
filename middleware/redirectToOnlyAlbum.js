export default defineNuxtRouteMiddleware((to, from) => {
    const audioPlayerStore = useAudioPlayerStore();
    const getRouteBaseName = useRouteBaseName();

    const page = getRouteBaseName(to);
    const [category, subcategory] = page.split("-");

    const isSubcategoryExists = subcategory !== undefined;
    let albumContent = null;

    if (isSubcategoryExists) {
        albumContent = audioPlayerStore.categories[category].subcategoies[subcategory].albumContent;
    } else {
        albumContent = audioPlayerStore.categories[category].albumContent;
    }

    const isOnlyAlbum = albumContent.albumOrder.length === 1;

    const [fromCategory, fromSubcategory] = getRouteBaseName(from)?.split("-") || [];
    const isFromSubcategoryExists = fromSubcategory !== undefined;
    const isCheckFromSubcategory = isSubcategoryExists && isFromSubcategoryExists;
    let isFromAnotherCategoryOrSubcategory;

    if (isCheckFromSubcategory) {
        isFromAnotherCategoryOrSubcategory = subcategory !== fromSubcategory;
    } else {
        isFromAnotherCategoryOrSubcategory = category !== fromCategory;
    }

    const isRedirectToAlbum = isOnlyAlbum && isFromAnotherCategoryOrSubcategory;

    if (isRedirectToAlbum) {
        const localePath = useLocalePath()

        return navigateTo(localePath(`${page}-${albumContent.albumOrder[0]}`));
    }
});