import {getShowGoods} from '../../api/api'
export default {
    namespaced: true,
    state:{
        goods:[],
    },
    mutations : {
        mutationsShowGoods(state,params){
            state.goods = params;
           /*  console.log(state.goods) */
        }
    },
    actions: {
        async  actionsShowGoods({commit}){
            let data = await getShowGoods()
            commit('mutationsShowGoods',data.data.items)
           // console.log(data.data.items)
            
      }
    }
}