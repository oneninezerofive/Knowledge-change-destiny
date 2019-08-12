import Vue from 'vue'
import VCharts from 'v-charts'
Vue.use(VCharts)
import App from './App.vue'
// 样式
import 'element-ui/lib/theme-chalk/index.css'

// 全局引入
import axios from 'axios'
// // Vue继承axios
Vue.prototype.$axios = axios

// 引入路由模块
import router from './routers/index';

// 引入vant的组件
import Vant from './vant/index'
Vant()

// 引入element的组件
import Element from './element/index';
Element()

Vue.config.productionTip = false

new Vue({
  // 让容器装载这个路由插件
  router,
  render: h => h(App),
}).$mount('#app')