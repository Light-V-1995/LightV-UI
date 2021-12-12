<template>
  <div class="grid-wrapper">
    <l-row class="row">
      <l-col class="item" span="24">col-24</l-col>
    </l-row>
    <l-row>
      <l-col class="item" span="12">col-12</l-col>
      <l-col class="item" span="12">col-12</l-col>
    </l-row>
    <l-row class="row">
      <l-col class="item" span="8">col-8</l-col>
      <l-col class="item" span="8">col-8</l-col>
      <l-col class="item" span="8">col-8</l-col>
    </l-row>
    <l-row class="row">
      <l-col class="item" span="6">col-6</l-col>
      <l-col class="item" span="6">col-6</l-col>
      <l-col class="item" span="6">col-6</l-col>
      <l-col class="item" span="6">col-6</l-col>
    </l-row>
  </div>
</template>

<style lang="scss" scoped>
  @import "../styles/helper";

  .grid-wrapper{
    > .row{ padding: .2em;
      > .item { text-align: center; color: $font-color;
        &:nth-child(odd){ background: $background; }
        &:nth-child(even){ background: lighten($background,20%); color: $font-color; }
      }
    }
  }
</style>

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