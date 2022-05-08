import {createRouter, createWebHistory} from 'vue-router';

import store from '@/store';
import Home from "@/views/HomeView";
import Auth from "@/views/AuthView";

const routes = [
    { path: '/', component: Home, meta: { requiresUnauth: true } },
    { path: '/login', component: Auth, meta: { requiresUnauth: true } },
    {
        path: '/admin', component: null, meta: { requiresAuth: true },
        children: [
            { path: 'dashboard', component: null },
            { path: 'booking', component: null },
            { path: 'rooms', component: null },
            { path: 'profile', component: null },
            { path: 'catalog', component: null }
        ]
    },
    {
        path: '/user', component: null, meta: { requiresAuth: true },
        children: [
            { path: 'cart', component: null },
            { path: 'profile', component: null }
        ]
    },
    { path: '/:notFound(.*)', component: null }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
    linkActiveClass: "active",
    linkExactActiveClass: "active"
})

router.beforeEach((to, _, next) => {
    if (to.meta.requiresAuth  && !store.state.currentUser) {
        next('/login');
    } else if (to.meta.requiresUnauth && store.state.currentUser) {
        next('/');
    }
    next();
})

export default router