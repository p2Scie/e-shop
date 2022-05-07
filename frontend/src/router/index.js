import { createRouter, createWebHistory } from 'vue-router';

import Home from "@/views/HomeView";
import Auth from "@/views/AuthView";

const routes = [
    { path: '/', component: Home},
    { path: '/login', component: Auth},
    { path: '/:notFound(.*)', component: null }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
    linkActiveClass: "active",
    linkExactActiveClass: "active"
})

export default router