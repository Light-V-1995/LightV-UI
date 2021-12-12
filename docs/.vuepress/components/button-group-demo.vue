<template>
  <div class="group-wrapper">
    <l-button-group>
      <l-button icon="first">最前页</l-button>
      <l-button icon="left">上一页</l-button>
      <l-button icon="right">下一页</l-button>
      <l-button icon="last">最后页</l-button>
    </l-button-group>
  </div>
</template>

<script>
  import ButtonGroup from '../../../src/button-group'
  import Button from '../../../src/Button'
  export default {
    components:{
      'l-button':Button,
      'l-button-group':ButtonGroup
    }
  }
</script>
<style lang="scss" scoped>
  @import "../styles/helper";
  .group-wrapper{
    padding-top: $wrapper-top;
  }
</style>