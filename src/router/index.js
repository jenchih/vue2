import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/common/Home'
import Article from '@/components/home/page/Article'
import Detail from '@/components/home/page/Detail'

//后台
import BHome from '@/components/backend/common/Home'
import Login from '@/components/backend/page/Login'
import Readme from '@/components/backend/page/Readme'
import setArticle from '@/components/backend/page/setArticle'
import Upload from '@/components/backend/page/Upload'
import ArticleType from '@/components/backend/page/ArticleType'
import ArticleList from '@/components/backend/page/ArticleList'

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
			path: '/boss',
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
			path: '*', redirect: '/'  //所有未定义路由重定向
		}
	]
})
