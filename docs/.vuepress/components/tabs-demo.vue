<template>
  <div class="tabs-wrapper">
    <l-tabs :selected.sync="selectedTab">
      <l-tabs-head>
        <l-tabs-item name='tab1'>
          <l-icon icon-name="settings"></l-icon>
          Tab1
        </l-tabs-item>
        <l-tabs-item name='tab2'>Tab2</l-tabs-item>
        <l-tabs-item name='tab3'>Tab3</l-tabs-item>
        <l-tabs-item name='tab4' disabled>Tab4</l-tabs-item>
      </l-tabs-head>
      <l-tabs-body>
        <l-tabs-pane name='tab1'>内容1</l-tabs-pane>
        <l-tabs-pane name='tab2'>内容2</l-tabs-pane>
        <l-tabs-pane name='tab3'>内容3</l-tabs-pane>
        <l-tabs-pane name='tab4'>内容4</l-tabs-pane>
      </l-tabs-body>
    </l-tabs>
  </div>
</template>

<script>
  import Tabs from '../../../src/Tabs'
  import TabsBody from '../../../src/Tabs-body'
  import TabsHead from '../../../src/Tabs-head'
  import TabsItem from '../../../src/Tabs-item'
  import TabsPane from '../../../src/Tabs-pane'
  import Icon from '../../../src/Icon'

  export default {
    components: {
      'l-tabs': Tabs, 'l-tabs-head': TabsHead, 'l-tabs-body': TabsBody, 'l-tabs-item': TabsItem,
      'l-tabs-pane': TabsPane, 'l-icon': Icon
    },
    data() { return { selectedTab: 'tab1' } }
  }
</script>

<style lang="scss" scoped>

</style>