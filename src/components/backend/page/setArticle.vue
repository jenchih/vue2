<template>
	<div>
		<div class="crumbs">
			<el-breadcrumb separator="/">
				<el-breadcrumb-item><i class="el-icon-date"></i>{{pageTitle}}</el-breadcrumb-item>
				<el-breadcrumb-item>markdown</el-breadcrumb-item>
			</el-breadcrumb>
		</div>
		<el-form :model="articleFrom" :rules="rules" ref="articleFrom" label-width="0px">
			<el-form-item prop="title">
				<el-input v-model="articleFrom.title" placeholder="文章标题"></el-input>
			</el-form-item>
			<el-form-item prop="typeid">
				<el-select v-model="articleFrom.typeid" placeholder="请选择">
					<el-option
					v-for="item in typelist"
					:label="item.name"
					:value="item.id"
					:key="item.id"
					>
					</el-option>
				</el-select>
			</el-form-item>
			<el-form-item prop="content">
				<markdown-editor v-model="articleFrom.content" :configs="configs" ref="markdownEditor"></markdown-editor>
			</el-form-item>
			<el-button @click="sublimt('articleFrom')" type="primary">确认提交</el-button>
		</el-form>
		<!-- https://github.com/miaolz123/vue-markdown -->
	</div>
</template>

<script>
	import { markdownEditor } from 'vue-simplemde';
	import remote from '@/fetch/api';

	export default {
		data (){
			return {
				pageTitle :'添加文章',
				content : '',
				articleFrom:{
					id      : 0,
					title   : '',
					typeid  : 0
				},
				rules:{
					title: [
						{ required: true, message: '请输入标题', trigger: 'blur' }
					],
					typeid: [
						{ required: true, type:'number', message: '请选择类型', trigger: 'blur' }
					],
					content: [
						{ required: true, message: '内容不能为空', trigger: 'blur' }
					]
				},
				typelist : [{'id':0,'name':'请选择'}],
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
			if( this.$route.params.id != 0  ) this.pageTitle = '修改文章'
			this.getArticleByid();
			this.getTypeList();
		},
		methods : {
			sublimt(formName){
				this.$refs[formName].validate(valid => {
					if( valid )
					{
						let sentData = {
							'content' : this.articleFrom.content,
							'title'   : this.articleFrom.title,
							'id'      : this.articleFrom.id,
							'typeid'  : this.articleFrom.typeid
						};
						remote.post('/boss/index/setArticle',sentData).then(data => {
							this.$message.success(data.data.message)
							if( data.data.code == 200 )
							{
								this.$route.push('/articleList')
							}
						})
					}
					else
					{
						this.$message.error('请填写完整数据')
					}
				})
			},
			getTypeList()
			{
				remote.post('/boss/index/getTypeList').then(data => {
					this.typelist = data.data.data
				})
			},
			getArticleByid()
			{
				let id = this.$route.params.id;
				if( id == 0 ) return; 
				remote.post('/boss/index/getArticleByid',{'id':id}).then(data=>{
					// this.articleFrom.typeid = this.typelist[0].id
					console.log(data)
				})
			}
		}
	}
</script>