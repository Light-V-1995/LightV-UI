import Vue from "vue";
import Button from "./button";
import Icon from "./icon";
import ButtonGroup from './button-group'
import Input from './input'
import Row from './row'
import Col from './col'
import Layout from './layout'
import Header from './header'
import Sider from './sider'
import Content from './content'
import Footer from './footer'
import Toast from './toast'
import plugin from './plugin'

Vue.component('l-button',Button)
Vue.component('l-icon', Icon)
Vue.component('l-button-group', ButtonGroup)
Vue.component('l-input', Input)
Vue.component('l-row', Row)
Vue.component('l-col', Col)
Vue.component('l-layout', Layout)
Vue.component('l-header', Header)
Vue.component('l-content', Content)
Vue.component('l-footer', Footer)
Vue.component('l-sider', Sider)
Vue.component('l-toast', Toast)
Vue.use(plugin)

new Vue({
    el:'#app',
    data:{
        loading1: false,
        loading2: true,
        loading3: false,
        message: 'hi'
    },
    methods:{
        showToast(){
            this.$toast('我是 message')
        }
    }
})




