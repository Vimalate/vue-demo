<template>
  <div>
    <form-item v-bind="$attrs" v-on="$listeners" ></form-item>
  </div>
</template>

<script>
import formItem from './formItem'
export default {
  inheritAttrs: false,//是否在dom上生成
  components: {formItem
  },
  // props: {
  //   active: String
  // },
  data() {
    return {}
  },
  methods: {
    // change() {
    //   this.$emit('update:active', '12')
    // }
  }
}
</script>

<style lang="scss" scoped>
</style>