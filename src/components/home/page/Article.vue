<template>
	<div class="article-show" v-loading.body.lock="fullscreenLoading" v-if="total > 0">
		<div class="article-list">
			<div  v-for="value in dataList" class="article">
				<router-link :to="'/detail/'+value.aid" ><h2><div class="a-title">{{text}}  {{value.title}}</div></h2></router-link>
				<div class="a-time">{{value.ctime}}</div>
			</div>
			
		</div>
		<div class="block">
			<el-pagination id="pagination"
			layout="prev, pager, next"
			:total="total">
			</el-pagination>
		</div>
	</div>
	<div v-else>
		<div class="article-list">
			<div class="article">
				<p>暂无数据</p>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	data () {
		return {
			dataList :  [
				{ aid:'aaaaaaaaaa',title:'测试1', ctime : '2017年6月18日00:57:46' },
				{ aid:'bbbbbbbbb',title:'测试2', ctime : '2017年6月19日00:57:46' },
				{ aid:'cccccccc',title:'测试3', ctime : '2017年6月20日00:57:46' },
				{ aid:'dddddddddddd',title:'测试4', ctime : '2017年6月21日00:57:46' },
				{ aid:'eeeeeeeeeeeee',title:'测试5', ctime : '2017年6月21日00:57:46' }
			],
			total : 100,
			fullscreenLoading: false,
			map : [
				'','PHP','javascript','linux','css','html'
			],
			text:''
		}
	},
	created () {
	},
	watch :{
		$route(){
			let index = this.$route.params.type;
			this.text = this.map[index];
		}
	},
	methods :{
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