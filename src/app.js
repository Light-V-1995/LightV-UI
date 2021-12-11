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

import createElement from 'vue'

const h = createElement

new Vue({
    el:'#app',
    data:{
        loading1: false,
        loading2: true,
        loading3: false,
        message: 'hi'
    },
    created() {
    },
    methods:{
        showToast1(){
            this.showToast('top')
        },
        showToast2(){
            this.showToast('middle')
        },
        showToast3(){
            this.showToast('bottom')
        },
        showToast(position){
            this.$toast(`你的智商目前为 ${parseInt(Math.random() * 100)}。你的智商需要充值！`, {
                position,
                enableHtml: false,
                closeButton: {
                    text: '已充值',
                    callback () {
                        console.log('他说已经充值智商了')
                    }
                },
                autoClose: 3,
            })
        }
    }
})




