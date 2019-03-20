import Vue from 'vue'

import App from './index.vue'

import urls from '../../components/Urls.vue'

import Mint from 'mint-ui'

import '../../assets/reset.css'

import '../../assets/font/iconfont.css'

import 'mint-ui/lib/style.css'

import axios from 'axios'

Vue.prototype.$axios = axios

Vue.prototype.URLS = urls;

Vue.use(Mint);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')