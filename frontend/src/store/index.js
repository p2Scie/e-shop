import { createStore } from 'vuex'
import axios from "axios";

const store = createStore({
    state () {
        return {
            currentUser: null,
            user: null,
        }
    },
    getters: {
        getCurrentUser(state) {
            return state.currentUser
        }
    },
    mutations: {
        async setCurrentUser(state) {
            const result = await axios.get('http://localhost:8000/api/auth', {withCredentials: true});
            state.currentUser = result.data.user;
        }
    },
    /*actions: {
        login() {},
        async signup(context, payload) {
            try {
                const res = await this.axios.post('http://localhost:8000/api/register', data, {withCredentials: true})
                console.log(res);

            } catch (e) {
                console.log(e)
                console.log(e.response)
            }
        }
    }*/
})


export default store