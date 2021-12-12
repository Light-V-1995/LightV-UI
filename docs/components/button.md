---
title: 'Button - 按钮'
---

# 按钮
## 组件注册
```vue
import { Button } from 'lightv-ui-vue'
Vue.use(Button) // Vue.component('l-button', Button)
```
## 预览
&nbsp;
<ClientOnly>
  <button-demos></button-demos>
</ClientOnly>

## 使用方法
```vue
<template>
  <l-button>按钮</l-button>
  <l-button icon="settings">按钮</l-button>
  <l-button icon="settings" icon-position="right">按钮</l-button>
  <l-button :loading="true">按钮</l-button>
  <l-button icon="settings" :loading="loadStatus" @click="loadStatus=!loadStatus">按钮</l-button>
  <l-button disabled>按钮</l-button>
</template>

<script >
  export default  {
    data () {
      return { loadStatus: false }
    }
  }
</script>

```

## 选项
### 单个按钮
####  1. 图标
通过设置<span style='color:#3eaf7c;background-color:#F8F8F8'> icon </span>属性在 Button 内嵌入一个 Icon。  
通过设置<span style='color:#3eaf7c;background-color:#F8F8F8'> iconPosition </span>属性改变 Icon 在 Button 中的位置，仅支持“左，右”两个位置。
####  2. 加载中状态
通过设置<span style='color:#3eaf7c;background-color:#F8F8F8'> loading </span>属性，可以让按钮处于加载中状态。可配合<span style='color:#3eaf7c;background-color:#F8F8F8'> click </span>事件。
####  3. 不可用状态
通过设置<span style='color:#3eaf7c;background-color:#F8F8F8'> disabled </span>属性，可将按钮设置为不可用状态。

### 按钮组
预览
<ClientOnly>
    <button-group-demo></button-group-demo>
</ClientOnly>

代码
```vue
<l-button-group>
    <l-button icon="first">最前页</l-button>
    <l-button icon="left">上一页</l-button>
    <l-button icon="right">下一页</l-button>
    <l-button icon="last">最后页</l-button>
</l-button-group>
```




