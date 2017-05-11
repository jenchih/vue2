<template>
	<div class="detail" v-loading.fullscreen.lock="fullscreenLoading">
		{{msg}}
	</div>
</template>

<script>
	export default {
		name : 'Detail',
		data () {
			return {
				msg : 'this is Detail app',
				fullscreenLoading : false
			}
		},
		created () {
			this.getArticlDeatil();
		},
		methods : {
			getArticlDeatil(){
				let aid = this.$route.params.id;
				this.msg = '具体详细数据 : ----'+ aid;
			}
		}
	}
</script>
<style scoped>
.detail{
	background: #fff;
}
</style>