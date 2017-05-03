<template>
	<div class="detail">
		{{msg}}
	</div>
</template>

<script>
	export default {
		name : 'Detail',
		data () {
			return {
				msg : 'this is Detail app'
			}
		},
		created () {
			this.alertMsg();
		},
		methods : {
			alertMsg(){
				this.msg = '具体详细数据';
			}
		}
	}
</script>
<style scoped>

</style>