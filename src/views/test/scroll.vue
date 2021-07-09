<template>
  <div id="app">
    <div class="a" ref="scroll">
      <ul class="content">
        <li v-for="n in 20" :key="n">{{n}}</li>
      </ul>
    </div>
    
  </div>
</template>

<script >
import BetterScroll from 'better-scroll'
export default {
  data(){
    return {
      active:12
    }
  },
  mounted() {
    this.test()
  },
  methods: {
    test() {
      let bs = new BetterScroll(this.$refs.scroll, {
        mouseWheel: true,
        probeType:1,
        scrollY: true,
        scrollX: true,
        scrollbar: true
      })
      this.$refs.scroll = bs
    }
  }
}
</script>

<style lang="scss" scoped>
*,
body,
html {
  margin: 0;
  padding: 0;
}
.content{
  
}
.a {
  height: 35vh;
  overflow: hidden;
  width: 100vw;
  // position: relative;

  ul {
    // display: flex;
    li {
      display: block;
      height: 35vh;
      width: 375px;
      line-height: 35vh;
      font-size: 20px;
      font-weight: bold;
      text-align: center;
      background: #a1a1a1;
      border-bottom: 1px solid #e3e3e3;
      color: #fff;
    }
  }
}
</style>
