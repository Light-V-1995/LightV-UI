---
title: 'Tabs - 标签'
---
# 标签

## 组件注册
```vue
import { Tabs } from 'lightv-ui-vue'
Vue.use(Tabs) //Vue.component('l-tabs', Tabs)
```


## 预览
&nbsp;
<ClientOnly>
    <tabs-demo></tabs-demo>
</ClientOnly>

## 使用方法
此组件的 l-tabs l-tabs-item l-tabs-pane 必须有一一对应的 name。
```vue
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
        <l-tabs-item name='tab4'>Tab4</l-tabs-item>
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
  export default {
    data() { return { selectedTab: 'tab1' } }
  }
</script>
```

## 选项
1. 默认高亮状态

l-tabs 需要设置<span style='color:#3eaf7c;background-color:#F8F8F8'> selected </span>属性来确定默认标签。  
你可以这样：`:selected.sync="selectedTab"`, 其中 <span style='color:#3eaf7c;background-color:#F8F8F8'>selectedTab </span>是你需要传递的默认值。  
并且该标签的子组件应该是 l-tabs-head 和 l-tabs-body ，否则你会得到一个警告。


2. disabled 状态

 <span style='color:#3eaf7c;background-color:#F8F8F8'>disabled</span> 属性用于 l-tabs-item 标签，可以设置该标签的不可用状态。