// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

// 引入 element-ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI);

// 引入 axios
// 设置反向代理，前端请求默认发送到 http://localhost:8088
import axios from 'axios'
Vue.prototype.axios = axios
//axios.defaults.baseURL = 'http://39.107.227.30:8088'
axios.defaults.baseURL = 'http://localhost:8088'
Vue.prototype.$axios = axios

// 引入 qs
import qs from 'qs'
Vue.prototype.qs=qs

import UploadPic from 'UploadCompoents'
Vue.use(UploadPic)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
