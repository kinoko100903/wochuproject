import Vue from 'vue'
import App from './App.vue'
import router from './routers/index'
import store from './store/store.js'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import BScroll from './common/BScroll/index.vue'
import Loading from './common/loading/index.vue'

// import VueTouch from 'vue-touch'

Vue.use(VueAwesomeSwiper)
// Vue.use(VueTouch, {name: 'v-touch'})
Vue.config.productionTip = false
Vue.component("BScroll",BScroll);
Vue.component("Loading",Loading);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
