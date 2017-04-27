<template>
	<div class="home">
		<el-row>
			<el-col :span="6">&nbsp;</el-col>
			<el-col :span="12">
				<div class="contenta">
					111111111111111111
				</div>
			</el-col>
			<el-col :span="6">&nbsp;</el-col>
		</el-row>
	</div>
</template>

<script>
	import vLeslie from './Leslie.vue';
	export default {
		name: 'home',
		data () {
			return {
				msg : 'Welcome to Your Vue.js App'
			}
		},
		components:{
            vLeslie
        }
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
