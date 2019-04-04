<template>
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
</template>

<script>
export default {
//https://api9.wochu.cn/client/v1/goods/GetCategoryRecommendList
//https://api9.wochu.cn/client/v1/goods/GetCategoryListByMenuId?parameters=%7B%22menu%22%3A0%7D  
}
</script>

<style>
#ClassifyTwoRightTwo {
  width: 100%;
  border-bottom: .28rem solid rgb(235, 234, 234);
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  padding-left:.25rem;
  padding-bottom:.25rem;
  box-sizing: border-box;
}

#ClassifyTwoRightTwo div {
  width: 33%;
  display: flex;
  flex-direction: column;
  margin-top:.625rem;
}
#ClassifyTwoRightTwo div p {
  color: rgb(97, 95, 95);
  font-size: .24rem;
  margin-top:.2rem;
   margin-left:.25rem
}
#ClassifyTwoRightTwo div img {
  width: .75rem;
  height: .75rem;
  margin-left:.4rem
}
</style>
