export default defineNuxtRouteMiddleware(to => {    
    const isRedirectFromIndex = ["/", "/hu", "/hu/"].includes(to.fullPath);
    
    if (isRedirectFromIndex) {
        const localePath = useLocalePath();

        return navigateTo(localePath("composer"));
    }
});