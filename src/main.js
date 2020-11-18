// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import '@/directives'
import '@/assets/base.styl'
import icon from '@/assets/icon.png'
import '@/assets/normalize.styl'
import BaseIconfont from '@/components/Base-Iconfont'

Vue.config.productionTip = false
Vue.config.silent = true
Vue.config.devtools = true
Vue.component('VemIcon', BaseIconfont)

console.log(Vue.options)
/* eslint-disable no-new */
const vm = new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  created() {
    let link = document.createElement('link')
    link.rel = "icon"
    link.href = icon
    document.head.appendChild(link)
  }
})

