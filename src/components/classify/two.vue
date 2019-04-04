<template>
  <div id="classifyThree">
    <router-view></router-view>
    <div id="ClassifyTwoRightTwo">
      <div>
        <img src="https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/4e3b486b-51fc-4147-90f8-54cdb5cf28c2.jpg">
        <p>我厨优选蔬菜</p>
      </div>

      <div>
        <img src="https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/458265f0-184d-4101-a281-77021e46b08b.jpg">
        <p>我厨优选禽蛋</p>
      </div>

      <div>
        <img src="https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/8ce3cf53-5547-4b51-9d07-3a882fbceea9.jpg">
        <p>我厨优选肉类</p>
      </div>

      <div>
        <img src="https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/4e3b486b-51fc-4147-90f8-54cdb5cf28c2.jpg">
        <p>我厨优选蔬菜</p>
      </div>

      <div>
        <img src="https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/4e3b486b-51fc-4147-90f8-54cdb5cf28c2.jpg">
        <p>我厨优选蔬菜</p>
      </div>

      <div>
        <img src="https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/4e3b486b-51fc-4147-90f8-54cdb5cf28c2.jpg">
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
