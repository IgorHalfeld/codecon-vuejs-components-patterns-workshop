import Vue from 'vue'
import App from './App.vue'
import services from './services'
import global from './global'

Vue.config.productionTip = false

Object.defineProperty(Vue.prototype, '$services', {
  get () {
    return services
  },
  set () {
    throw new Error('you cann\'t set $services')
  }
})

Object.defineProperty(Vue.prototype, '$g', {
  get () {
    return global
  },
  set () {
    throw new Error('you cann\'t set $g')
  }
})

new Vue({
  render: h => h(App)
}).$mount('#app')
