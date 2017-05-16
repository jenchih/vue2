<template>
	<div class="article-type">
		<el-button type="primary"  @click="resetForm('form')">添加文章类型</el-button>
		<br >
		<br >
		<el-table
		:data="tableData"
		border
		style="width: 100%">
		<el-table-column
		  label="名称"
		  width="180">
		  <template scope="scope">
			<el-icon class="el-icon-edit"></el-icon>
			<span style="margin-left: 10px">{{ scope.row.name }}</span>
		  </template>
		</el-table-column>
		<el-table-column
		  label="排序"
		  width="180">
		  <template scope="scope">
		  <el-icon class="el-icon-d-caret"></el-icon>
			<span style="margin-left: 10px">{{ scope.row.desc }}</span>
		  </template>
		</el-table-column>
		
		<el-table-column
		  label="创建时间"
		  width="250">
		  <template scope="scope">
		  <el-icon class="el-icon-time"></el-icon>
			<span style="margin-left: 10px">{{ scope.row.time }}</span>
		  </template>
		</el-table-column>

		<el-table-column label="操作">
		  <template scope="scope">
			<el-button
			  type="success"
			  size="small"
			  @click="handleEdit(scope.row)">编辑</el-button>
			<el-button
			  size="small"
			  type="danger"
			  @click="handleDelete(scope.row)">删除</el-button>
		  </template>
		</el-table-column>
	  </el-table>
		<template>
			<el-dialog title="收货地址" v-model="dialogFormVisible">
			  <el-form ref="form" :model="form"  :rules="rules">
				<el-form-item label="文章类型名称" :label-width="formLabelWidth"  prop="name">
					<el-input v-model="form.name" auto-complete="off"></el-input>
				</el-form-item>
				<el-form-item label="排序" :label-width="formLabelWidth" prop="desc">
					<el-input v-model="form.desc" auto-complete="off" pacleholder="sss"></el-input>
				</el-select>
				</el-form-item>
			  </el-form>
			  <div slot="footer" class="dialog-footer">
				<el-button @click="dialogFormVisible = false">取 消</el-button>
				<el-button type="primary" @click="submitForm('form')">确 定</el-button>
			  </div>
			</el-dialog>
		</template>
	</div>
</template>

<script>
import remote from '@/fetch/api'
	export default {
		data(){
			return {
				tableData: [],
				dialogFormVisible: false,
				form: {
				  name: '',
				  desc: '',
				  id : 0,
				},
				formLabelWidth: '120px',
				rules :{
					desc : [
						{ required: true, message: '排序不能为空'}
						// { type: 'number', message: '排序必须为数字值'}
					],
					name : [
						{ required: true, message: '名称不能为空'},
					]
				}
			}
		},
		created(){
			this.getData();
		},
		methods : {
			getData(){
				remote.post('/boss/index/getTypeList').then(data => {
					this.tableData = data.data.data
				})
			},
			submitForm(formName) {
				this.$refs[formName].validate((valid) => {
				if (valid)
				{
					let sendParams = {
						name : this.form.name,
						sort : this.form.desc,
						id   : this.form.id
					}
					remote.post('/boss/index/setType',sendParams).then(data => {
						if(data.data.code == 200 )
						{
							this.$message.success(data.data.message)
							this.getData();
						}
						else
						{
							this.$message.error(data.data.message)
						}
						this.dialogFormVisible = false;
					}).catch(error => {
						this.$message.error('系统出错了,请重试·······');
					})
				}
				else 
				{
					console.log('error submit!!');
					return false;
				 }
				});
			},
			resetForm(formName) {
			  	this.dialogFormVisible = true
			  	this.$refs[formName].resetFields();
			},
			handleEdit(item){
				this.form.name = item.name
				this.form.desc = item.desc
				this.form.id = item.id
				this.dialogFormVisible = true
			},
			handleDelete(item){
				remote.post('/boss/index/delType',{'tid':item.id}).then(data => {
					if(data.data.code == 200 )
					{
						this.$message.success(data.data.message)
						this.getData();
					}
					else
					{
						this.$message.error(data.data.message)
					}
				}).catch(error => {
					this.$message.error('系统出错了,请重试·······');
				})
			}
		}
	}
</script>
<style scoped>
</style>