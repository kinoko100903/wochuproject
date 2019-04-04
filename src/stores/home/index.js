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
            //  console.log( data.data.acts)
             let arr = data.data.acts;
             for(var attr in arr){
                //  console.log(arr[attr].items)
                 let arr1 = arr[attr].items;
                 for(var attr in arr1){
                     console.log(arr1[attr])
                 }
             }
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