import {createRouter, createWebHistory} from 'vue-router';

//import store from '@/store';
import Home from "@/views/HomeView";
import Auth from "@/views/AuthView";
import LoginForm from "@/components/form/LoginForm";
import SignupForm from "@/components/form/SignupForm";
import UserView from "@/views/user/UserView";
import CartView from "@/views/CartView";
import AdminView from "@/views/admin/AdminView";

const routes = [
    { path: '/', component: Home },
    { path: '/auth', component: Auth,
        children: [
            { path: 'login', component: LoginForm },
            { path: 'signup', component: SignupForm },
        ]
    },
    { path: '/cart', component: CartView },
    { path: '/admin', component: AdminView },
    { path: '/user/:id', component: UserView,
        children: [
            { path: 'account', component: null },
            { path: 'orders', component: null }
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

/*
router.beforeEach((to, _, next) => {
    if (to.meta.requiresAuth && !store.state.currentUser) {
        next('/login');
    } else if (to.meta.requiresUnauth && store.state.currentUser) {
        next('/');
    }
    next();
})
*/
export default router