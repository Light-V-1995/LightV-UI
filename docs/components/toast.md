---
title: 'Toast - 弹出提示框'
---
# 弹出提示框

## 组件注册
```vue
import { Toast } from 'lightv-ui-vue'
Vue.use(Toast)
```

## 预览
&nbsp;
<ClientOnly>
  <toast-demo></toast-demo>
</ClientOnly>

## 使用方法

需要引入 Toast 组件，然后在方法中通过<span style='color:#3eaf7c;background-color:#F8F8F8'> this.$toast </span> 使用。

代码  
```vue
<template>
  <div>
    <l-button @click="auto">设置 zIndex</l-button>
    <l-button @click="auto">会自动关闭</l-button>
    <l-button @click="auto">点击按钮才关闭</l-button>
    <l-button @click="auto">支持 HTML 语法</l-button>
    <br>
    <l-button @click="top">上方弹出</l-button>
    <l-button @click="middle">中间弹出</l-button>
    <l-button @click="bottom">下方弹出</l-button>
  </div>
</template>
<script>
  export default {
    methods: {
      auto() {
        this.$toast('我是 toast 内容', {
          zIndex:30,
          autoClose: 5,
          closeButton: {
          text:'确定',
            callback:()=>{
            console.log('回调的输出')
            }
          },
          enableHTML:true
        })
      },
      top(){
        this.$toast('我是 toast 内容', { position: 'top' })
      },
      middle(){
        this.$toast('我是 toast 内容', { position: 'middle' })
      },
      bottom(){
        this.$toast('我是 toast 内容', { position: 'bottom' })
      },
    }
  }
</script>
```

## 选项
1. zIndex  
此选项用于设定 Toast 组件在当前堆叠上下文中的堆叠层级。默认为20。(这是因为再使用 vuepress 编写文档时发现值为 20 才有效。)  
若你的项目不可见 Toast 组件，尝试传入一个 <span style='color:#3eaf7c;background-color:#F8F8F8'>zIndex </span> 试试。
2. autoClose
此选项可以设定 Toast 自动关闭的延时。单位为“ 秒 ”，默认延时 5 秒后自动关闭。  

3. closeButton  
Toast 组件的右侧按钮文本可编辑，并且支持传入一个回调。 closeButton 选项接收一个对象。对象包括 text 与 callback 属性。用于设定按钮的文本与回调。  

4. enableHtml  
Toast 组件还支持 HTML 语法，该功能默认关闭，你需要传递一个 enableHTML 参数来开启它, `enableHtml:true` 。 开启后就可以在 Toast 内容区域写 HTML 语法。

5. position  
可以设定 Toast 弹出的位置 ，支持 top, middle, bottom 三个值。

