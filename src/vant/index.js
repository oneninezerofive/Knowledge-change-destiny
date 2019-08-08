import Vue from 'vue'
// 第三方组件
import {
    Collapse, //折叠面板
    CollapseItem
} from 'vant';

export default () => {
    Vue.use(Collapse).use(CollapseItem);
}