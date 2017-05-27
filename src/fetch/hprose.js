import hprose from 'hprose-html5'
let functions = {
	user: ['getLatelyTimeData','getTpyeData','getTypeList','config','getDetail'],
}
var client = hprose.Client.create('http://192.168.130.129:1314', functions);;
export default client;