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
		},
		methods : {
		}
	}
</script>