<template>
  <div id="goods">
    <div>
      <i class="iconfont icon-duigou1"></i>
    </div>
    <div>
      <img
        src="https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/c25011b8-673b-42d9-ba8a-3b1f0ada976d.jpg"
        alt
      >
    </div>
    <div class="content">
      <div class="top">河北皇冠梨4粒（单果200g以上）</div>
      <div class="bottom">
        <p>
          <span class="price">￥19.9</span>
          <span class="isprice">￥24.9</span>
        </p>
        <p class="sum">
          <em class="em1">-</em>
          <span>1</span>
          <em class="em2 iconfont">&#xe61a;</em>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "goods"
};
</script>


<style scoped lang="scss">
#goods {
  width: 100%;
  height: 2.2rem;
  background: #ffffff;
  padding: 0 0.18rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid #e5e5e5;
  .iconfont {
    color: #f86c15;
    font-size: 0.35rem;
  }
  .content {
    width: 4rem;
    flex-wrap: wrap;
  }
  .top {
    font-size: 0.28rem;
  }
  img {
    width: 2rem;
    height: 2rem;
  }
  .sum {
    width: 1.56rem;
    height: 0.5rem;
    background: #f3f3f3;
    border-radius: 0.5rem;
    text-align: center;
    line-height: 0.5rem;
    font-size: 0.32rem;
    display: flex;
    justify-content: space-around;
    em{
      display: inline-block;
      width: .45rem;
      height: .45rem;
     
    }
    .em1{
       margin-left: .05rem;
       font-size: .4rem;
    }
    .em2{
      margin-right: .05rem;
      font-size: .22rem;
      color: #333;
    }
  }
  .bottom {
    padding-top: 0.4rem;
    display: flex;
    justify-content: space-between;
    font-size: 0.26rem;
    .price {
      color: #f86c15;
    }
    .isprice {
      text-decoration: line-through;
      color: #999;
    }
  }
}
</style>
