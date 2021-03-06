import {createApp} from 'vue';
import App from './App.vue';
import store from "@/store";
import router from './router';
import bulma from './assets/styles/main.scss';
import axios from "axios";
import VueAxios from "vue-axios";

const app = createApp(App);

app.use(router);
app.use(store);
app.use(bulma);
app.use(VueAxios, axios);
app.mount('#app');
