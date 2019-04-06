import Vue from 'vue'
import App from './App.vue'
import router from './routers/index'
import store from './store/store.js'
import VueAwesomeSwiper from 'vue-awesome-swiper'
// import VueTouch from 'vue-touch'

Vue.use(VueAwesomeSwiper)
// Vue.use(VueTouch, {name: 'v-touch'})
Vue.config.productionTip = false


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
