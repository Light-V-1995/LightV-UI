<template>
  <div class="response-wrapper">
    <img src="../public/response.gif" alt="响应式效果">
  </div>
</template>

<script>
  import Col from '../../../src/Col'
  import Row from '../../../src/Row'

  export default {
    components: {
      'l-col': Col,
      'l-row': Row
    },
  }
</script>

<style lang="scss" scoped>
  @import "../styles/helper";
  .response-wrapper { padding-top: $wrapper-top; }
</style>
