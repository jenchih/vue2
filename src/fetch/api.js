import axios from 'axios';
import Router from '../router/index'
export default axios.create({
	baseURL : 'http://blog.com',
	transformResponse : [function( data ){
		if( Object.keys(data).indexOf('code') == -1 ) {
			return data;
		}
		if(data.code == 404) Router.push({path:'/login'});
		return data;
	}],
	proxy: {
		host: 'http://blog.com',
	},
	responseType: 'json', // default 
	headers: {'X-Requested-With': 'XMLHttpRequest'}
})