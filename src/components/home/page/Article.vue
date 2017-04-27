<template>
	<div class="article-show">
		<div class="article-list">
			<div class="article">
				<h2><div class="a-title">Hello World</div></h2>
				<div class="a-time">2017-4-28</div>
			</div>
			<div class="article">
				<h2><div class="a-title">Hello World</div></h2>
				<div class="a-time">2017-4-28</div>
			</div>
			<div class="article">
				<h2><div class="a-title">Hello World</div></h2>
				<div class="a-time">2017-4-28</div>
			</div>
			<div class="article">
				<h2><div class="a-title">Hello World</div></h2>
				<div class="a-time">2017-4-28</div>
			</div>
		</div>
		<div class="block">
			<el-pagination id="pagination"
			layout="prev, pager, next"
			:total="1000">
			</el-pagination>
		</div>
	</div>
</template>
<script>
export default {

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