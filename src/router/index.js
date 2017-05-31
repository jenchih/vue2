import Vue from 'vue'
import Router from 'vue-router'

const Home     =  resolve => require(['@/components/home/common/Home'], resolve)
const NotFound =  resolve => require(['@/components/home/common/NotFound'], resolve)
const Article  =  resolve => require(['@/components/home/page/Article'], resolve)
const Detail   =  resolve => require(['@/components/home/page/Detail'], resolve)

//后台
const BHome       =  resolve => require(['@/components/backend/common/Home'], resolve)
const Login       =  resolve => require(['@/components/backend/page/Login'], resolve)
const Readme      =  resolve => require(['@/components/backend/page/Readme'], resolve)
const setArticle  =  resolve => require(['@/components/backend/page/setArticle'], resolve)
const Upload      =  resolve => require(['@/components/backend/page/Upload'], resolve)
const ArticleType =  resolve => require(['@/components/backend/page/ArticleType'], resolve)
const ArticleList =  resolve => require(['@/components/backend/page/ArticleList'], resolve)


Vue.use(Router)
export default new Router({
	mode: 'history',
	routes: [
		{
			path: '/',
			component: Home,
			children:[
				{
					path: '/',
					component: Article
				},
				{
					path: '/article/:type',
					component: Article
				},
				{
					path: '/detail/:id',
					component: Detail
				}
			]
		},
		{
			path: '/admin',
			component: BHome,
			children:[
				{
					path:'/',
					component: Readme
				},
				{
					path:'readme',
					component: Readme
				},
				{
					path:'setArticle/:id',
					component: setArticle
				},
				{
					path:'upload',
					component: Upload
				},
				{
					path:'articletype',
					component: ArticleType
				},
				{
					path:'articlelist',
					component: ArticleList
				}
			]
		},
		{
			path: '/login',
			component: Login,
		},
		{
			path: '/404',
			component: NotFound,
		},
		{
			path: '*', redirect: '/404'  //所有未定义路由重定向
		},
	]
})
