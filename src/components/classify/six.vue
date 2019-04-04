<template>
  <div id="classifyThree">
    <router-view></router-view>
    <div id="ClassifyTwoRightTwo">
      <div>
        <img src="https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/e4d3df26-d41f-4206-a283-58480ec03db5.jpg">
        <p>我厨优选蔬菜</p>
      </div>

      <div>
        <img src="https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/e4d3df26-d41f-4206-a283-58480ec03db5.jpg">
        <p>我厨优选蔬菜</p>
      </div>

      <div>
        <img src="https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/e4d3df26-d41f-4206-a283-58480ec03db5.jpg">
        <p>我厨优选蔬菜</p>
      </div>

      <div>
        <img src="https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/e4d3df26-d41f-4206-a283-58480ec03db5.jpg">
        <p>我厨优选蔬菜</p>
      </div>

      <div>
        <img src="https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/e4d3df26-d41f-4206-a283-58480ec03db5.jpg">
        <p>我厨优选蔬菜</p>
      </div>

      <div>
        <img src="https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/e4d3df26-d41f-4206-a283-58480ec03db5.jpg">
        <p>我厨优选蔬菜</p>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "classify",

};
</script>

<style lang="scss" scoped>
#classifyThree {
  width: 75%;
   position: fixed;
  top:1rem;
  right: 0;
}
#ClassifyTwoRightTwo {
  width: 100%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  padding-left: 0.25rem;
  padding-bottom: 0.625rem;
  box-sizing: border-box;
}

#ClassifyTwoRightTwo div {
  width: 33%;
  display: flex;
  flex-direction: column;
  margin-top: 0.625rem;
}
#ClassifyTwoRightTwo div p {
  color: rgb(97, 95, 95);
  font-size: 0.24rem;
  margin-top: 0.2rem;
  margin-left: 0.25rem;
  width:1rem;
}
#ClassifyTwoRightTwo div img {
  width: 0.75rem;
  height: 0.75rem;
  margin-left: 0.4rem;
}
</style>
