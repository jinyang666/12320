import Vue from 'vue'

import App from './login.vue'

import Mint from 'mint-ui'

import '../../assets/reset.css'

import 'mint-ui/lib/style.css'

import '../../assets/font/iconfont.css'

import axios from 'axios'

import  urls from '../../components/Urls.vue'

import  tool from '../../components/Public.js'

Vue.prototype.$axios = axios

Vue.prototype.$tool = tool

Vue.use(Mint);

Vue.prototype.URLS = urls;

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
