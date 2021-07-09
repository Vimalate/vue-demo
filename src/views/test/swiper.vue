<template>
  <div class="recommendPage">
    <swiper :options="swiperOption" ref="mySwiper">
      <swiper-slide v-for="(item,index) in swiperList" :key="index">I'm Slide {{item}}</swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
// 引入插件
import { swiper, swiperSlide } from "vue-awesome-swiper";
import "swiper/dist/css/swiper.css";
// var vm = this
export default {
  components: {
    swiper,
    swiperSlide
  },
  data() {
    return {
      active: 1,
      defaultActive: 1,
      swiperList: [1, 2, 3],
      swiperOption: {
        autoplay: false,
        initialSlide: 1,
        // 显示分页
        pagination: {
          el: ".swiper-pagination",
          clickable: true //允许分页点击跳转
        },
        on: {
          slideChange: function () {
            vm.active = this.activeIndex
            console.log(this, this.active)

          }
        }

      }
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    }
  },
  watch:{
    active:{
      handler(val){
        console.log(val);
      },
      // immediate:true,
      deep:true
    }
  },
  mounted() {
    // current swiper instance
    // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
    console.log("this is current swiper instance object", this.swiper);
    // this.swiper.slideTo(3, 1000, false);
  }
};
</script>
<style scoped >
.recommendPage .swiper-container {
  position: relative;
  width: 100%;
  height: 200px;
  background: pink;
}
.recommendPage .swiper-container .swiper-slide {
  width: 100%;
  line-height: 200px;
  background: yellowgreen;
  color: #000;
  font-size: 16px;
  text-align: center;
}
</style>

