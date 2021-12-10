<template>
  <div class="row" :style="rowStyle">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'L-Row',
  props: {
    gutter: {
      type: [Number, String]
    }
  },
  computed: {
    rowStyle () {
      let {gutter} = this
      return {marginLeft: -gutter / 2 + 'px', marginRight: -gutter / 2 + 'px'}
    }
  },
  created () {
    console.log('row created')
  },
  mounted () {
    console.log('row mounted')
    console.log(this.$children)
    this.$children.forEach((vm) => {
      vm.gutter = this.gutter
    })
  }
}

</script>

<style scoped lang="scss">
.row{
  display: flex;
}
</style>