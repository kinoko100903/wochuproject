import {
    getHome
} from "@/api/api.js"
export default {
    state: {
        list: []
    },
    actions: {
        async getActionsList({ commit }) {
            let data = await getHome()
            commit('getMutationsList', data.data.acts)
             console.log( data.data.acts)
        }
    },
    mutations: {
        getMutationsList(state, params) {
            state.list = params
            //console.log(state.list)
        }
    },
    namespaced: true
}