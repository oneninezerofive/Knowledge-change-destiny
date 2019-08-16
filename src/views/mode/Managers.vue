<template>
  <div id="managers">
    <header>
      <!-- 面包屑导航 -->
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/home/mian' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/home/addbook' }">数据管理</el-breadcrumb-item>
        <el-breadcrumb-item>管理员列表</el-breadcrumb-item>
        <img :src="userimg" class="avator" />
      </el-breadcrumb>
    </header>

    <div class="table">
      <!-- 表格 -->
      <el-table :data="tableData" border style="width: 100%" class="tabledata">
        <el-table-column prop="name" label="姓名" width="180"></el-table-column>
        <el-table-column prop="time" label="注册日期" width="180"></el-table-column>
        <el-table-column prop="address" label="地址"></el-table-column>
        <el-table-column prop="ID" label="管理员ID"></el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
            <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>
<script>
import userimg from "../../assets/image/default.jpg";
import "../../assets/css/managers.css";
export default {
  data() {
    return {
      userimg,
      tableData: []
    };
  },
  methods: {
    handleDelete(index, row) {
      //删除键，row可获取商品id,时间，名称，类型，价格，库存
      // console.log(index, row);
      let mgId = row.ID;

      this.$confirm("你确定要删除该商品分类吗, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
        center: true
      })
        .then(() => {
          this.$axios("http://localhost:3000/mgdel", {
            params: {
              mgId
            }
          }).then(async response => {
            // console.log(response.data);
            console.log(response);

            let res = response.data.ok;
            if (res == 1) {
              // this.tableData.splice(index, 1);
              // 重新请求数据渲染
              let newdata = await this.$axios("http://localhost:3000/mglist");
              console.log(newdata);
              // 重新刷新页面
              this.tableData = newdata.data;
              this.$message({
                type: "success",
                message: "删除成功!"
              });
            }
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    },
    handleEdit(index, row) {
      // 点击编辑按钮存储信息到仓库，并跳转设置页
      // console.log(row);
      this.$store.commit("setData", row);
      this.$router.push("./setup");
    }
  },

  // 请求表数据
  async created() {
    let mglist = await this.$axios("http://localhost:3000/mglist");
    this.tableData = mglist.data;
  }
};
</script>
<style>
tbody tr td div,
table tr th div {
  text-align: center;
}
.has-gutter tr th {
  background-color: #e7e7e7;
  color: #1f2d3d;
}
</style>


