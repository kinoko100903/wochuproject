<template>
  <div id="classifyThree">
    <div id="classifyTwoRightOne">
      <div class="left-p"></div>
      <p>我厨精选</p>
      <div class="right-p"></div>
    </div>

    <div id="ClassifyTwoRightTwo">
      <div>
        <img src="../../assets/img/111.png">
        <p>全网抄底</p>
      </div>

      <div>
        <img src="../../assets/img/111.png">
        <p>全网抄底</p>
      </div>

      <div>
        <img src="../../assets/img/111.png">
        <p>全网抄底</p>
      </div>

      <div>
        <img src="../../assets/img/111.png">
        <p>全网抄底</p>
      </div>

      <div>
        <img src="../../assets/img/111.png">
        <p>全网抄底</p>
      </div>

      <div>
        <img src="../../assets/img/111.png">
        <p>全网抄底</p>
      </div>
    </div>

        <div id="classifyTwoRightOne">
      <div class="left-p"></div>
      <p>我厨精选</p>
      <div class="right-p"></div>
    </div>

    <div id="ClassifyTwoRightTwo">
      <div>
        <img src="../../assets/img/111.png">
        <p>全网抄底</p>
      </div>

      <div>
        <img src="../../assets/img/111.png">
        <p>全网抄底</p>
      </div>

      <div>
        <img src="../../assets/img/111.png">
        <p>全网抄底</p>
      </div>

      <div>
        <img src="../../assets/img/111.png">
        <p>全网抄底</p>
      </div>

      <div>
        <img src="../../assets/img/111.png">
        <p>全网抄底</p>
      </div>

      <div>
        <img src="../../assets/img/111.png">
        <p>全网抄底</p>
      </div>
    </div>

    <router-view></router-view>
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
  position: absolute;
  right: 0;
  margin-top:.2rem;
 
}
#classifyTwoRightOne {
  width: 100%;
  height: 1rem;
  display: flex;
  justify-content: center;
}
#classifyTwoRightOne div {
  width: 0.875rem;
  height: 1rem;
  border-bottom: 1px solid rgb(214, 212, 212);
  /* margin-top:.39rem; */
}
#classifyTwoRightOne p {
  color: rgb(97, 95, 95);
  font-size: 0.3rem;
  margin-top: 0.75rem;
}
.left-p {
  margin-right: 0.1875rem;
}
.right-p {
  margin-left: 0.1875rem;
}

#ClassifyTwoRightTwo {
  width: 100%;
  border-bottom: 0.28rem solid rgb(235, 234, 234);
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
}
#ClassifyTwoRightTwo div img {
  width: 0.75rem;
  height: 0.75rem;
  margin-left: 0.4rem;
}
</style>
