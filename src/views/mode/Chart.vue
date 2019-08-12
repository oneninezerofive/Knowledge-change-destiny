<template>
  <div data-v-11f8311a="" class="el-col el-col-20" style="height: 100%; overflow: auto;">
    <div data-v-11f8311a="">

      <!-- 头部标题 -->
      <div class="header_container">
        <div class="el-breadcrumb">
          <span class="el-breadcrumb__item">
            <span class="el-breadcrumb__item__inner">首页</span>
            <span class="el-breadcrumb__separator">/</span>
          </span>
          <span class="el-breadcrumb__item">
            <span class="el-breadcrumb__item__inner">图表</span>
            <span class="el-breadcrumb__separator">/</span>
          </span>
          <span class="el-breadcrumb__item">
            <span class="el-breadcrumb__item__inner">用户分布</span>
            <span class="el-breadcrumb__separator">/</span>
          </span>
        </div>
        <div class="el-dropdown"><img src="//elm.cangdu.org/img/default.jpg" class="avator"> </div>
      </div>

      <!-- 图表 -->
      <ve-pie :data="chartData" width="1010px"></ve-pie>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      chartData: {
        columns: ["日期", "访问用户"],
        rows: [
          { 日期: "文学", 访问用户: 1393 },
          { 日期: "艺术", 访问用户: 3530 },
          { 日期: "哲学", 访问用户: 2923 },
          { 日期: "天文学", 访问用户: 1723 },
          { 日期: "历史", 访问用户: 3792 },
          { 日期: "杂志", 访问用户: 4593 }
        ]
      }
    };
  }
};
</script>

<style scoped>
.header_container {
  background-color: #eff2f7;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 20px;
}
.el-col-20 {
  width: 100%;
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
</style>
