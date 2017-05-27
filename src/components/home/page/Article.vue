<template>
	<div class="article-show" v-loading.body.lock="fullscreenLoading" v-if="total > 0">
		<div class="article-list">
			<div  v-for="value in dataList" class="article">
				<router-link :to="'/detail/'+value.aid" ><h2><div class="a-title">{{value.title}}</div></h2></router-link>
				<div class="a-time">{{value.ctime}}</div>
			</div>
			
		</div>
		<div class="block">
			<el-pagination id="pagination"
			@current-change="handleCurrentChange"
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
import hprose from 'hprose-html5'
import client from '@/fetch/hprose';
export default {
	data () {
		return {
			dataList :  [],
			total : 100,
			fullscreenLoading: false
		}
	},
	created () {
		this.getList(1)  //第一页
	},
	watch :{
		$route(){
			this.getList(1)
		}
	},
	methods :{
		handleCurrentChange(p){
			this.getList(p)
		},
		getList(p){
			let self = this;
			let type = self.$route.params.type  //获取文章的类型
			function *getData(){
				try	{
					self.fullscreenLoading = true;
					var data;
					if( type == undefined )
					{
						data = yield client.user.getLatelyTimeData(p);
					}
					else
					{
						data = yield client.user.getTpyeData(type,p);
					}
					self.dataList = data.data
					self.total    = data.total
					self.fullscreenLoading = false;
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