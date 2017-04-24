import Vue from 'vue'
import Router from 'vue-router'
import Jenchih from '@/components/page/Jenchih'
import Leslie from '@/components/page/Leslie'
import Home from '@/components/common/Home'


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
		}
	]
})
