<template>
  <!-- 面包屑导航 -->
  <div class="main">
    <el-breadcrumb separator="/home">
      <el-breadcrumb-item>首页</el-breadcrumb-item>
    </el-breadcrumb>
    <div>
      <img :src="shouye" />
    </div>
  </div>
</template>
<script>
import shouye from "../../assets/image/shouye.png";
export default {
  data() {
    return {
      shouye
    };
  }
};
</script>
<style scoped>
.main {
  width: 85%;
}
.el-breadcrumb {
  width: 100%;
  height: 80px;
  line-height: 80px;
  padding-left: 20px;
  color: #97a8be;
  background-color: #eff2f7;
}
.main img {
  margin: 30px 0 0 30px;
}
</style>
