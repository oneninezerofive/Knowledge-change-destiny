<template>
  <el-container>
    <el-aside width="15%">
      <Nav />
    </el-aside>

    <!-- 路由 -->
    <router-view></router-view>
  </el-container>
</template>

<script>
import Nav from "../components/Nav.vue";
export default {
  data() {
    return {};
  },
  components: {
    Nav
  }
};
</script>


<style>
body,
div,
ul,
ol,
h1,
h2,
h3,
button,
input,
a,
select,
dl,
dt,
dd,
p {
  margin: 0;
  padding: 0;
}
.el-aside {
  min-height: 754px;
  background-color: rgb(84, 92, 100);
  color: #fff;
  text-align: center;
  float: left;
}
</style>
