<template>
  <div class="wrapper" ref="wrapper">
    <slot></slot>
  </div>
</template>


<script>
import BScroll from "better-scroll";
export default {
  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper, {
      tap: true,
      pullUpLoad: true,
      click: true,
      freeScroll: true,
      scrollX: true,
      hasHorizontalScroll: true,
      hasVerticalScroll: true,
      bindToWrapper: true,
      eventPassthrough:"horizontal",

    });
    console.log(this.scroll);
  },
  methods: {
    handleTo(t) {
      this.scroll.scrollTo(0, -t, 500);
    },
    getMovieMore() {
      this.scroll.on("pullingUp", () => {
        this.$store.dispatch("movie/getActionMoreMovie");
      });
    },
    update() {
      //当数据加载完毕以后
      this.scroll.finishPullUp();
    },
    getih() {
      this.scroll.refresh();
    }
  }
};
</script>


<style scoped>
.wrapper {
  height: 2000px;
  width:100%;
}
</style>