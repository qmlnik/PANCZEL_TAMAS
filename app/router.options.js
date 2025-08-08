export default {
    scrollBehavior(to, from, savedPosition) {
        const isNavigateInPage = getRouteBasePageName(to) === getRouteBasePageName(from);

        return isNavigateInPage ? savedPosition : { top: 0 };
    }
};