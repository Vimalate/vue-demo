<template>
  <div>
    <p>我是你爷爷</p>
    <Form :active='active' :data='data' @change="change" @handleEvent='handleEvent' ref="
    form" />
    <p>{{active}}</p>
    <Validate ref="validate" />
    <div style="margin: 16px;">
      <van-button round block type="info" @click="submit">提交</van-button>
      <van-button round block type="info" @click="reset">重置</van-button>
    </div>
  </div>
</template>

<script>
import Form from './components/form'
import Validate from './validateForm.vue'
export default {
  components: {
    Form, Validate
  },
  data() {
    return {
      active: '我是你爷爷',
      data: 'lj'
    }
  },
  methods: {
    change() {
      this.active = '123'
    },
    handleEvent() {
      this.active = '哈哈'
      console.log('handleEvent');
    },
    submit() {
      this.$refs.validate.$refs.form.validate().then(()=> {
        this.$toast.success('submit!')
       
      }).catch(()=>{
        this.$toast.fail('error!')
      })
    },
    reset(){
      this.$refs.validate.$refs.form.resetValidation()
    }
  }
}
</script>

<style lang="scss" scoped>
</style>