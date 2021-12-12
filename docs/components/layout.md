---
title: 'Layout - 布局'
---
# 布局

## 组件注册
```vue
import { Layout } from 'lightv-ui-vue'
Vue.use(Layout) //Vue.component('l-layout', Layout)
```

## 预览
&nbsp;
<ClientOnly>
    <layout-demo></layout-demo>
</ClientOnly>
## 使用方法
```vue
<template>
  <div class="wrapper">
    <l-layout>
      <l-header> header </l-header>
      <l-layout>
        <l-sider> sider </l-sider>
        <l-content> content </l-content>
      </l-layout>
      <l-footer> footer </l-footer>
    </l-layout>
    <br>
    <l-layout>
      <l-header> header </l-header>
      <l-content> content </l-content>
      <l-footer> footer </l-footer>
    </l-layout>
    <br>
    <l-layout>
      <l-header> header </l-header>
      <l-layout>
        <l-sider> sider </l-sider>
        <l-layout>
          <l-content> content </l-content>
          <l-footer> footer </l-footer>
        </l-layout>
      </l-layout>
    </l-layout>
  </div>
</template>
```

## 选项
提供基础布局，样式自定义。
### 组件概述
- <span style='color:#3eaf7c;background-color:#F8F8F8'> l-layout </span>：布局容器，其下可嵌套 Header Sider Content Footer 或 Layout 本身，可以放在任何父容器中。

- <span style='color:#3eaf7c;background-color:#F8F8F8'> l-header </span>：顶部布局，其下只可嵌套 Layout，只能放在 Layout 中。

- <span style='color:#3eaf7c;background-color:#F8F8F8'> l-sider </span>：侧边栏，其下只可嵌套 Layout，只能放在 Layout 中。

- <span style='color:#3eaf7c;background-color:#F8F8F8'> l-content </span>：内容部分，其下只可嵌套 Layout，只能放在 Layout 中。

- <span style='color:#3eaf7c;background-color:#F8F8F8'> l-footer </span>：底部布局，其下只可嵌套 Layout，只能放在 Layout 中。


