import Vue from 'vue';

import store from '@/store/index.js';

import "@/assets/reset.css";

import App from './medical.vue';

import router from './router.js';

import Mint from 'mint-ui';

import 'mint-ui/lib/style.css';

import '../../assets/font/iconfont.css';

import axios from 'axios';

// axios.interceptors.request.use(function (config) {
//     // 在发送请求之前做些什么
//     if (!config.headers.Authorization) {
//         config.headers.Authorization = "bearer ZGNsb3VkLWNsaWVudC1hdXRoOnd5bmtDbGllbnRTZWNyZXQ="
//     }
//     return config;
// }, function (error) {
//     // 对请求错误做些什么
//     return Promise.reject(error);
// });

import URLS from '../../components/Urls.vue';

Vue.prototype.$axios = axios;

Vue.prototype.$URLS = URLS;

Vue.use(Mint);

Vue.config.productionTip = false;

Vue.use(router);

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app');