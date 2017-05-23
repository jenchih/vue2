<template>
	<div class="sidebar">
		<el-menu :default-active="onRoutes" class="el-menu-vertical-demo" theme="dark" unique-opened router>
			<el-menu-item index="/boss/readme">
				<i class="el-icon-setting"></i>HOME
			</el-menu-item>
			<el-menu-item index="/boss/articletype">
				<i class="el-icon-setting"></i>文章类型
			</el-menu-item>
			<el-submenu index="3">
				<template slot="title"><i class="el-icon-date"></i>文章</template>
				<el-menu-item index="/boss/articlelist">文章列表</el-menu-item>
				<el-menu-item index="/boss/setArticle/0">添加文章</el-menu-item>
			</el-submenu>
		</el-menu>
	</div>
</template>
<script>
	export default {
		computed:{
			onRoutes(){
				return this.$route.path.replace('/','');
			}
		}
	}
</script>
<style scoped>
	.sidebar{
		display: block;
		position: absolute;
		width: 250px;
		left: 0;
		top: 70px;
		bottom:0;
		background: #2E363F;
	}
	.sidebar > ul {
		height:100%;
	}
</style>
