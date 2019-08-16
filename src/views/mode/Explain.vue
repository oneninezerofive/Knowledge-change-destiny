<template>
    <div data-v-11f8311a="" class="el-col el-col-20" style="height:754px; overflow: auto;">
        <div data-v-11f8311a="" class="fillcontain">
            <div class="header_container">
                <div class="el-breadcrumb">
                    <span class="el-breadcrumb__item">
                        <span class="el-breadcrumb__item__inner">首页</span>
                        <span class="el-breadcrumb__separator">/</span>
                    </span>
                    <span class="el-breadcrumb__item">
                        <span class="el-breadcrumb__item__inner">说明</span>
                        <span class="el-breadcrumb__separator">/</span>
                    </span>
                    <span class="el-breadcrumb__item">
                        <span class="el-breadcrumb__item__inner">说明</span>
                        <span class="el-breadcrumb__separator">/</span>
                    </span>
                </div>
                <div class="el-dropdown"><img src="//elm.cangdu.org/img/default.jpg" class="avator">
                    <ul class="el-dropdown-menu" style="display: none;">
                        <li class="el-dropdown-menu__item">首页</li>
                        <li class="el-dropdown-menu__item">退出</li>
                    </ul>
                </div>
            </div>
            <p class="explain_text">node-elm后台管理系统</p>
            <p class="explain_text">第一次登录的用户自动注册成为普通管理员</p>
            <p class="explain_text">普通管理员可以添加，修改信息</p>
            <p class="explain_text">超级管理员可以删除信息</p>
        </div>
    </div>
</template>
<style scoped>
.fillcontain,
body,
html {
  height: 100%;
  width: 100%;
}
.header_container {
  background-color: #eff2f7;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 20px;
}
.explain_text {
  margin-top: 20px;
  text-align: center;
  font-size: 20px;
  color: #333;
}
.el-breadcrumb {
  font-size: 13px;
  line-height: 1;
}
.el-dropdown {
  color: #48576a;
  font-size: 14px;
  display: inline-block;
  position: relative;
}
.avator {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 37px;
  position: absolute;
  top: -18px;
  right: 70px;
}
.el-dropdown-menu {
  margin: 5px 0;
  border: 1px solid #d1dbe5;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.12);
  padding: 6px 0;
  z-index: 10;
  position: absolute;
  top: 0;
  left: 0;
  min-width: 100px;
}
.el-col-20 {
  width: 100%;
}
</style>
