(function(t){function e(e){for(var n,i,l=e[0],o=e[1],c=e[2],m=0,d=[];m<l.length;m++)i=l[m],r[i]&&d.push(r[i][0]),r[i]=0;for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n]);u&&u(e);while(d.length)d.shift()();return s.push.apply(s,c||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],n=!0,l=1;l<a.length;l++){var o=a[l];0!==r[o]&&(n=!1)}n&&(s.splice(e--,1),t=i(i.s=a[0]))}return t}var n={},r={app:0},s=[];function i(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=n,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(a,n,function(e){return t[e]}.bind(null,n));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],o=l.push.bind(l);l.push=e,l=l.slice();for(var c=0;c<l.length;c++)e(l[c]);var u=o;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"0495":function(t,e,a){},"049f":function(t,e,a){"use strict";var n=a("1704"),r=a.n(n);r.a},1704:function(t,e,a){},"1a1f":function(t,e,a){"use strict";var n=a("95bd"),r=a.n(n);r.a},"1c40":function(t,e,a){"use strict";var n=a("3123"),r=a.n(n);r.a},"21d3":function(t,e,a){"use strict";var n=a("56e7"),r=a.n(n);r.a},3123:function(t,e,a){},"372f":function(t,e,a){"use strict";var n=a("72eb"),r=a.n(n);r.a},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("f751"),a("097d");var n=a("6e6d"),r=a("7d2c"),s=a.n(r),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},l=[],o={name:"app",data:function(){return{}},components:{}},c=o,u=a("2877"),m=Object(u["a"])(c,i,l,!1,null,null,null),d=m.exports,p=(a("0fae"),a("7f7f"),a("591a"));n["default"].use(p["a"]);var b=new p["a"].Store({state:{manager:{name:"",address:"",time:"",ID:""}},mutations:{setData:function(t,e){t.manager.name=e.name,t.manager.address=e.address,t.manager.time=e.time,t.manager.ID=e.ID}},actions:{}}),f=a("bc3a"),h=a.n(f),_=a("8c4f"),v=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-container",[a("el-aside",{attrs:{width:"15%"}},[a("Nav")],1),a("router-view")],1)},g=[],x=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-col",{attrs:{span:12}},[a("el-menu",{staticClass:"el-menu-vertical-demo",attrs:{"default-active":t.$route.path,"background-color":"#545c64","text-color":"#bfcbd9","active-text-color":"#ffd04b",router:""}},[a("el-submenu",{attrs:{index:"0"},nativeOn:{click:function(e){return t.gotolink(e)}}},[a("template",{slot:"title"},[a("i",{staticClass:"el-icon-menu"}),a("span",[t._v("首页")])])],2),a("el-submenu",{attrs:{index:"1"}},[a("template",{slot:"title"},[a("i",{staticClass:"el-icon-document"}),a("span",[t._v("数据管理")])]),a("el-menu-item-group",[a("el-menu-item",{attrs:{index:"Userlist"}},[t._v("用户列表")]),a("el-menu-item",{attrs:{index:"Booklist"}},[t._v("图书列表")]),a("el-menu-item",{attrs:{index:"Managers"},on:{click:t.toManagers}},[t._v("管理员列表")])],1)],2),a("el-submenu",{attrs:{index:"2"}},[a("template",{slot:"title"},[a("i",{staticClass:"el-icon-plus"}),a("span",[t._v("添加数据")])]),a("el-menu-item-group",[a("el-menu-item",{attrs:{index:"Addbook"}},[t._v("添加新书")])],1)],2),a("el-submenu",{attrs:{index:"3"}},[a("template",{slot:"title"},[a("i",{staticClass:"el-icon-star-on"}),a("span",[t._v("图表")])]),a("el-menu-item-group",[a("el-menu-item",{attrs:{index:"Chart"}},[t._v("用户分布")])],1)],2),a("el-submenu",{attrs:{index:"4"}},[a("template",{slot:"title"},[a("i",{staticClass:"el-icon-edit"}),a("span",[t._v("设置")])]),a("el-menu-item-group",[a("el-menu-item",{attrs:{index:"Setup"}},[t._v("管理员设置")])],1)],2),a("el-submenu",{attrs:{index:"5"}},[a("template",{slot:"title"},[a("i",{staticClass:"el-icon-setting"}),a("span",[t._v("说明")])]),a("el-menu-item-group",[a("el-menu-item",{attrs:{index:"Explain"}},[t._v("说明")])],1)],2)],1)],1)},C=[],y={data:function(){return{key:"",keyPath:""}},methods:{gotolink:function(){this.$router.push("/home/mian")},toManagers:function(){this.$router.push("/home/managers")}}},w=y,k=(a("5878"),Object(u["a"])(w,x,C,!1,null,"0934c161",null)),j=k.exports,$={data:function(){return{}},components:{Nav:j}},F=$,D=(a("cccb"),Object(u["a"])(F,v,g,!1,null,null,null)),O=D.exports,S=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"main"},[a("el-breadcrumb",{attrs:{separator:"/home"}},[a("el-breadcrumb-item",[t._v("首页")])],1),a("div",[a("img",{attrs:{src:t.shouye}})])],1)},I=[],T=a("8831"),E=a.n(T),R={data:function(){return{shouye:E.a}}},P=R,M=(a("7e78"),Object(u["a"])(P,S,I,!1,null,"69080f38",null)),z=M.exports,V=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"fillcontain"},[t._m(0),a("el-table",{staticStyle:{width:"100%",padding:"20px"},attrs:{data:t.tableData2,"row-class-name":t.tableRowClassName}},[a("el-table-column",{attrs:{prop:"date",label:"日期",width:"180"}}),a("el-table-column",{attrs:{prop:"name",label:"姓名",width:"180"}}),a("el-table-column",{attrs:{prop:"address",label:"地址"}})],1)],1)},A=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"header_container"},[a("div",{staticClass:"el-breadcrumb"},[a("span",{staticClass:"el-breadcrumb__item"},[a("span",{staticClass:"el-breadcrumb__item__inner"},[t._v("首页")]),a("span",{staticClass:"el-breadcrumb__separator"},[t._v("/")])]),a("span",{staticClass:"el-breadcrumb__item"},[a("span",{staticClass:"el-breadcrumb__item__inner"},[t._v("数据管理")]),a("span",{staticClass:"el-breadcrumb__separator"},[t._v("/")])]),a("span",{staticClass:"el-breadcrumb__item"},[a("span",{staticClass:"el-breadcrumb__item__inner"},[t._v("用户列表")]),a("span",{staticClass:"el-breadcrumb__separator"},[t._v("/")])])]),a("div",{staticClass:"el-dropdown"},[a("img",{staticClass:"avator",attrs:{src:"//elm.cangdu.org/img/default.jpg"}}),a("ul",{staticClass:"el-dropdown-menu",staticStyle:{display:"none"}},[a("li",{staticClass:"el-dropdown-menu__item"},[t._v("首页")]),a("li",{staticClass:"el-dropdown-menu__item"},[t._v("退出")])])])])}],B={methods:{tableRowClassName:function(t){t.row;var e=t.rowIndex;return 1===e?"warning-row":3===e?"success-row":""}},data:function(){return{tableData2:[{date:"2019-08-09",name:"小红",address:"广东省天河区元岗"},{date:"2019-08-09",name:"小风",address:"广东省天河区元岗北街"},{date:"2019-08-09",name:"小虎",address:"广东省天河区元岗"},{date:"2019-08-09",name:"小白",address:"广东省天河区元岗北街"}]}}},N=B,L=(a("21d3"),Object(u["a"])(N,V,A,!1,null,"4c3b2a0f",null)),G=L.exports,J=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"fillcontain"},[a("div",{staticClass:"table_container"},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData,"row-key":function(t){return t.index}}},[a("el-table-column",{attrs:{type:"expand"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-form",{staticClass:"demo-table-expand",attrs:{"label-position":"left",inline:""}},[a("el-form-item",{attrs:{label:"图书名称"}},[a("span",[t._v(t._s(e.row.name))])]),a("el-form-item",{attrs:{label:"图书介绍"}},[a("span",[t._v(t._s(e.row.description))])]),a("el-form-item",{attrs:{label:"作者"}},[a("span",[t._v(t._s(e.row.rating))])])],1)]}}])}),a("el-table-column",{attrs:{label:"图书名称",prop:"name"}}),a("el-table-column",{attrs:{label:"图书介绍",prop:"description"}}),a("el-table-column",{attrs:{label:"作者",prop:"rating"}}),a("el-table-column",{attrs:{label:"操作",width:"160"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{size:"small"},on:{click:function(a){return t.gai(e.$index)}}},[t._v("编辑")]),a("el-button",{attrs:{size:"small",type:"danger"},on:{click:function(a){return t.del(e.$index,t.tableData)}}},[t._v("删除\n                    ")])]}}])})],1),a("div",{staticClass:"Pagination"},[a("el-pagination",{attrs:{"current-page":t.currentPage,"page-sizes":[10,20,30,40],"page-size":10,layout:"total, prev, pager, next",total:t.count+1},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1),a("el-dialog",{attrs:{title:"修改图书信息",visible:t.dialogFormVisible},on:{"update:visible":function(e){t.dialogFormVisible=e}}},[a("el-form",{attrs:{model:t.selectTable}},[a("el-form-item",{attrs:{label:"图书名称","label-width":"100px"}},[a("el-input",{attrs:{"auto-complete":"off"},model:{value:t.selectTable.name,callback:function(e){t.$set(t.selectTable,"name",e)},expression:"selectTable.name"}})],1),a("el-form-item",{attrs:{label:"图书介绍","label-width":"100px"}},[a("el-input",{model:{value:t.selectTable.description,callback:function(e){t.$set(t.selectTable,"description",e)},expression:"selectTable.description"}})],1),a("el-form-item",{attrs:{label:"作者","label-width":"100px"}},[a("el-input",{model:{value:t.selectTable.rating,callback:function(e){t.$set(t.selectTable,"rating",e)},expression:"selectTable.rating"}})],1)],1),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.dialogFormVisible=!1}}},[t._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:t.updatebook}},[t._v("确 定")])],1)],1)],1)])},q=[],H=(a("ac6a"),a("96cf"),a("e71e")),U={data:function(){return{count:0,tableData:[],selectTable:{},dialogFormVisible:!1,selectIndex:null,currentPage:1,offset:0,limit:10}},created:function(){this.initdata()},methods:{gai:function(t){this.selectTable=this.tableData[t],this.dialogFormVisible=!0},del:function(t,e){e.splice(t,1)},initdata:function(){var t=Object(H["a"])(regeneratorRuntime.mark(function t(){var e,a,n=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$axios("http://localhost:3000/test");case 2:e=t.sent,a=e.data.reverse(),a.forEach(function(t,e){var a={};a.name=t.book,a.description=t.jianjie,a.rating=t.author,a.index=e,n.count=e,n.tableData.push(a)});case 5:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),updatebook:function(){var t=Object(H["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return this.dialogFormVisible=!1,t.next=3,this.$axios("http://localhost:3000/edit",{params:{book:this.selectTable.name,jianjie:this.selectTable.description,author:this.selectTable.rating}});case 3:t.sent;case 4:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),handleSizeChange:function(t){console.log("每页 ".concat(t," 条"))},handleCurrentChange:function(t){this.currentPage=t,this.offset=(t-1)*this.limit,this.initdata()}}},K=U,Q=(a("b258"),Object(u["a"])(K,J,q,!1,null,null,null)),W=Q.exports,X=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"managers"}},[a("header",[a("el-breadcrumb",{attrs:{separator:"/"}},[a("el-breadcrumb-item",{attrs:{to:{path:"/home/mian"}}},[t._v("首页")]),a("el-breadcrumb-item",{attrs:{to:{path:"/home/addbook"}}},[t._v("数据管理")]),a("el-breadcrumb-item",[t._v("管理员列表")]),a("img",{staticClass:"avator",attrs:{src:t.userimg}})],1)],1),a("div",{staticClass:"table"},[a("el-table",{staticClass:"tabledata",staticStyle:{width:"100%"},attrs:{data:t.tableData,border:""}},[a("el-table-column",{attrs:{prop:"name",label:"姓名",width:"180"}}),a("el-table-column",{attrs:{prop:"time",label:"注册日期",width:"180"}}),a("el-table-column",{attrs:{prop:"address",label:"地址"}}),a("el-table-column",{attrs:{prop:"ID",label:"管理员ID"}}),a("el-table-column",{attrs:{label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{size:"mini"},on:{click:function(a){return t.handleEdit(e.$index,e.row)}}},[t._v("编辑")]),a("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(a){return t.handleDelete(e.$index,e.row)}}},[t._v("删除")])]}}])})],1)],1)])},Y=[],Z=a("cf49"),tt=a.n(Z),et=(a("fc57"),{data:function(){return{userimg:tt.a,tableData:[]}},methods:{handleDelete:function(t,e){var a=this,n=e.ID;this.$confirm("你确定要删除该商品分类吗, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning",center:!0}).then(function(){a.$axios("http://localhost:3000/mgdel",{params:{mgId:n}}).then(function(){var t=Object(H["a"])(regeneratorRuntime.mark(function t(e){var n,r;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(console.log(e),n=e.data.ok,1!=n){t.next=9;break}return t.next=5,a.$axios("http://localhost:3000/mglist");case 5:r=t.sent,console.log(r),a.tableData=r.data,a.$message({type:"success",message:"删除成功!"});case 9:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}())}).catch(function(){a.$message({type:"info",message:"已取消删除"})})},handleEdit:function(t,e){this.$store.commit("setData",e),this.$router.push("./setup")}},created:function(){var t=Object(H["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$axios("http://localhost:3000/mglist");case 2:e=t.sent,this.tableData=e.data;case 4:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}()}),at=et,nt=(a("1a1f"),Object(u["a"])(at,X,Y,!1,null,null,null)),rt=nt.exports,st=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"setup"}},[a("header",[a("el-breadcrumb",{attrs:{separator:"/"}},[a("el-breadcrumb-item",{attrs:{to:{path:"/home/mian"}}},[t._v("首页")]),a("el-breadcrumb-item",{attrs:{to:{path:"/home/addbook"}}},[t._v("数据管理")]),a("el-breadcrumb-item",[t._v("管理员设置")]),a("img",{staticClass:"avator",attrs:{src:t.userimg}})],1)],1),a("div",{attrs:{id:"main"}},[a("div",[t._v("\n      姓名：\n      "),a("el-input",{attrs:{placeholder:""},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}})],1),a("div",[t._v("\n      注册地址：\n      "),a("el-input",{model:{value:t.address,callback:function(e){t.address=e},expression:"address"}})],1),a("div",[t._v("\n      注册时间：\n      "),a("el-input",{model:{value:t.time,callback:function(e){t.time=e},expression:"time"}})],1),a("div",[t._v("\n      管理员ID：\n      "),a("el-input",{attrs:{disabled:!0},model:{value:t.ID,callback:function(e){t.ID=e},expression:"ID"}})],1),a("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.setmg()}}},[t._v("编辑")])],1)])},it=[],lt={data:function(){return{userimg:tt.a,input:"",name:"",ID:"",address:"",time:""}},methods:{setmg:function(){var t=Object(H["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$axios.post("http://localhost:3000/mggai",{name:this.name,id:this.ID,address:this.address,time:this.time});case 2:e=t.sent,"设置成功"==e.data&&(alert("设置成功"),this.name="",this.ID="",this.address="",this.time="");case 4:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}()},created:function(){var t=this.$store.state.manager;this.name=t.name,this.ID=t.ID,this.address=t.address,this.time=t.time}},ot=lt,ct=(a("049f"),Object(u["a"])(ot,st,it,!1,null,"61a4cc68",null)),ut=ct.exports,mt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("el-row",{staticStyle:{"margin-top":"20px"}},[a("el-col",{attrs:{span:14,offset:4}},[a("header",{staticClass:"form_header"},[t._v("选择图书种类")]),a("el-form",{ref:"categoryForm",staticClass:"form",attrs:{model:t.categoryForm,"label-width":"110px"}},[a("el-row",{staticClass:"category_select"},[a("el-form-item",{attrs:{label:"图书种类"}},[a("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:t.selectValue.label},model:{value:t.categoryForm.categorySelect,callback:function(e){t.$set(t.categoryForm,"categorySelect",e)},expression:"categoryForm.categorySelect"}},t._l(t.categoryForm.categoryList,function(t){return a("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})}),1)],1)],1),a("el-row",{staticClass:"add_category_row",class:t.showAddCategory?"showEdit":""},[a("div",{staticClass:"add_category"},[a("el-form-item",{attrs:{label:"图书种类",prop:"name"}},[a("el-input",{model:{value:t.categoryForm.name,callback:function(e){t.$set(t.categoryForm,"name",e)},expression:"categoryForm.name"}})],1),a("el-form-item",{attrs:{label:"种类描述",prop:"description"}},[a("el-input",{model:{value:t.categoryForm.description,callback:function(e){t.$set(t.categoryForm,"description",e)},expression:"categoryForm.description"}})],1),a("el-form-item",[a("el-button",{attrs:{type:"primary"}},[t._v("提交")])],1)],1)]),a("div",{staticClass:"add_category_button",on:{click:t.addCategoryFun}},[t.showAddCategory?a("i",{staticClass:"el-icon-caret-top edit_icon"}):a("i",{staticClass:"el-icon-caret-bottom edit_icon",attrs:{slot:"icon"},slot:"icon"}),a("span",[t._v("添加图书种类")])])],1),a("header",{staticClass:"form_header"},[t._v("添加图书")]),a("el-form",{ref:"bookForm",staticClass:"form book_form",attrs:{model:t.bookForm,rules:t.bookrules,"label-width":"110px"}},[a("el-form-item",{attrs:{label:"图书名称",prop:"name"}},[a("el-input",{model:{value:t.bookForm.name,callback:function(e){t.$set(t.bookForm,"name",e)},expression:"bookForm.name"}})],1),a("el-form-item",{attrs:{label:"图书作者",prop:"author"}},[a("el-input",{model:{value:t.bookForm.author,callback:function(e){t.$set(t.bookForm,"author",e)},expression:"bookForm.author"}})],1),a("el-form-item",{attrs:{label:"图书简介",prop:"jianjie"}},[a("el-input",{model:{value:t.bookForm.jianjie,callback:function(e){t.$set(t.bookForm,"jianjie",e)},expression:"bookForm.jianjie"}})],1),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.add()}}},[t._v("确认添加图书")])],1)],1)],1)],1)],1)},dt=[],pt={data:function(){return{categoryForm:{categoryList:[{value:"小说"},{value:"科幻"},{value:"花里胡哨"},{value:"丧心病狂"}],categorySelect:"",name:"",description:""},bookForm:{name:"",jianjie:"",author:""},bookrules:{name:[{required:!0,message:"请输入图书名称",trigger:"blur"}]},showAddCategory:!1}},computed:{selectValue:function(){return this.categoryForm.categoryList[this.categoryForm.categorySelect]||{}}},methods:{addCategoryFun:function(){this.showAddCategory=!this.showAddCategory},add:function(){var t=Object(H["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return this.dialogFormVisible=!1,t.next=3,this.$axios("http://localhost:3000/add",{params:{book:this.bookForm.name,jianjie:this.bookForm.jianjie,author:this.bookForm.author}});case 3:t.sent;case 4:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}()}},bt=pt,ft=(a("372f"),Object(u["a"])(bt,mt,dt,!1,null,"09277d04",null)),ht=ft.exports,_t=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"el-col el-col-20",staticStyle:{height:"100%",overflow:"auto"},attrs:{"data-v-11f8311a":""}},[a("div",{attrs:{"data-v-11f8311a":""}},[t._m(0),a("ve-pie",{attrs:{data:t.chartData,width:"1010px"}})],1)])},vt=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"header_container"},[a("div",{staticClass:"el-breadcrumb"},[a("span",{staticClass:"el-breadcrumb__item"},[a("span",{staticClass:"el-breadcrumb__item__inner"},[t._v("首页")]),a("span",{staticClass:"el-breadcrumb__separator"},[t._v("/")])]),a("span",{staticClass:"el-breadcrumb__item"},[a("span",{staticClass:"el-breadcrumb__item__inner"},[t._v("图表")]),a("span",{staticClass:"el-breadcrumb__separator"},[t._v("/")])]),a("span",{staticClass:"el-breadcrumb__item"},[a("span",{staticClass:"el-breadcrumb__item__inner"},[t._v("用户分布")]),a("span",{staticClass:"el-breadcrumb__separator"},[t._v("/")])])]),a("div",{staticClass:"el-dropdown"},[a("img",{staticClass:"avator",attrs:{src:"//elm.cangdu.org/img/default.jpg"}})])])}],gt={data:function(){return{chartData:{columns:["日期","访问用户"],rows:[{"日期":"文学","访问用户":1393},{"日期":"艺术","访问用户":3530},{"日期":"哲学","访问用户":2923},{"日期":"天文学","访问用户":1723},{"日期":"历史","访问用户":3792},{"日期":"杂志","访问用户":4593}]}}}},xt=gt,Ct=(a("1c40"),Object(u["a"])(xt,_t,vt,!1,null,"59e9a49a",null)),yt=Ct.exports,wt=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},kt=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"el-col el-col-20",staticStyle:{height:"754px",overflow:"auto"},attrs:{"data-v-11f8311a":""}},[a("div",{staticClass:"fillcontain",attrs:{"data-v-11f8311a":""}},[a("div",{staticClass:"header_container"},[a("div",{staticClass:"el-breadcrumb"},[a("span",{staticClass:"el-breadcrumb__item"},[a("span",{staticClass:"el-breadcrumb__item__inner"},[t._v("首页")]),a("span",{staticClass:"el-breadcrumb__separator"},[t._v("/")])]),a("span",{staticClass:"el-breadcrumb__item"},[a("span",{staticClass:"el-breadcrumb__item__inner"},[t._v("说明")]),a("span",{staticClass:"el-breadcrumb__separator"},[t._v("/")])]),a("span",{staticClass:"el-breadcrumb__item"},[a("span",{staticClass:"el-breadcrumb__item__inner"},[t._v("说明")]),a("span",{staticClass:"el-breadcrumb__separator"},[t._v("/")])])]),a("div",{staticClass:"el-dropdown"},[a("img",{staticClass:"avator",attrs:{src:"//elm.cangdu.org/img/default.jpg"}}),a("ul",{staticClass:"el-dropdown-menu",staticStyle:{display:"none"}},[a("li",{staticClass:"el-dropdown-menu__item"},[t._v("首页")]),a("li",{staticClass:"el-dropdown-menu__item"},[t._v("退出")])])])]),a("p",{staticClass:"explain_text"},[t._v("node-elm后台管理系统")]),a("p",{staticClass:"explain_text"},[t._v("第一次登录的用户自动注册成为普通管理员")]),a("p",{staticClass:"explain_text"},[t._v("普通管理员可以添加，修改信息")]),a("p",{staticClass:"explain_text"},[t._v("超级管理员可以删除信息")])])])}],jt=(a("ade2"),{}),$t=Object(u["a"])(jt,wt,kt,!1,null,"4ae9767e",null),Ft=$t.exports;n["default"].use(_["a"]);var Dt=[{name:"home",path:"/home",component:O,children:[{name:"mian",path:"mian",component:z},{name:"userlist",path:"userlist",component:G},{name:"booklist",path:"booklist",component:W},{name:"managers",path:"managers",component:rt},{name:"setup",path:"setup",component:ut},{name:"addbook",path:"addbook",component:ht},{name:"chart",path:"chart",component:yt},{name:"explain",path:"explain",component:Ft}]},{path:"/",redirect:function(){return"/home/mian"}}],Ot=new _["a"]({routes:Dt}),St=Ot,It=a("f9bd"),Tt=a("1437"),Et=function(){n["default"].use(It["a"]).use(Tt["a"])},Rt=a("5c96"),Pt=a.n(Rt);n["default"].use(Pt.a);var Mt=function(){n["default"].use(Rt["Container"]),n["default"].use(Rt["Aside"]),n["default"].use(Rt["Main"]),n["default"].use(Rt["Header"]),n["default"].use(Rt["Menu"]),n["default"].use(Rt["Submenu"]),n["default"].use(Rt["MenuItem"]),n["default"].use(Rt["MenuItemGroup"]),n["default"].use(Rt["Col"]),n["default"].use(Rt["Breadcrumb"]),n["default"].use(Rt["BreadcrumbItem"]),n["default"].use(Rt["Table"]).use(Rt["TableColumn"]),n["default"].use(Rt["Button"]),n["default"].use(Rt["Form"]).use(Rt["FormItem"]),n["default"].use(Rt["Input"]).use(Rt["InputNumber"]),n["default"].use(Rt["Row"]),n["default"].use(Rt["Select"]),n["default"].use(Rt["Option"]).use(Rt["OptionGroup"]),n["default"].use(Rt["Dialog"]),n["default"].use(Rt["Pagination"])};n["default"].use(s.a),n["default"].prototype.$axios=h.a,Et(),Mt(),n["default"].config.productionTip=!1,new n["default"]({router:St,store:b,render:function(t){return t(d)}}).$mount("#app")},"56e7":function(t,e,a){},5878:function(t,e,a){"use strict";var n=a("8dc0"),r=a.n(n);r.a},"72eb":function(t,e,a){},"7e78":function(t,e,a){"use strict";var n=a("a4b1"),r=a.n(n);r.a},8831:function(t,e,a){t.exports=a.p+"img/shouye.10d7066d.png"},"8dc0":function(t,e,a){},"8f6e":function(t,e,a){},"95bd":function(t,e,a){},a4b1:function(t,e,a){},ade2:function(t,e,a){"use strict";var n=a("8f6e"),r=a.n(n);r.a},b258:function(t,e,a){"use strict";var n=a("0495"),r=a.n(n);r.a},cccb:function(t,e,a){"use strict";var n=a("d563"),r=a.n(n);r.a},cf49:function(t,e,a){t.exports=a.p+"img/default.fda40604.jpg"},d563:function(t,e,a){},fc57:function(t,e,a){}});
//# sourceMappingURL=app.105060f9.js.map