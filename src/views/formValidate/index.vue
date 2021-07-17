<template>
  <div>
    <p>我是你爷爷</p>
    <Form :active='active' :data='data' @change="change" @handleEvent='handleEvent'/>
    <p>{{active}}</p>
  </div>
</template>

<script>
import Form from './components/form'
  export default {
    components:{
      Form
    },
    data(){
      return {
        active:'我是你爷爷',
        data:'lj'
      }
    },
    methods:{
      change(){
        this.active='123'
      },
      handleEvent(){
        this.active='哈哈'
        console.log('handleEvent');
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>