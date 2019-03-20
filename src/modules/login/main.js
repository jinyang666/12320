import Vue from 'vue'

import App from './login.vue'

import '../../assets/reset.css'

import '../../assets/font/iconfont.css'

import axios from 'axios'

import layer from 'vue2-layer-mobile'

import  urls from '../../components/Urls.vue'

Vue.prototype.$axios = axios

Vue.prototype.URLS = urls;

Vue.use(layer)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
