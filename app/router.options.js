export default {
    scrollBehavior(to, from, savedPosition) {
        const isNavigateInPage = getCategoryByPath(to) === getCategoryByPath(from);

        return isNavigateInPage ? savedPosition : { top: 0 };
    }
};