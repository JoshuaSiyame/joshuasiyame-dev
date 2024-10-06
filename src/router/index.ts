import { createWebHistory, createRouter } from "vue-router";

// pages
const HomeView = () => import('@/views/HomeVue.vue');

// router instance
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/explore',
            children: [
                {
                    path: 'startups',
                    name: 'explore-startups',
                    component: 
                },
                {
                    path: 'work-life',
                    name: 'explore-work-life',
                    component: 
                },
                {
                    path: 'online-store',
                    name: 'explore-online-store',
                    component: ''
                },
            ]
        },
        {
            path: '/know-more',
            children: [
                {
                    path: 'my-story',
                    name: 'know-more-my-story',
                    component: 
                },
                {
                    path: 'dev-academy',
                    name: 'know-more-dev-academy',
                    component: 
                },
                {
                    path: 'entrepreneurship',
                    name: 'know-more-entrepreneurship',
                    component: 
                },
                {
                    path: 'agri-tech',
                    name: 'know-more-agri-tech',
                    component: 
                },
                {
                    path: 'communities',
                    name: 'know-more-communities',
                    component: 
                }
            ]
        },
        {
            path: '/about',
            children: [
                {
                    path: 'legal-notice',
                    name: 'about-legal-notice',
                    component: 
                },
                {
                    path: 'privacy-policy',
                    name: 'about-privacy-policy',
                    component: 
                },
                {
                    path: 'services',
                    name: 'about-services',
                    component: 
                },
                {
                    path: 'career',
                    name: 'about-career',
                    component: 
                },
                {
                    path: 'newsletter',
                    name: 'about-newsletter',
                    component: 
                },
            ]
        }
    ]
});

export default router;