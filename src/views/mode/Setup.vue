<template>
  <div id="setup">
    <header>
      <!-- 面包屑导航 -->
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/home/mian' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/home/addbook' }">数据管理</el-breadcrumb-item>
        <el-breadcrumb-item>管理员设置</el-breadcrumb-item>
        <img :src="userimg" class="avator" />
      </el-breadcrumb>
    </header>
  </div>
</template>

<script>
import userimg from "../../assets/image/default.jpg";
export default {
  data() {
    return {
      userimg
    };
  }
};
</script>

<style scoped>
#setup {
  width: 85%;
}
header .el-breadcrumb {
  width: 100%;
  height: 80px;
  line-height: 80px;
  padding-left: 20px;
  color: #97a8be;
  background-color: #eff2f7;
  position: relative;
}
</style>

