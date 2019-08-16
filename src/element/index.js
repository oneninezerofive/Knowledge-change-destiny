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
<<<<<<< HEAD
=======
    Table,//表格
    TableColumn,
<<<<<<< HEAD
    Button,//按钮
    Input
=======
>>>>>>> ying
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
>>>>>>> f844f07cf703c6af48371a6b5f56c102e0a528e7
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
<<<<<<< HEAD
    Vue.use(Input);

=======
    Vue.use(Form).use(FormItem);
    Vue.use(Input).use(InputNumber);
    Vue.use(Row);
    Vue.use(Select);
    Vue.use(Option).use(OptionGroup);
    Vue.use(Dialog);
    Vue.use(Pagination);
>>>>>>> f844f07cf703c6af48371a6b5f56c102e0a528e7
}