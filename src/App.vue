<template>
  <div id="app">
    <div id="nav">
      <TarberCon/>
    </div>
    <router-view/>
  </div>
</template>


<script>
import TarberCon  from"./common/tabber/index.vue"
export default {
  components:{
    TarberCon
  }
}
</script>
<style lang="scss">
*{
  margin:0;
  padding:0;
}
</style>
