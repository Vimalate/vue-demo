<template>
  <div class="recommendPage">
    <van-search v-model="value" shape="round" background="#4fc08d" placeholder="请输入搜索关键词" />
    <!-- <swiper :options="swiperOption" ref="mySwiper" @slideChange="slideChange">
      <swiper-slide v-for="(item,index) in swiperList" :key="index">I'm Slide {{item}}</swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper> -->
    <van-button type="primary" @click="deconstruction">按钮</van-button>
  </div>
</template>

<script>
// 引入插件
import { swiper, swiperSlide } from "vue-awesome-swiper";
import "swiper/dist/css/swiper.css";
import {debounce} from 'lodash'
export default {
  components: {
    swiper,
    swiperSlide
  },
  data() {
    return {
      active: 1,
      defaultActive: 1,
      swiperList: [1, 2, '我改变了'],
      value: '',
      name:'',
      age:'',
      swiperOption: {
        autoplay: false,
        initialSlide: 1,
        observer: true,
        loop: true,
        observeParents: true,
        observeSlideChildren: true,
        // 显示分页
        pagination: {
          el: ".swiper-pagination",
          clickable: true //允许分页点击跳转
        },
        // on: {
        //   slideChange: function () {
        //     this.active = this.activeIndex
        //     console.log(this, this.active)

        //   }
        // }

      }
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    }
  },
  methods: {
    slideChange() {
      this.active = this.$refs.mySwiper.swiper.activeIndex
      console.log('slideChange', this.active);
    },
    search: debounce(function() {
      console.log(this.value);
    }, 1000),
    deconstruction(){
      const obj={name:'dd',age:'12'}
      // let {name:this.name,}
    }
  },
  watch: {
    active: {
      handler(newVal, oldVal) {
        console.log('watch', newVal, oldVal);
        if (newVal > oldVal && newVal > this.defaultActive) {
          this.swiperList[2] = '我改变了1'
          this.$nextTick(() => {
            this.$refs.mySwiper.update()
          })

          console.log(this.swiperList);
        } else if (newVal < oldVal && newVal < this.defaultActive) {

          // this.swiperList.unshift(newVal)
          // console.log(this.swiperList);
          // this.$nextTick(()=>{
          //   console.log(this.$refs.mySwiper);
          //   this.$refs.mySwiper.slideTo(newVal, 1000, false)
          // })

        }

      },
      // immediate:true,
      deep: true
    },
    value: {
      handler(val) {
        this.search()
        
      }
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

