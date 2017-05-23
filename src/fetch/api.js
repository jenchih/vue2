import axiosModule from 'axios';
import Router from '../router/index'
import self from '../main.js'
let axios = axiosModule.create({
	baseURL : 'http://blog.com',
	responseType: 'json', // default 
	headers: {'X-Requested-With': 'XMLHttpRequest'}
})
axios.interceptors.response.use(
	data =>{
		if( Object.keys(data.data).indexOf('code') == -1 ) {
			return data;
		}
		if(data.data.code == 110) Router.push({path:'/login'});
		if(data.data.code == 404) Router.push({path:'/404'});
		return data;
	}, 
	error => {
		self.$message.error('系统发生错误,请重试·······')
		console.log(error)
		return Promise.reject(error);
});
export default axios;