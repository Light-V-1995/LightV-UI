<template>
  <div class="button-wrapper">
    <l-button>按钮</l-button>
    <l-button icon="settings">按钮</l-button>
    <l-button icon="settings" icon-position="right">按钮</l-button>
    <l-button :loading="true">按钮</l-button>
    <l-button icon="settings" :loading="loadStatus" @click="loadStatus=!loadStatus">按钮</l-button>
    <l-button disabled>按钮</l-button>
  </div>
</template>

<script>
  import Button from '../../../src/Button'

  export default {
    data () {
        return {loadStatus:false}
    },
    components: {
      'l-button': Button,
    },
  }

</script>

<style lang="scss" scoped>
  .button-wrapper{
    padding: 0 10px;
  }
</style>