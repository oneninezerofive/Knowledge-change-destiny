import Vue from 'vue'
//第三方组件
import {
    Aside,
    Container,
    Header, //头部栏
    Main, //中心栏
    Menu, //侧边导航
    Submenu,
    MenuItem,
    MenuItemGroup,
    Col,
    Table,    //表格
    TableColumn,
} from 'element-ui'

export default () => {
    Vue.use(Container);
    Vue.use(Aside);
    Vue.use(Main);
    Vue.use(Header);
    Vue.use(Menu);
    Vue.use(Submenu);
    Vue.use(MenuItem);
    Vue.use(MenuItemGroup);
    Vue.use(Col);
    Vue.use(Table);
    Vue.use(TableColumn);
}