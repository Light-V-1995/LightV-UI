<template>
  <div class="offset-wrapper">
    <l-row class="row">
      <l-col class="item" span="8"> <span>col-8</span> </l-col>
      <l-col class="item" span="8"> <span>col-8</span> </l-col>
      <l-col class="item" span="4" offset="4"> <span>col-4</span> </l-col>
    </l-row>
    <l-row class="row">
      <l-col class="item" span="8"> <span>col-8</span> </l-col>
      <l-col class="item" span="5" offset="3"> <span>col-5</span> </l-col>
      <l-col class="item" span="4" offset="4"> <span>col-4</span> </l-col>
    </l-row>
    <l-row class="row">
      <l-col class="item" span="2" offset="6"> <span>col-2</span> </l-col>
      <l-col class="item" span="5" offset="3"> <span>col-5</span> </l-col>
      <l-col class="item" span="4" offset="4"> <span>col-4</span> </l-col>
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
    }
  }
</script>

<style lang="scss" scoped>
  @import "../styles/helper";
  .offset-wrapper { padding-top: $wrapper-top;
    > .row {
      > .item { text-align: center; color: $font-color;
        > span { display: block; background: $background; }
      }
    }
  }
</style>