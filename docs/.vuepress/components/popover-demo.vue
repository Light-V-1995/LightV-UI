<template>
  <div class="popover-wrapper">
    <l-popover position="bottom">
      <template slot="content">
        popover 中的内容
      </template>
      <l-button>下方显示内容</l-button>
    </l-popover>
    <l-popover>
      <template slot="content">
        popover 中的内容
      </template>
      <l-button>点击显示</l-button>
    </l-popover>
    <l-popover trigger="hover">
      <template slot="content">
        popover 中的内容
      </template>
      <l-button>hover 显示内容</l-button>
    </l-popover>
  </div>
</template>

<script>
  import Popover from '../../../src/Popover'
  import Button from '../../../src/Button'

  export default {
    components:{
      'l-popover':Popover,
      'l-button': Button
    }
  }
</script>

<style lang="scss" scoped>

</style>