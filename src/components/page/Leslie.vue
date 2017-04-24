<template>
	<div class="leslie">
		<h1 @click='alertMsg()'>leslie app</h1>
	</div>
</template>

<script>
	export default {
		name : 'leslie',
		data () {
			return {
				msg : 'this is leslie app'
			}
		},
		methods : {
			alertMsg(){
				alert(this.msg)
			}
		}
	}
</script>