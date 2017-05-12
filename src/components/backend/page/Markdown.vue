<template>
	<div>
		<div class="crumbs">
			<el-breadcrumb separator="/">
				<el-breadcrumb-item><i class="el-icon-date"></i> 表单</el-breadcrumb-item>
				<el-breadcrumb-item>markdown</el-breadcrumb-item>
			</el-breadcrumb>
		</div>
		<markdown-editor v-model="content" :configs="configs" ref="markdownEditor"></markdown-editor>
		<el-button @click="sublimt" type="primary">确认提交</el-button>
		<!-- https://github.com/miaolz123/vue-markdown -->
	</div>
</template>

<script>
	import { markdownEditor } from 'vue-simplemde';
	import remote from '@/fetch/api';

	export default {
		data (){
			return {
				content : '',
				configs : {
					status: true,
					renderingConfig: {
						codeSyntaxHighlighting: true,
						highlightingTheme: 'atom-one-light'
					}
				}
			}
		},
		components:{
			markdownEditor
		},
		created(){
			this.content = 'Hello World'
		},
		methods : {
			sublimt(){
				// remote.post('/boss/user/loginvalid')
				console.log(this.content)
			},
			
		}
	}
</script>