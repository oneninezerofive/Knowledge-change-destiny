import Vue from 'vue'
// 全局引入vuetouter
import VueRouter from 'vue-router'
// 安装路由
Vue.use(VueRouter)

// 第三方路由组件
import Home from '../views/Home'

// 嵌套组件
import Mian from '../views/mode/Mian' // 右侧内容
import Userlist from '../views/mode/Userlist' //用户列表
import Booklist from '../views/mode/Booklist' //图书列表
import Managers from '../views/mode/Managers' //管理员列表
import Setup from '../views/mode/Setup' //管理员设置页
import Addbook from '../views/mode/Addbook' //添加图书页
import Chart from '../views/mode/Chart' //图表页
import Explain from '../views/mode/Explain' //说明页


const routes = [{
        name: 'home',
        path: '/home',
        component: Home,
        // 嵌套路由
        children: [{
                name: 'mian',
                path: 'mian',
                component: Mian,
            }, {
                name: 'userlist',
                path: 'userlist',
                component: Userlist,
            }, {
                name: 'booklist',
                path: 'booklist',
                component: Booklist,
            }, {
                name: 'managers',
                path: 'managers',
                component: Managers,
            },
            {
                name: 'setup',
                path: 'setup',
                component: Setup,
            }, {
                name: 'addbook',
                path: 'addbook',
                component: Addbook,
            },
            {
                name: 'chart',
                path: 'chart',
                component: Chart,
            },
            {
                name: 'explain',
                path: 'explain',
                component: Explain
            }
        ]
    },
    {
        //重定向
        path: '/',
        redirect: () => {
            return '/home/mian'
        }
    }
]

const router = new VueRouter({
    routes // (缩写) 相当于 routes: routes
})


export default router