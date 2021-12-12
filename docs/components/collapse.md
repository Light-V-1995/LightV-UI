---
title: 'Collapse - 折叠面板'
---
# 折叠面板

## 组件注册
```vue
import { Collapse, CollapseItem } from 'lightv-ui-vue'
Vue.use(Collapse)  //Vue.component('l-collapse', Collapse)
```
## 预览
&nbsp;
<ClientOnly>
    <collapse-demo></collapse-demo>
</ClientOnly>
## 使用方法
```vue
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
  export default {
    data(){ return{ selected : ['1'] } },
  }
</script>
```
## 选项
1. 双向绑定  
Collapse 组件的双向绑定与 Vue 官方的类似，支持<span style='color:#3eaf7c;background-color:#F8F8F8'> .sync </span>修饰符。  
`
    <l-collapse :selected.sync="selected">
`  
2. 必选参数  
Collapse 组件必须接受两个参数： <span style='color:#3eaf7c;background-color:#F8F8F8'>title</span> 用于显示折叠面板的标题。 <span style='color:#3eaf7c;background-color:#F8F8F8'>name</span> 用于表示选中的 item。  
`
      <l-collapse-item title="标题1" name="1">1</l-collapse-item>
`  
3. 手风琴效果  
Collapse 组件还支持手风琴效果，就是只能同时显示一个面板内容,可以通过设置 <span style='color:#3eaf7c;background-color:#F8F8F8'> single </span> 属性来更改，默认是 <span style='color:#3eaf7c;background-color:#F8F8F8'> false </span>。  
预览
<ClientOnly>
    <collapse-single-demo></collapse-single-demo>
</ClientOnly>
代码  
```vue
<template>
  <div>
    <l-collapse :selected.sync="selected" single>
      <l-collapse-item title="标题1" name="1">1</l-collapse-item>
      <l-collapse-item title="标题2" name="2">2</l-collapse-item>
      <l-collapse-item title="标题3" name="3">3</l-collapse-item>
    </l-collapse>
  </div>
</template>
<script>
  export default {
    data(){ return{ selected : ['1'] } },
  }
</script>
```