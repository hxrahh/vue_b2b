
import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from '../component/login/login.vue'
import Register from '../component/register/register.vue'


Vue.use(VueRouter)

export default new VueRouter({
    routes:[
        {name:'login', path:'/login', component:Login},
        {name:'Register', path:'/Register', component:Register}
    ]
})