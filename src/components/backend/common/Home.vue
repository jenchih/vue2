<template>
    <div class="wrapper">
        <v-head></v-head>
        <v-sidebar></v-sidebar>
        <div class="content">
            <transition name="move" mode="out-in"><router-view></router-view></transition>
        </div>
    </div>
</template>
<style scoped>
    @import "../../../../static/css/color-dark.css";
</style>
<script>
	import vHead from './Header.vue';
	import vSidebar from './Sidebar.vue';
	import remote from '@/fetch/api'

	export default {
		components:{
			vHead, vSidebar
		},
		created () {
			this.test()
		},
		watch : {
		},
		methods : {
			test(){
				remote.post('/boss/user/getSes').then(function(data){
					console.log(data);
				})
				console.log('初始化。验证是否登录');
			}
		}
	}
</script>