<template>
  <div class="tabs-head" ref="head">
    <slot></slot>
    <div class="line" ref="line"></div>
    <div class="actions-wrapper">
      <slot name="actions"></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: 'L-TabsHead',
  inject: ['eventBus'],
  mounted () {
    this.eventBus.$on('update:selected', (item, vm) => {
      let {width, height, top, left} = vm.$el.getBoundingClientRect()
      let headLeft =  this.$refs.head.getBoundingClientRect().x
      this.$refs.line.style.width = `${width}px`
      this.$refs.line.style.left = `${left - headLeft}px`
    })
  }
}
</script>
<style scoped lang="scss">
$tab-height: 40px;
$green: #3eaf7c;
$border-color: #ddd;
.tabs-head {
  display: flex;
  height: $tab-height;
  justify-content: flex-start;
  position: relative;
  border-bottom: 1px solid $border-color;
  color: $green;
  > .line {
    position: absolute;
    bottom: 0;
    border-bottom: 1px solid $green;
    transition: all 350ms;
  }

  > .actions-wrapper {
    margin-left: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 1em;
  }
}
</style>