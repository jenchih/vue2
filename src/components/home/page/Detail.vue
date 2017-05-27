<template>
	<div class="detail" v-loading.fullscreen.lock="fullscreenLoading">
		<mavon-editor  v-model="value"  :subfield="isShow" :toolbarsFlag="isShow" :editable="false"/>
		<!-- :value="msg" -->
	</div>
</template>

<script>
import hprose from 'hprose-html5'
import client from '@/fetch/hprose';
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
		components:{
		},
		methods : {
			getArticlDeatil(){
				var self    = this;
				let aid = self.$route.params.id;
				function *getData(){
					try	{
						self.fullscreenLoading = true;
						let data = yield client.user.getDetail(aid);
						if( data == null )
						{
							self.$router.push('/404')
						}
						else
						{
							self.value = data.content
						}
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
.detail{
	background: #fff;
	margin: auto;
}
</style>