<template>
  <div class="fillcontain">
    <!-- 头部标题 -->
    <div class="header_container">
      <div class="el-breadcrumb">
        <span class="el-breadcrumb__item">
          <span class="el-breadcrumb__item__inner">首页</span>
          <span class="el-breadcrumb__separator">/</span>
        </span>
        <span class="el-breadcrumb__item">
          <span class="el-breadcrumb__item__inner">数据管理</span>
          <span class="el-breadcrumb__separator">/</span>
        </span>
        <span class="el-breadcrumb__item">
          <span class="el-breadcrumb__item__inner">用户列表</span>
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

    <!-- 用户列表 -->
    <el-table :data="tableData2" style="width: 100%;padding:20px" :row-class-name="tableRowClassName">
      <el-table-column prop="date" label="日期" width="180">
      </el-table-column>
      <el-table-column prop="name" label="姓名" width="180">
      </el-table-column>
      <el-table-column prop="address" label="地址">
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
  methods: {
    tableRowClassName({ row, rowIndex }) {
      if (rowIndex === 1) {
        return "warning-row";
      } else if (rowIndex === 3) {
        return "success-row";
      }
      return "";
    }
  },
  data() {
    return {
      tableData2: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        }
      ]
    };
  }
};
</script>
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
.el-breadcrumb {
  font-size: 13px;
  line-height: 1;
}
.el-breadcrumb__item {
  float: left;
}
.el-dropdown {
  color: #48576a;
  font-size: 14px;
  display: inline-block;
  position: relative;
}
.avator {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  margin-right: 37px;
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
.el-table .warning-row {
  background: oldlace;
}

.el-table .success-row {
  background: #f0f9eb;
}
.fillcontain {
  height: 100%;
  width: 85%;
}
</style>
