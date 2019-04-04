<template>
  <div id="classifyThree">
    <ClassifyThreeRightOne/>
    <ClassifyThreeRightTwo/>
    <ClassifyThreeRightOne/>
    <ClassifyThreeRightTwo/>
  </div>
</template>

<script>
import Vuex from "vuex"
import ClassifyThreeRightOne from "@/components/classify/classifyThreeRightOne.vue"
import ClassifyThreeRightTwo from "@/components/classify/ClassifyThreeRightTwo.vue"

export default {
  name:'classify',

  created(){
    this.getActionsList()
  },
  methods:{
    ...Vuex.mapActions({
        getActionsList:"classifyThree/getActionsList"
    })
  },

  components:{
    ClassifyThreeRightOne,
    ClassifyThreeRightTwo,
  }
}
</script>

<style lang="scss" scoped>
    #classifyThree{
        width:75%;
        position: absolute;
        top:.8rem;
        right:0;
    }
</style>
