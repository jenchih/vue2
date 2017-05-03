import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/common/Home'
import Jenchih from '@/components/home/page/Jenchih'
import Leslie from '@/components/home/page/Leslie'
import Article from '@/components/home/page/Article'
import Detail from '@/components/home/page/Detail'


import Boss from '@/components/backend/common/Boss'
import Login from '@/components/backend/page/Login'

Vue.use(Router)
export default new Router({
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
			component: Boss,
			children:[
				{
					path:'login',
					component: Login
				},
				{
					path:'',
					component: Login
				}
			]
		},
		{
			path: '*', redirect: '/'  //所有未定义路由重定向
		}
	]
})
