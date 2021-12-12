<template>
  <div>
    <l-collapse :selected.sync="selected">
      <l-collapse-item title="标题1" name="1">1</l-collapse-item>
      <l-collapse-item title="标题2" name="2">2</l-collapse-item>
      <l-collapse-item title="标题3" name="3">3</l-collapse-item>
    </l-collapse>
  </div>
</template>

<script>
  import Collapse from '../../../src/Collapse'
  import CollapseItem from '../../../src/Collapse-item'

  export default {
    components:{
      'l-collapse': Collapse,
      'l-collapse-item': CollapseItem,
    },
    data(){
      return{
        selected : ['1']
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>