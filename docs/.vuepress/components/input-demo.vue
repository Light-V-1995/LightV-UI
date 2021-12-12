<template>
  <div class="input-wrapper">
    <l-input></l-input>
    <l-input disabled></l-input>
    <l-input readonly></l-input>
    <l-input error="错误信息"></l-input>
    <br>
    <l-input v-model="value"></l-input>
    <br>
    <span>value:{{value}}</span>
  </div>
</template>

<script>
  import Input from '../../../src/Input'

  export default {
    data(){
      return { value:'双向绑定' }
    },
    components: { 'l-input': Input }
  }
</script>

<style lang="scss" scoped>
  @import "../styles/helper";

  .input-wrapper {
    padding-top: $wrapper-top;
  }
</style>