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
    Button, //按钮
    Form,   //表单
    FormItem,
    Input,  //输入框
    InputNumber,    //计数器
    Row,    //表格
    Select, //选择器
    Option, 
    OptionGroup,
    Dialog, //对话框
    Pagination//分页
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
    Vue.use(Form).use(FormItem);
    Vue.use(Input).use(InputNumber);
    Vue.use(Row);
    Vue.use(Select);
    Vue.use(Option).use(OptionGroup);
    Vue.use(Dialog);
    Vue.use(Pagination);
}