import Vue from 'vue'
import Router from 'vue-router'
import Jenchih from '@/components/home/page/Jenchih'
import Leslie from '@/components/home/page/Leslie'
import Home from '@/components/home/common/Home'
import Boss from '@/components/backend/common/Boss'
import Login from '@/components/backend/page/Login'

const UserHome = { template: '<div>Home</div>' }
const UserPOST = { template: '<div>UserPOST</div>' }
Vue.use(Router)
export default new Router({
	routes: [
		{
			path: '/',
			name: 'Home',
			component: Home,
			children:[
				{
					path: '/jenchih',
					component: Jenchih
				}
			]
		},
		{
			path: '/boss',
			name: 'Boss',
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
		}
	]
})
