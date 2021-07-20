<template>
  <div>
    <p>孙子组件{{data}}</p>
    <p>active{{active}}</p>
   
    <!-- <van-button @click="change">按钮</van-button>
    <van-button @click="handleEvent">按钮</van-button> -->
  </div>
</template>

<script>
export default {
  props: {
    active: String,
    data: String
  },
  data() {
    return {
    
    }
  },
  methods: {
    change() {
      this.$emit('change')
    },
    handleEvent() {
      this.$emit('handleEvent')
    }
  }
}
</script>

<style lang="scss" scoped>
</style>