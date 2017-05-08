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
	import axios from 'axios';
	export default {
		components:{
			vHead, vSidebar
		},
		created () {
			this.checkLogin();
		},
		watch : {
			'$route': 'checkLogin'
		},
		methods : {
			checkLogin(){
				axios.get('http://blog.com/boss/user/loginvalid').then(res => {
					console.log(res)
				});
				console.log('初始化。验证是否登录');
			}
		}
	}
</script>