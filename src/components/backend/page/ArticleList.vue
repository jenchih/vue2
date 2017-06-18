<template>
	<div class="article-list">
		<el-input
			placeholder="请输入aid"
			icon="search"
			v-model="aid"
			size='large'
			:on-icon-click="handleIconClick">
		</el-input>
		<br >
		<br >
		<el-table
		:data="tableData"
		border
		style="width: 100%">
			<el-table-column
			  label="AID"
			  width="180">
				<template scope="scope">
					<span style="margin-left: 10px">{{ scope.row.aid }}</span>
			 	</template>
			</el-table-column>
			<el-table-column
			  label="标题"
			  width="180">
				<template scope="scope">
					<el-icon class="el-icon-edit"></el-icon>
					<span style="margin-left: 10px">{{ scope.row.title }}</span>
				</template>
			</el-table-column>
			<el-table-column
			  label="文章类型"
			  width="180">
				<template scope="scope">
					<el-icon class="el-icon-star-on"></el-icon>
					<span style="margin-left: 10px">{{ scope.row.name }}</span>
				</template>
			</el-table-column>
			<el-table-column
			  label="最近修改时间"
			  width="250">
				<template scope="scope">
					<el-icon name="time"></el-icon>
					<span style="margin-left: 10px">{{ scope.row.utime }}</span>
				</template>
			</el-table-column>
			<el-table-column
			  label="创建时间"
			  width="250">
				<template scope="scope">
					<el-icon name="time"></el-icon>
					<span style="margin-left: 10px">{{ scope.row.ctime }}</span>
				</template>
			</el-table-column>
			<el-table-column
			  label="是否显示"
			  width="180">
				<template scope="scope">
					<span style="margin-left: 10px">{{ (scope.row.status == 1 ? '是' : '否')}}</span>
				</template>
			</el-table-column>
			<el-table-column label="操作">
				<template scope="scope">
					<el-button
					  size="small"
					  @click="handleEdit(scope.row)">编辑</el-button>
					<el-button
					  size="small"
					  type="info"
					  @click="handleDelete(scope.row)">{{ (scope.row.status == 1 ? '隐藏' : '显示') }}</el-button>
				</template>
			</el-table-column>
		</el-table>
		<div class="pagination">
			<el-pagination
				layout="prev, pager, next"
				@current-change="handleCurrentChange"
				:total="total">
			</el-pagination>
		</div>
	</div>
</template>

<script>
import remote from '@/fetch/api'
	export default {
		data(){
			return {
				tableData: [
					{ aid : 'aaaaaaaaaaaa',title : '标题a', name: '主题a',utime :'最近修改时间a',ctime:'创建时间a',status:1},
					{ aid : 'bbbbbbbbbbbbb',title : '标题b', name: '主题b',utime :'最近修改时间b',ctime:'创建时间b',status:0},
					{ aid : 'cccccccccccccc',title : '标题c', name: '主题c',utime :'最近修改时间c',ctime:'创建时间c',status:0},
					{ aid : 'ddddddddddddddd',title : '标题d', name: '主题d',utime :'最近修改时间d',ctime:'创建时间d',status:1},
					{ aid : 'eeeeeeeeeeeeeee',title : '标题e', name: '主题e',utime :'最近修改时间e',ctime:'创建时间e',status:1},
					{ aid : 'ffffffffffff',title : '标题f', name: '主题f',utime :'最近修改时间f',ctime:'创建时间f',status:0},
					{ aid : 'gggggggggg',title : '标题g', name: '主题g',utime :'最近修改时间g',ctime:'创建时间g',status:1},
					{ aid : 'hhhhhhhhhhhhhh',title : '标题h', name: '主题h',utime :'最近修改时间h',ctime:'创建时间h',status:0},
					{ aid : 'iiiiiiiiiiiiiiii',title : '标题i', name: '主题i',utime :'最近修改时间i',ctime:'创建时间i',status:1},
				],
				total : 100,
				aid : ''
			}
		},
		created(){
			this.getList(1);
		},
		methods : {
			getList(p){
				return false;
				remote.post('/boss/index/getArticleList',{p:p,aid:this.aid}).then(data=>{
					this.tableData = data.data.data.list
					this.total = data.data.data.total
				})
			},
			handleEdit(item) {
				this.$router.push('setArticle/'+item.id)
			},
			handleDelete(item) {
				let status = item.status == 1 ? 0 : 1;
				remote.post('/boss/index/articleDel',{id:item.id,status:status}).then(data=>{
					this.$message.success(data.data.message);
				})
			},
			handleCurrentChange( page ){
				this.getList(page)
			},
			handleIconClick()
			{
				this.getList(1)
			}
		}
	}
</script>
<style scoped>
</style>