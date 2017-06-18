<template>
	<div class="detail  markdown-body" v-loading.fullscreen.lock="fullscreenLoading" v-html="value">
	</div>
</template>

<script>
import 'mavon-editor/dist/css/index.css'
	export default {
		name : 'Detail',
		data () {
			return {
				value : '',
				fullscreenLoading : false,
				isShow : false
			}
		},
		created () {
			this.getArticlDeatil();
		},
		methods : {
			getArticlDeatil(){
				this.value = this.$route.params.id;
			}
		}
	}
</script>
<style scoped>
.detail{
	background: #fff;
	margin: auto;
	padding: 30px;
	box-sizing: border-box；
}
</style>