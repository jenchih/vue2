<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item><i class="el-icon-date"></i> 表单</el-breadcrumb-item>
                <el-breadcrumb-item>图片上传</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="content-title">支持拖拽</div>
        <el-upload
                action="/api/posts/"
                type="drag"
                :thumbnail-mode="true"
                :on-preview="handlePreview"
                :on-remove="handleRemove"
                :on-error="handleError"
                :default-file-list="fileList"
        >
            <i class="el-icon-upload"></i>
            <div class="el-dragger__text">将文件拖到此处，或<em>点击上传</em></div>
            <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
        </el-upload>
    </div>
</template>

<script>
    export default {
        data(){
            return {
            }
        },
        components: {
                
        },
        methods:{
        }
    }
</script>

<style scoped>
</style>