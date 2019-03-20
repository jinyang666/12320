import Vue from 'vue'

import Vuex from 'vuex'

import Router from 'vue-router'

import App from './index.vue'

import store from '../../store'

import router from './router.js'

import urls from '../../components/Urls.vue'

import tool from '../../components/Public.js'

import Mint from 'mint-ui'

import '../../assets/reset.css'

import 'mint-ui/lib/style.css'

import '../../assets/font/iconfont.css'

import axios from 'axios'

Vue.prototype.$tool = tool

Vue.prototype.$axios = axios

axios.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    console.log(config)
    if(!config.headers.Authorization){
        config.headers.Authorization="bearer "+tool.getStorage("Authorization")
    }
    return config;
}, function (error) {
// 对请求错误做些什么
    return Promise.reject(error);
});

Vue.prototype.URLS = urls;

Vue.use(Router)

Vue.use(Mint);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
