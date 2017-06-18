## 技术栈介绍
1. 前端主要技术 ==vue2== ==webpack2== ==es6== 
2. 服务端主要技术 ==thinkphp5== ==swoole== ==hprose==

## 整体架构
- 博客前台展示页面数据由服务端的swoole和hprose的远程数据服务提供数据
- 博客后台管理页面数据由服务端的thinkphp5 作为restful api提供接口数据服务

## 线上博客地址 
https://jenchih.cc   （国外服务器，加载略慢，勿喷）

## 项目托管地址
- github [前端](https://github.com/jenchih/vue2)  [后台](https://github.com/jenchih/blog)

- coding [前端](https://coding.net/u/jenchih/p/vue/git)  [后台](https://coding.net/u/jenchih/p/blog/git)

## 安装步骤
	git clone git@git.coding.net:jenchih/vue.git	// 把模板下载到本地
	cd 	vue		               // 进入模板目录
	npm install	或者 cnpm install	// 安装项目依赖，等待安装完成之后

## 本地开发

	// 开启服务器，浏览器访问 http://localhost:8080
	npm run dev

## 构建生产

	// 执行构建命令，生成的dist文件夹放在服务器下即可访问
	npm run build