<template>
	<div class="home">
		<h1>{{msg}}</h1>
		<v-leslie></v-leslie>
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
