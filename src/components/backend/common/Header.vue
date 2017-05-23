<template>
	<div class="header">
		<div class="logo">后台管理系统</div>
		<div class="user-info">
			<el-dropdown trigger="click" @command="handleCommand">
				<span class="el-dropdown-link">
					<img class="user-logo" src="../../../../static/img/img.jpg">
					{{username}}
				</span>
				<el-dropdown-menu slot="dropdown">
					<el-dropdown-item command="loginout">退出</el-dropdown-item>
					<el-dropdown-item command="eidtpassword">修改密码</el-dropdown-item>
				</el-dropdown-menu>
			</el-dropdown>
		</div>
		<template>
			<el-dialog title="修改密码" v-model="dialogFormVisible">
				<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
					<el-form-item label="密码" prop="pass">
						<el-input type="password" v-model="ruleForm.pass" auto-complete="off"></el-input>
					</el-form-item>
					<el-form-item label="确认密码" prop="checkPass">
						<el-input type="password" v-model="ruleForm.checkPass" auto-complete="off"></el-input>
					</el-form-item>
				</el-form>
			  <div slot="footer" class="dialog-footer">
				<el-button @click="dialogFormVisible = false">取 消</el-button>
				<el-button type="primary" @click="submitForm('ruleForm')">确 定</el-button>
			  </div>
			</el-dialog>
		</template>
	</div>
</template>

<script>
import remote from '@/fetch/api';
	export default {
		data() {
			return {
				name: 'leslie',
				dialogFormVisible: false,
				ruleForm : {
					pass : '',
					checkPass : ''
				},
				rules :{
					pass : [
						{ required: true, message: '原密码不能为空'}
					],
					checkPass : [
						{ required: true, message: '新密码不能为空'},
					]
				}
			}
		},
		computed:{
			username(){
				let username = sessionStorage.getItem('ms_username');
				if( !username )
				{
					this.$router.push('/login');
				}
				return username;
			}
		},
		methods:{
			handleCommand(command) {
				if(command == 'loginout'){
					sessionStorage.removeItem('ms_username')
					this.$router.push('/login');
				}
				if( command == 'eidtpassword' ){
					// this.dialogFormVisible = true
					// resetForm('ruleForm')
				}
			},
			submitForm(formName){
				this.$refs[formName].validate((valid) => {
					if (valid)
					{
						let sendData = {
							'oldpwd' : this.ruleForm.pass,
							'newpwd' : this.ruleForm.checkPass,
							'name'   : this.username
						}
						remote.post('/boss/index/editpwd',).then(data => {
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
				})
			},
			resetForm(formName) {
			  	this.dialogFormVisible = true
			  	this.$refs[formName].resetFields();
			},
		}
	}
</script>
<style scoped>
	.header {
		position: relative;
		box-sizing: border-box;
		width: 100%;
		height: 70px;
		font-size: 22px;
		line-height: 70px;
		color: #fff;
	}
	.header .logo{
		float: left;
		width:250px;
		text-align: center;
	}
	.user-info {
		float: right;
		padding-right: 50px;
		font-size: 16px;
		color: #fff;
	}
	.user-info .el-dropdown-link{
		position: relative;
		display: inline-block;
		padding-left: 50px;
		color: #fff;
		cursor: pointer;
		vertical-align: middle;
	}
	.user-info .user-logo{
		position: absolute;
		left:0;
		top:15px;
		width:40px;
		height:40px;
		border-radius: 50%;
	}
	.el-dropdown-menu__item{
		text-align: center;
	}
</style>
