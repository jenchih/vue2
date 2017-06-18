<template>
	<div class="home-header">
		<div class="logo">
			<img src="../../../../static/img/leslie.jpg">
			<br>
			<div>{{title}}</div>
		</div>
		<el-menu theme="dark"  class="el-menu-demo" mode="horizontal" router unique-opened>
			<el-menu-item index="/">首页</el-menu-item>
			<div v-for="item in navs">
				<el-menu-item :index="'/article/' + item.id">{{item.name}}</a></el-menu-item>
			</div>
		</el-menu>
	</div>
</template>
<script>
export default{
	data (){
		return {
			navs : [
				{ id: '1', name:'PHP' },
				{ id: '2', name:'javascript' },
				{ id: '3', name:'linux' },
				{ id: '4', name:'css' },
				{ id: '5', name:'html' }
			],
			title: 'jenchih Leslie`s Blog'
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