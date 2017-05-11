<template>
	<div class="article-show"  v-loading.fullscreen.lock="fullscreenLoading" >
		<div class="article-list">
			<div v-for="value in dataList" class="article">
				<router-link :to="'/detail/'+value.aid" ><h2><div class="a-title">{{value.title}}</div></h2></router-link>
				<div class="a-time">{{value.time}}</div>
			</div>
		</div>
		<div class="block">
			<el-pagination id="pagination"
			@current-change="handleCurrentChange"
			layout="prev, pager, next"
			:total="1000">
			</el-pagination>
		</div>
	</div>
</template>
<script>
// import hprose from 'hprose-html5'
export default {
	data () {
		return {
			dataList :  [
				{ 'aid':1,'title':'leslie','time':'2017-5-10 17:57:21' },
				{ 'aid':2,'title':'hello world','time':'2017-5-10 17:57:21'},
				{ 'aid':3,'title':'jenchih','time':'2017-5-10 17:57:21'  },
				{ 'aid':4,'title':'rzliao' ,'time':'2017-5-10 17:57:21' },
			],
			 fullscreenLoading: false
		}
	},
	created () {
		this.getList(1)  //第一页
	},
	watch :{
		'$route':'getList'
	},
	methods :{
		handleCurrentChange(p){
			this.getList(p)
		},
		getList(p){
			let type = this.$route.params.type  //获取文章的类型
			console.log(type);
			console.log(p);
			// var client = new hprose.HttpClient('192.168.130.129', ['hello', 'sum']);
			// console.log(client)
			// client.hello(function(){
			// 	alert(1)
			// })
		}
	}
}
</script>
<style scoped>
	.article{
		color: #324157;
		padding: 40px 40px 35px;
		margin: 40px 0 0;
		background: #fff;
	}
	.a-title{
		margin-bottom: 18px;
		font-size: 26px;
		line-height: 38px;
		letter-spacing: 1px;
		text-align: center;
	}
	.a-time{
		margin: 0px 0 -20px;
		text-align: right;
		font-size: 12px;
	}
	.article-list{
		padding-bottom: 50px;
	}
</style>