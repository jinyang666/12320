import Vue from 'vue'

import Vuex from 'vuex'

import Router from 'vue-router'

import App from './index.vue'

import router from './router.js'

import store from '../../store'

import urls from '../../components/Urls.vue'

import '../../assets/reset.css'

import '../../assets/font/iconfont.css'

import axios from 'axios'

import layer from 'vue2-layer-mobile'

Vue.prototype.$axios = axios

Vue.prototype.URLS = urls;

Vue.use(layer)

Vue.use(Router)

Vue.use(Vuex)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')