<template>
	<div class="home-header">
		<div class="logo">
			<img src="../../../assets/leslie.jpg">
			<br>
			<div>Jenchih Leslie`s Blog</div>
		</div>
		<el-menu theme="dark"  class="el-menu-demo" mode="horizontal" router unique-opened>
			<el-menu-item index="/article/all">首页</el-menu-item>
			<div v-for="item in titles">
				<el-menu-item :index="'/article/' + item.type">{{item.name}}</a></el-menu-item>
			</div>
			<el-submenu index="2">
				<template slot="title">我的工作台</template>
				<el-menu-item index="2-1">选项1</el-menu-item>
				<el-menu-item index="2-2">选项2</el-menu-item>
				<el-menu-item index="2-3">选项3</el-menu-item>
			</el-submenu>
		</el-menu>
	</div>
</template>
<script>
export default{
	data (){
		return {
			titles : [
				{'name':'PHP','type':'php'},
				{'name':'linux','type':'linux'},
				{'name':'生活','type':'life'},
				{'name':'javascript','type':'javascript'}
			]
		}
	},
	created (){

	},
	methods : {

	}
}
</script>

<style scoped>
	.home-header{
		padding-bottom: 10px;
	}
	.logo img{
		border-radius: 70px;
		width: 130px; 
	}
	.logo{
		font-size: 48px;
		font-weight: bold;
		text-align: center;
		width: 500px;
		margin: 0 auto;
	}
</style>