<template>
  <div class="input-wrapper">
    <l-input v-model="value"></l-input>
    <br>
    value:{{value}}
  </div>
</template>

<script>
  import Input from '../../../src/Input'

  export default {
    components:{
      'l-input':Input
    },
    data(){
      return{
        value:'双向绑定'
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../styles/helper";
.input-wrapper{
  padding-top: $wrapper-top;
}
</style>