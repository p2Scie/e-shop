import {createStore} from 'vuex'
import axios from "axios";
import router from "@/router";

const store = createStore({
    state() {
        return {
            userId: null,
        }
    },
    getters: {
        userId(state) {
            return state.userId
        },
        isAuthenticated(state) {
            return !!state.userId;
        }
    },
    mutations: {
        setUser(state, payload) {
            state.userId = payload.userId;
        }
    },
    actions: {
        async login(context, payload) {
            try {
                const res = await axios.post('http://localhost:8000/api/auth/login', {
                    email: payload.email,
                    password: payload.password
                }, {withCredentials: true});

                console.log(res);

                localStorage.setItem('userId', res.data.user.id);
                context.commit('setUser', {
                    userId: res.data.user.id
                })
                await router.push('/');
            } catch (e) {
                console.log(e);
                throw e;
            }
        },
        async signup(context, payload) {
            try {
                const res = await axios.post('http://localhost:8000/api/auth/signup', {
                    firstname: payload.firstname,
                    lastname: payload.lastname,
                    email: payload.email,
                    password: payload.password
                }, {withCredentials: true});

                console.log(res);
                context.commit('setUser', {
                    userId: res.data.newUser.id
                })
                await router.push('/auth/login');

            } catch (e) {
                console.log(e);
                throw e;
            }
        },
        async logout(context) {
            try {
                const res = await axios.get('http://localhost:8000/api/auth/logout', {withCredentials: true});

                console.log(res);
                localStorage.removeItem('userId');
                context.commit('setUser', { userId: null });
                await router.push('/auth/login');
            } catch (e) {
                console.log(e)
                throw e;
            }
        },
        autoLogin(context) {
            const userId = localStorage.getItem('userId');

            if(userId) {
                context.commit('setUser', {
                    userId: userId
                })
            }
        }
    }
})


export default store