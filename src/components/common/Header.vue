<template>
	<el-row>
		<el-col :span="12">
			<el-menu theme="dark"  class="el-menu-demo" mode="horizontal" router unique-opened @select="handleSelect">
			  <el-menu-item index="jenchih">处理中心</el-menu-item>
			  <el-submenu index="2">
			    <template slot="title">我的工作台</template>
			    <el-menu-item index="2-1">选项1</el-menu-item>
			    <el-menu-item index="2-2">选项2</el-menu-item>
			    <el-menu-item index="2-3">选项3</el-menu-item>
			  </el-submenu>
			  <el-menu-item index="/">订单管理</a></el-menu-item>
			</el-menu>
		</el-col>
	</el-row>
</template>
<script>
  export default {
    data() {
      return {

      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>