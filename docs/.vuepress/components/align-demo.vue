<template>
  <div class="align-wrapper">
    <l-row class="row" align="left">
      <l-col class="item" span="8">left</l-col>
      <l-col class="item" span="8">left</l-col>
    </l-row>
    <l-row class="row" align="center">
      <l-col class="item" span="8">center</l-col>
      <l-col class="item" span="8">center</l-col>
    </l-row>
    <l-row class="row" align="right">
      <l-col class="item" span="8">right</l-col>
      <l-col class="item" span="8">right</l-col>
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
  .align-wrapper{ text-align: center; color: $font-color;
    .row{ padding-top: $wrapper-top;
      > .item { text-align: center;
        &:nth-child(odd){ background: $background; }
        &:nth-child(even){ background: lighten($background,20%); color: $font-color; }
      }
    }
  }
</style>