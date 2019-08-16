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
    <div id="main">
      <div>
        姓名：
        <el-input v-model="name" placeholder></el-input>
      </div>
      <div>
        注册地址：
        <el-input v-model="address"></el-input>
      </div>
      <div>
        注册时间：
        <el-input v-model="time"></el-input>
      </div>
      <div>
        管理员ID：
        <el-input v-model="ID"></el-input>
      </div>
      <el-button type="primary" @click="setmg()">设置</el-button>
    </div>
  </div>
</template>

<script>
import userimg from "../../assets/image/default.jpg";
export default {
  data() {
    return {
      userimg,
      input: "",
      name: "",
      ID: "",
      address: "",
      time: ""
    };
  },
  methods: {
    // 请求设置管理员信息
    async setmg() {
      await this.$axios.post("http://localhost:3000/mggai", {
        params: {
          name: this.name,
          id: this.ID,
          address: this.address,
          time: this.time
        }
      });
    }
  },
  created() {
    let manager = this.$store.state.manager;
    // console.log(this.manager);
    this.name = manager.name; //姓名
    this.ID = manager.ID; //ID
    this.address = manager.address; //地址
    this.time = manager.time; //时间
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
#main {
  margin: 0 auto;
  width: 50%;
  padding: 30px 30px;
}
#main div {
  text-align: right;
}
.el-input {
  display: inline-block;
  width: 300px;
  padding: 20px 0;
  margin-right: 200px;
}
.el-button {
  margin-left: 200px;
}
</style>

