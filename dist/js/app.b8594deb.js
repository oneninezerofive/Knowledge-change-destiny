(function(t){function e(e){for(var n,l,i=e[0],o=e[1],c=e[2],m=0,d=[];m<i.length;m++)l=i[m],r[l]&&d.push(r[l][0]),r[l]=0;for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n]);u&&u(e);while(d.length)d.shift()();return s.push.apply(s,c||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],n=!0,i=1;i<a.length;i++){var o=a[i];0!==r[o]&&(n=!1)}n&&(s.splice(e--,1),t=l(l.s=a[0]))}return t}var n={},r={app:0},s=[];function l(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,l),a.l=!0,a.exports}l.m=t,l.c=n,l.d=function(t,e,a){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(l.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)l.d(a,n,function(e){return t[e]}.bind(null,n));return a},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],o=i.push.bind(i);i.push=e,i=i.slice();for(var c=0;c<i.length;c++)e(i[c]);var u=o;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"12f9":function(t,e,a){"use strict";var n=a("bbaf"),r=a.n(n);r.a},"1a1f":function(t,e,a){"use strict";var n=a("8525"),r=a.n(n);r.a},"1c4b":function(t,e,a){},"347b":function(t,e,a){"use strict";var n=a("61ba"),r=a.n(n);r.a},"372f":function(t,e,a){"use strict";var n=a("6e87"),r=a.n(n);r.a},4503:function(t,e,a){},"47e2":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("dac5"),a("6e26"),a("9604"),a("df67");var n=a("6e6d"),r=a("7d2c"),s=a.n(r),l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},i=[],o={name:"app",data:function(){return{}},components:{}},c=o,u=a("6691"),m=Object(u["a"])(c,l,i,!1,null,null,null),d=m.exports,p=(a("8720"),a("2427")),b=a.n(p),f=a("8b48"),_=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-container",[a("el-aside",{attrs:{width:"15%"}},[a("Nav")],1),a("router-view")],1)},h=[],v=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-col",{attrs:{span:12}},[a("el-menu",{staticClass:"el-menu-vertical-demo",attrs:{"default-active":t.$route.path,"background-color":"#545c64","text-color":"#bfcbd9","active-text-color":"#ffd04b",router:""}},[a("el-submenu",{attrs:{index:"0"},nativeOn:{click:function(e){return t.gotolink(e)}}},[a("template",{slot:"title"},[a("i",{staticClass:"el-icon-menu"}),a("span",[t._v("首页")])])],2),a("el-submenu",{attrs:{index:"1"}},[a("template",{slot:"title"},[a("i",{staticClass:"el-icon-document"}),a("span",[t._v("数据管理")])]),a("el-menu-item-group",[a("el-menu-item",{attrs:{index:"Userlist"}},[t._v("用户列表")]),a("el-menu-item",{attrs:{index:"Booklist"}},[t._v("图书列表")]),a("el-menu-item",{attrs:{index:"Managers"},on:{click:t.toManagers}},[t._v("管理员列表")])],1)],2),a("el-submenu",{attrs:{index:"2"}},[a("template",{slot:"title"},[a("i",{staticClass:"el-icon-plus"}),a("span",[t._v("添加数据")])]),a("el-menu-item-group",[a("el-menu-item",{attrs:{index:"Addbook"}},[t._v("添加新书")])],1)],2),a("el-submenu",{attrs:{index:"3"}},[a("template",{slot:"title"},[a("i",{staticClass:"el-icon-star-on"}),a("span",[t._v("图表")])]),a("el-menu-item-group",[a("el-menu-item",{attrs:{index:"Chart"}},[t._v("用户分布")])],1)],2),a("el-submenu",{attrs:{index:"4"}},[a("template",{slot:"title"},[a("i",{staticClass:"el-icon-edit"}),a("span",[t._v("设置")])]),a("el-menu-item-group",[a("el-menu-item",{attrs:{index:"Setup"}},[t._v("管理员设置")])],1)],2),a("el-submenu",{attrs:{index:"5"}},[a("template",{slot:"title"},[a("i",{staticClass:"el-icon-setting"}),a("span",[t._v("说明")])]),a("el-menu-item-group",[a("el-menu-item",{attrs:{index:"Explain"}},[t._v("说明")])],1)],2)],1)],1)},g=[],C={data:function(){return{key:"",keyPath:""}},methods:{gotolink:function(){this.$router.push("/home/mian")},toManagers:function(){this.$router.push("/home/managers")}}},x=C,y=(a("5878"),Object(u["a"])(x,v,g,!1,null,"0934c161",null)),w=y.exports,k={data:function(){return{}},components:{Nav:w}},j=k,F=(a("cccb"),Object(u["a"])(j,_,h,!1,null,null,null)),$=F.exports,O=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"main"},[a("el-breadcrumb",{attrs:{separator:"/home"}},[a("el-breadcrumb-item",[t._v("首页")])],1),a("div",[a("img",{attrs:{src:t.shouye}})])],1)},S=[],T=a("8831"),D=a.n(T),E={data:function(){return{shouye:D.a}}},R=E,I=(a("347b"),Object(u["a"])(R,O,S,!1,null,"abbdccb6",null)),P=I.exports,M=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"fillcontain"},[t._m(0),a("el-table",{staticStyle:{width:"100%",padding:"20px"},attrs:{data:t.tableData2,"row-class-name":t.tableRowClassName}},[a("el-table-column",{attrs:{prop:"date",label:"日期",width:"180"}}),a("el-table-column",{attrs:{prop:"name",label:"姓名",width:"180"}}),a("el-table-column",{attrs:{prop:"address",label:"地址"}})],1)],1)},z=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"header_container"},[a("div",{staticClass:"el-breadcrumb"},[a("span",{staticClass:"el-breadcrumb__item"},[a("span",{staticClass:"el-breadcrumb__item__inner"},[t._v("首页")]),a("span",{staticClass:"el-breadcrumb__separator"},[t._v("/")])]),a("span",{staticClass:"el-breadcrumb__item"},[a("span",{staticClass:"el-breadcrumb__item__inner"},[t._v("数据管理")]),a("span",{staticClass:"el-breadcrumb__separator"},[t._v("/")])]),a("span",{staticClass:"el-breadcrumb__item"},[a("span",{staticClass:"el-breadcrumb__item__inner"},[t._v("用户列表")]),a("span",{staticClass:"el-breadcrumb__separator"},[t._v("/")])])]),a("div",{staticClass:"el-dropdown"},[a("img",{staticClass:"avator",attrs:{src:"//elm.cangdu.org/img/default.jpg"}}),a("ul",{staticClass:"el-dropdown-menu",staticStyle:{display:"none"}},[a("li",{staticClass:"el-dropdown-menu__item"},[t._v("首页")]),a("li",{staticClass:"el-dropdown-menu__item"},[t._v("退出")])])])])}],V={methods:{tableRowClassName:function(t){t.row;var e=t.rowIndex;return 1===e?"warning-row":3===e?"success-row":""}},data:function(){return{tableData2:[{date:"2016-05-02",name:"王小虎",address:"上海市普陀区金沙江路 1518 弄"},{date:"2016-05-04",name:"王小虎",address:"上海市普陀区金沙江路 1518 弄"},{date:"2016-05-01",name:"王小虎",address:"上海市普陀区金沙江路 1518 弄"},{date:"2016-05-03",name:"王小虎",address:"上海市普陀区金沙江路 1518 弄"}]}}},A=V,B=(a("12f9"),Object(u["a"])(A,M,z,!1,null,"15aaa104",null)),N=B.exports,L=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"fillcontain"},[a("div",{staticClass:"table_container"},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData,"row-key":function(t){return t.index}}},[a("el-table-column",{attrs:{type:"expand"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-form",{staticClass:"demo-table-expand",attrs:{"label-position":"left",inline:""}},[a("el-form-item",{attrs:{label:"图书名称"}},[a("span",[t._v(t._s(e.row.name))])]),a("el-form-item",{attrs:{label:"图书介绍"}},[a("span",[t._v(t._s(e.row.description))])]),a("el-form-item",{attrs:{label:"作者"}},[a("span",[t._v(t._s(e.row.rating))])])],1)]}}])}),a("el-table-column",{attrs:{label:"图书名称",prop:"name"}}),a("el-table-column",{attrs:{label:"图书介绍",prop:"description"}}),a("el-table-column",{attrs:{label:"作者",prop:"rating"}}),a("el-table-column",{attrs:{label:"操作",width:"160"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{size:"small"},on:{click:function(a){return t.gai(e.$index)}}},[t._v("编辑")]),a("el-button",{attrs:{size:"small",type:"danger"},on:{click:function(a){return t.del(e.$index,t.tableData)}}},[t._v("删除\n                    ")])]}}])})],1),a("div",{staticClass:"Pagination"},[a("el-pagination",{attrs:{"current-page":t.currentPage,"page-sizes":[10,20,30,40],"page-size":10,layout:"total, prev, pager, next",total:t.count+1},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1),a("el-dialog",{attrs:{title:"修改图书信息",visible:t.dialogFormVisible},on:{"update:visible":function(e){t.dialogFormVisible=e}}},[a("el-form",{attrs:{model:t.selectTable}},[a("el-form-item",{attrs:{label:"图书名称","label-width":"100px"}},[a("el-input",{attrs:{"auto-complete":"off"},model:{value:t.selectTable.name,callback:function(e){t.$set(t.selectTable,"name",e)},expression:"selectTable.name"}})],1),a("el-form-item",{attrs:{label:"图书介绍","label-width":"100px"}},[a("el-input",{model:{value:t.selectTable.description,callback:function(e){t.$set(t.selectTable,"description",e)},expression:"selectTable.description"}})],1),a("el-form-item",{attrs:{label:"作者","label-width":"100px"}},[a("el-input",{model:{value:t.selectTable.rating,callback:function(e){t.$set(t.selectTable,"rating",e)},expression:"selectTable.rating"}})],1)],1),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.dialogFormVisible=!1}}},[t._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:t.updatebook}},[t._v("确 定")])],1)],1)],1)])},G=[],J=(a("7364"),a("f763"),a("63ff"),a("e71e")),q={data:function(){return{count:0,tableData:[],selectTable:{},dialogFormVisible:!1,selectIndex:null,currentPage:1,offset:0,limit:10}},created:function(){this.initdata()},methods:{gai:function(t){this.selectTable=this.tableData[t],this.dialogFormVisible=!0},del:function(t,e){e.splice(t,1)},initdata:function(){var t=Object(J["a"])(regeneratorRuntime.mark(function t(){var e,a,n=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$axios("http://localhost:3000/test");case 2:e=t.sent,a=e.data.reverse(),a.forEach(function(t,e){var a={};a.name=t.book,a.description=t.jianjie,a.rating=t.author,n.count=e,n.tableData.push(a)});case 5:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),updatebook:function(){var t=Object(J["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return this.dialogFormVisible=!1,t.next=3,this.$axios("http://localhost:3000/edit",{params:{book:this.selectTable.name,jianjie:this.selectTable.description,author:this.selectTable.rating}});case 3:t.sent;case 4:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),handleSizeChange:function(t){console.log("每页 ".concat(t," 条"))},handleCurrentChange:function(t){this.currentPage=t,this.offset=(t-1)*this.limit,this.initdata()}}},H=q,U=(a("b258"),Object(u["a"])(H,L,G,!1,null,null,null)),K=U.exports,Q=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"managers"}},[a("header",[a("el-breadcrumb",{attrs:{separator:"/"}},[a("el-breadcrumb-item",{attrs:{to:{path:"/home/mian"}}},[t._v("首页")]),a("el-breadcrumb-item",{attrs:{to:{path:"/home/addbook"}}},[t._v("数据管理")]),a("el-breadcrumb-item",[t._v("管理员列表")]),a("img",{staticClass:"avator",attrs:{src:t.userimg}})],1)],1),a("div",{staticClass:"table"},[a("el-table",{staticClass:"tabledata",staticStyle:{width:"100%"},attrs:{data:t.tableData,border:""}},[a("el-table-column",{attrs:{prop:"name",label:"姓名",width:"180"}}),a("el-table-column",{attrs:{prop:"time",label:"注册日期",width:"180"}}),a("el-table-column",{attrs:{prop:"address",label:"地址"}}),a("el-table-column",{attrs:{prop:"ID",label:"管理员ID"}}),a("el-table-column",{attrs:{label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{size:"mini"},on:{click:function(a){return t.handleEdit(e.$index,e.row)}}},[t._v("编辑")]),a("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(a){return t.handleDelete(e.$index,e.row)}}},[t._v("删除")])]}}])})],1)],1)])},W=[],X=a("cf49"),Y=a.n(X),Z=(a("fc57"),{data:function(){return{userimg:Y.a,tableData:[]}},methods:{handleDelete:function(t,e){var a=this,n=e.ID;this.$confirm("你确定要删除该商品分类吗, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning",center:!0}).then(function(){a.$axios("http://localhost:3000/mgdel",{params:{mgId:n}}).then(function(){var t=Object(J["a"])(regeneratorRuntime.mark(function t(e){var n,r;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(console.log(e),n=e.data.ok,1!=n){t.next=9;break}return t.next=5,a.$axios("http://localhost:3000/mglist");case 5:r=t.sent,console.log(r),a.tableData=r.data,a.$message({type:"success",message:"删除成功!"});case 9:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}())}).catch(function(){a.$message({type:"info",message:"已取消删除"})})}},created:function(){var t=Object(J["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$axios("http://localhost:3000/mglist");case 2:e=t.sent,this.tableData=e.data;case 4:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}()}),tt=Z,et=(a("1a1f"),Object(u["a"])(tt,Q,W,!1,null,null,null)),at=et.exports,nt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"setup"}},[a("header",[a("el-breadcrumb",{attrs:{separator:"/"}},[a("el-breadcrumb-item",{attrs:{to:{path:"/home/mian"}}},[t._v("首页")]),a("el-breadcrumb-item",{attrs:{to:{path:"/home/addbook"}}},[t._v("数据管理")]),a("el-breadcrumb-item",[t._v("管理员设置")]),a("img",{staticClass:"avator",attrs:{src:t.userimg}})],1)],1)])},rt=[],st={data:function(){return{userimg:Y.a}}},lt=st,it=(a("ce30"),Object(u["a"])(lt,nt,rt,!1,null,"e4b08328",null)),ot=it.exports,ct=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("el-row",{staticStyle:{"margin-top":"20px"}},[a("el-col",{attrs:{span:14,offset:4}},[a("header",{staticClass:"form_header"},[t._v("选择图书种类")]),a("el-form",{ref:"categoryForm",staticClass:"form",attrs:{model:t.categoryForm,"label-width":"110px"}},[a("el-row",{staticClass:"category_select"},[a("el-form-item",{attrs:{label:"图书种类"}},[a("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:t.selectValue.label},model:{value:t.categoryForm.categorySelect,callback:function(e){t.$set(t.categoryForm,"categorySelect",e)},expression:"categoryForm.categorySelect"}},t._l(t.categoryForm.categoryList,function(t){return a("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})}),1)],1)],1),a("el-row",{staticClass:"add_category_row",class:t.showAddCategory?"showEdit":""},[a("div",{staticClass:"add_category"},[a("el-form-item",{attrs:{label:"图书种类",prop:"name"}},[a("el-input",{model:{value:t.categoryForm.name,callback:function(e){t.$set(t.categoryForm,"name",e)},expression:"categoryForm.name"}})],1),a("el-form-item",{attrs:{label:"种类描述",prop:"description"}},[a("el-input",{model:{value:t.categoryForm.description,callback:function(e){t.$set(t.categoryForm,"description",e)},expression:"categoryForm.description"}})],1),a("el-form-item",[a("el-button",{attrs:{type:"primary"}},[t._v("提交")])],1)],1)]),a("div",{staticClass:"add_category_button",on:{click:t.addCategoryFun}},[t.showAddCategory?a("i",{staticClass:"el-icon-caret-top edit_icon"}):a("i",{staticClass:"el-icon-caret-bottom edit_icon",attrs:{slot:"icon"},slot:"icon"}),a("span",[t._v("添加图书种类")])])],1),a("header",{staticClass:"form_header"},[t._v("添加图书")]),a("el-form",{ref:"bookForm",staticClass:"form book_form",attrs:{model:t.bookForm,rules:t.bookrules,"label-width":"110px"}},[a("el-form-item",{attrs:{label:"图书名称",prop:"name"}},[a("el-input",{model:{value:t.bookForm.name,callback:function(e){t.$set(t.bookForm,"name",e)},expression:"bookForm.name"}})],1),a("el-form-item",{attrs:{label:"图书作者",prop:"author"}},[a("el-input",{model:{value:t.bookForm.author,callback:function(e){t.$set(t.bookForm,"author",e)},expression:"bookForm.author"}})],1),a("el-form-item",{attrs:{label:"图书简介",prop:"jianjie"}},[a("el-input",{model:{value:t.bookForm.jianjie,callback:function(e){t.$set(t.bookForm,"jianjie",e)},expression:"bookForm.jianjie"}})],1),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.add()}}},[t._v("确认添加图书")])],1)],1)],1)],1)],1)},ut=[],mt={data:function(){return{categoryForm:{categoryList:[{value:"小说"},{value:"科幻"},{value:"花里胡哨"},{value:"丧心病狂"}],categorySelect:"",name:"",description:""},bookForm:{name:"",jianjie:"",author:""},bookrules:{name:[{required:!0,message:"请输入图书名称",trigger:"blur"}]},showAddCategory:!1}},computed:{selectValue:function(){return this.categoryForm.categoryList[this.categoryForm.categorySelect]||{}}},methods:{addCategoryFun:function(){this.showAddCategory=!this.showAddCategory},add:function(){var t=Object(J["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return this.dialogFormVisible=!1,t.next=3,this.$axios("http://localhost:3000/add",{params:{book:this.bookForm.name,jianjie:this.bookForm.jianjie,author:this.bookForm.author}});case 3:t.sent;case 4:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}()}},dt=mt,pt=(a("372f"),Object(u["a"])(dt,ct,ut,!1,null,"09277d04",null)),bt=pt.exports,ft=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"el-col el-col-20",staticStyle:{height:"100%",overflow:"auto"},attrs:{"data-v-11f8311a":""}},[a("div",{attrs:{"data-v-11f8311a":""}},[t._m(0),a("ve-pie",{attrs:{data:t.chartData,width:"1010px"}})],1)])},_t=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"header_container"},[a("div",{staticClass:"el-breadcrumb"},[a("span",{staticClass:"el-breadcrumb__item"},[a("span",{staticClass:"el-breadcrumb__item__inner"},[t._v("首页")]),a("span",{staticClass:"el-breadcrumb__separator"},[t._v("/")])]),a("span",{staticClass:"el-breadcrumb__item"},[a("span",{staticClass:"el-breadcrumb__item__inner"},[t._v("图表")]),a("span",{staticClass:"el-breadcrumb__separator"},[t._v("/")])]),a("span",{staticClass:"el-breadcrumb__item"},[a("span",{staticClass:"el-breadcrumb__item__inner"},[t._v("用户分布")]),a("span",{staticClass:"el-breadcrumb__separator"},[t._v("/")])])]),a("div",{staticClass:"el-dropdown"},[a("img",{staticClass:"avator",attrs:{src:"//elm.cangdu.org/img/default.jpg"}})])])}],ht={data:function(){return{chartData:{columns:["日期","访问用户"],rows:[{"日期":"文学","访问用户":1393},{"日期":"艺术","访问用户":3530},{"日期":"哲学","访问用户":2923},{"日期":"天文学","访问用户":1723},{"日期":"历史","访问用户":3792},{"日期":"杂志","访问用户":4593}]}}}},vt=ht,gt=(a("d9f1"),Object(u["a"])(vt,ft,_t,!1,null,"2bb32400",null)),Ct=gt.exports,xt=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},yt=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"el-col el-col-20",staticStyle:{height:"754px",overflow:"auto"},attrs:{"data-v-11f8311a":""}},[a("div",{staticClass:"fillcontain",attrs:{"data-v-11f8311a":""}},[a("div",{staticClass:"header_container"},[a("div",{staticClass:"el-breadcrumb"},[a("span",{staticClass:"el-breadcrumb__item"},[a("span",{staticClass:"el-breadcrumb__item__inner"},[t._v("首页")]),a("span",{staticClass:"el-breadcrumb__separator"},[t._v("/")])]),a("span",{staticClass:"el-breadcrumb__item"},[a("span",{staticClass:"el-breadcrumb__item__inner"},[t._v("说明")]),a("span",{staticClass:"el-breadcrumb__separator"},[t._v("/")])]),a("span",{staticClass:"el-breadcrumb__item"},[a("span",{staticClass:"el-breadcrumb__item__inner"},[t._v("说明")]),a("span",{staticClass:"el-breadcrumb__separator"},[t._v("/")])])]),a("div",{staticClass:"el-dropdown"},[a("img",{staticClass:"avator",attrs:{src:"//elm.cangdu.org/img/default.jpg"}}),a("ul",{staticClass:"el-dropdown-menu",staticStyle:{display:"none"}},[a("li",{staticClass:"el-dropdown-menu__item"},[t._v("首页")]),a("li",{staticClass:"el-dropdown-menu__item"},[t._v("退出")])])])]),a("p",{staticClass:"explain_text"},[t._v("node-elm后台管理系统")]),a("p",{staticClass:"explain_text"},[t._v("第一次登录的用户自动注册成为普通管理员")]),a("p",{staticClass:"explain_text"},[t._v("普通管理员可以添加，修改信息")]),a("p",{staticClass:"explain_text"},[t._v("超级管理员可以删除信息")])])])}],wt=(a("bbed"),{}),kt=Object(u["a"])(wt,xt,yt,!1,null,"c70bb84a",null),jt=kt.exports;n["default"].use(f["a"]);var Ft=[{name:"home",path:"/home",component:$,children:[{name:"mian",path:"mian",component:P},{name:"userlist",path:"userlist",component:N},{name:"booklist",path:"booklist",component:K},{name:"managers",path:"managers",component:at},{name:"setup",path:"setup",component:ot},{name:"addbook",path:"addbook",component:bt},{name:"chart",path:"chart",component:Ct},{name:"explain",path:"explain",component:jt}]},{path:"/",redirect:function(){return"/home/mian"}}],$t=new f["a"]({routes:Ft}),Ot=$t,St=a("049d"),Tt=a("b417"),Dt=function(){n["default"].use(St["a"]).use(Tt["a"])},Et=a("20ad"),Rt=a.n(Et);n["default"].use(Rt.a);var It=function(){n["default"].use(Et["Container"]),n["default"].use(Et["Aside"]),n["default"].use(Et["Main"]),n["default"].use(Et["Header"]),n["default"].use(Et["Menu"]),n["default"].use(Et["Submenu"]),n["default"].use(Et["MenuItem"]),n["default"].use(Et["MenuItemGroup"]),n["default"].use(Et["Col"]),n["default"].use(Et["Breadcrumb"]),n["default"].use(Et["BreadcrumbItem"]),n["default"].use(Et["Table"]).use(Et["TableColumn"]),n["default"].use(Et["Button"]),n["default"].use(Et["Form"]).use(Et["FormItem"]),n["default"].use(Et["Input"]).use(Et["InputNumber"]),n["default"].use(Et["Row"]),n["default"].use(Et["Select"]),n["default"].use(Et["Option"]).use(Et["OptionGroup"]),n["default"].use(Et["Dialog"]),n["default"].use(Et["Pagination"])};n["default"].use(s.a),n["default"].prototype.$axios=b.a,Dt(),It(),n["default"].config.productionTip=!1,new n["default"]({router:Ot,render:function(t){return t(d)}}).$mount("#app")},5878:function(t,e,a){"use strict";var n=a("47e2"),r=a.n(n);r.a},"5a79":function(t,e,a){},"61ba":function(t,e,a){},"6e87":function(t,e,a){},8525:function(t,e,a){},8831:function(t,e,a){t.exports=a.p+"img/shouye.10d7066d.png"},b258:function(t,e,a){"use strict";var n=a("4503"),r=a.n(n);r.a},bbaf:function(t,e,a){},bbed:function(t,e,a){"use strict";var n=a("1c4b"),r=a.n(n);r.a},cccb:function(t,e,a){"use strict";var n=a("cdbf"),r=a.n(n);r.a},cdbf:function(t,e,a){},ce30:function(t,e,a){"use strict";var n=a("5a79"),r=a.n(n);r.a},cf49:function(t,e,a){t.exports=a.p+"img/default.fda40604.jpg"},d9f1:function(t,e,a){"use strict";var n=a("e855"),r=a.n(n);r.a},e855:function(t,e,a){},fc57:function(t,e,a){}});
//# sourceMappingURL=app.b8594deb.js.map