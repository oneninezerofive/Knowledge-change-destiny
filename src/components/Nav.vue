<template>
  <el-col :span="12">
    <el-menu
      :default-active="$route.path"
      class="el-menu-vertical-demo"
      background-color="#545c64"
      text-color="#bfcbd9"
      active-text-color="#ffd04b"
      router
    >
      <!-- 首页 -->
      <el-submenu index="0" @click.native="gotolink">
        <template slot="title">
          <i class="el-icon-menu"></i>
          <span>首页</span>
        </template>
      </el-submenu>

      <!-- 数据管理 -->
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-document"></i>
          <span>数据管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="Userlist">用户列表</el-menu-item>
          <el-menu-item index="Booklist">图书列表</el-menu-item>
          <el-menu-item index="Managers" @click="toManagers">管理员列表</el-menu-item>
        </el-menu-item-group>
      </el-submenu>

      <!-- 添加数据 -->
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-plus"></i>
          <span>添加数据</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="Addbook">添加新书</el-menu-item>
        </el-menu-item-group>
      </el-submenu>

      <!-- 图表 -->
      <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-star-on"></i>
          <span>图表</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="Chart">用户分布</el-menu-item>
        </el-menu-item-group>
      </el-submenu>

      <!-- 管理员设置 -->
      <el-submenu index="4">
        <template slot="title">
          <i class="el-icon-edit"></i>
          <span>设置</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="Setup">管理员设置</el-menu-item>
        </el-menu-item-group>
      </el-submenu>

      <!-- 说明 -->
      <el-submenu index="5">
        <template slot="title">
          <i class="el-icon-setting"></i>
          <span>说明</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="Explain">说明</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </el-col>
</template>
<script>
export default {
  data() {
    return {
      key: "",
      keyPath: ""
    };
  },
  methods: {
    // handleOpen(key, keyPath) {
    //   // console.log(key, keyPath);
    // },
    // handleClose(key, keyPath) {
    //   // console.log(key, keyPath);
    // },
    gotolink() {
      this.$router.push("/home/mian");
    },
    // 跳管理员列表
    toManagers() {
      this.$router.push("/home/managers");
    }
  }
};
</script>

<style scoped>
.el-col-12 {
  width: 100%;
  background-color: rgb(84, 92, 100);
}
</style>
