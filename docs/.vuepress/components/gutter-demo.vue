<template>
  <div class="gutter-wrapper">
    <l-row gutter="30">
      <l-col class="item" span="8"> <span> col-8; gutter-30;</span> </l-col>
      <l-col class="item" span="8"> <span> col-8; gutter-30;</span> </l-col>
      <l-col class="item" span="8"> <span> col-8; gutter-30;</span> </l-col>
    </l-row>
    <l-row gutter="20">
      <l-col class="item" span="8"> <span> col-8; gutter-20;</span> </l-col>
      <l-col class="item" span="8"> <span> col-8; gutter-20;</span> </l-col>
      <l-col class="item" span="8"> <span> col-8; gutter-20;</span> </l-col>
    </l-row>
    <l-row gutter="10">
      <l-col class="item" span="8"> <span> col-8; gutter-10;</span> </l-col>
      <l-col class="item" span="8"> <span> col-8; gutter-10;</span> </l-col>
      <l-col class="item" span="8"> <span> col-8; gutter-10;</span> </l-col>
    </l-row>
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

  .gutter-wrapper { padding-top: $wrapper-top;
    .item { text-align: center; color: $font-color;
      > span { display: block; background: $background; }
    }
  }

</style>