<template>
  <div class="home">
    <HomeOne/>
    <HomeTwo/>
    <HomeThree/>
    <HomeFour/>
  </div>
</template>

<script>
import HomeOne from "../../components/home/homeone.vue"
import HomeTwo from "../../components/home/hometwo.vue"
import HomeThree from "../../components/home/homethree.vue"
import HomeFour from "../../components/home/homefour.vue"

export default {
  name: 'home',
  components:{
    HomeOne,
    HomeTwo,
    HomeThree,
    HomeFour
  }
}
</script>
