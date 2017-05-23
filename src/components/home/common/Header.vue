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
		<!-- 	<el-submenu index="2">
				<template slot="title">我的工作台</template>
				<el-menu-item index="2-1">选项1</el-menu-item>
				<el-menu-item index="2-2">选项2</el-menu-item>
				<el-menu-item index="2-3">选项3</el-menu-item>
			</el-submenu> -->
		</el-menu>
	</div>
</template>
<script>
import hprose from 'hprose-html5'
export default{
	data (){
		return {
			navs : [],
			title: 'Jenchih Leslie`s Blog',
			uri : 'http://192.168.130.129:1314',
			functions : {
				user: ['getTpyeData','getTypeList','config'],
			}
		}
	},
	created (){
		this.init();
	},
	methods : {
		init(){
			let self = this;
			var client = new hprose.HttpClient(self.uri, self.functions);
			function *getData(){
				try	{
					self.navs  = yield client.user.getTypeList();
					let tt = yield client.user.config('title');
					if( tt != null ) self.title = tt.value
				}
				catch(e){
					self.$message.error('服务器出错啦·······请稍后重试')
				}
			}
			hprose.co(getData());
		}
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