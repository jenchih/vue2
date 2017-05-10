import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/common/Home'
import Jenchih from '@/components/home/page/Jenchih'
import Leslie from '@/components/home/page/Leslie'
import Article from '@/components/home/page/Article'
import Detail from '@/components/home/page/Detail'


import BHome from '@/components/backend/common/Home'
import Login from '@/components/backend/page/Login'
import Readme from '@/components/backend/page/Readme'
import Markdown from '@/components/backend/page/Markdown'

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
					path: '/article',
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
					path:'markdown',
					component: Markdown
				}
			]
		},
		,
		{
			path: '/login',
			component: Login,
		},
		{
			path: '*', redirect: '/'  //所有未定义路由重定向
		}
	]
})
