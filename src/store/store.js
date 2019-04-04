import Vue from 'vue'
import Vuex from 'vuex'
import home from "@/stores/home"
import classifyThree from "@/stores/classifyThree"

import axios from 'axios';

Vue.use(Vuex)

export default new Vuex.Store({
 modules:{
   home,
   classifyThree
 }
})
