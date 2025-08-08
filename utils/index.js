export const CONTENT_TYPE = {
    IFRAME: "iframe",
    AUDIO: "audio"
};

export function getRouteBasePageName(route) {
    const getRouteBaseName = useRouteBaseName();

    return getRouteBaseName(route)?.split("-")?.[0];
};