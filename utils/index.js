export const CONTENT_TYPE = {
    IFRAME: "iframe",
    AUDIO: "audio"
};

export const IFRAME_ASPECT_RATIO = {
    LOW: "low", // kottás videók
    NORMAL: "normal"
};

export function getRouteBasePageName(route) {
    const getRouteBaseName = useRouteBaseName();

    return getRouteBaseName(route)?.split("-")?.[0];
};