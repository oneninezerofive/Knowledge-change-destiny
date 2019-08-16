import Vue from 'vue';
import ElementUI from 'element-ui';
Vue.use(ElementUI);
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
    Breadcrumb,//面包屑
    BreadcrumbItem,
    Table,//表格
    TableColumn,
    Button,//按钮
    Input
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
    Vue.use(Breadcrumb);
    Vue.use(BreadcrumbItem);
    Vue.use(Table).use(TableColumn);
    Vue.use(Button);
    Vue.use(Input);

}