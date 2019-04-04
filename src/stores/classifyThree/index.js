import {getclassifyThree } from "@/api/api.js"
export default {
  state: {
      list: []
  },
  actions: {
      async getActionsList({ commit }) {
          let data = await getclassifyThree()
           console.log(data)
      }
  },
  namespaced: true
}


