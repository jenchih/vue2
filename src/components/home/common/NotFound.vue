<template>
	<div class="all">
		<template v-if="show">
			<p>A problem has been detected and Browser has been shut down to prevent damage to your computer. </p>
			<p>404_NOT_FOUND</p>
			<p>5 seconds after you jump to the home page, you can try to find the information you need on the home page</p>
			<p>If this is the first time you've seen this stop error screen, refresh your browser. If this screen appears again, follow these steps: </p>
			<p>Check to be sure you have adequate disk space, if a driver is identified in the stop message, disable the driver or check with the manufacturer for driver updates. Try changing video adapters. </p>
			<p>Check with your hardware vendor for any BIOS updates. Disable BIOS memory options such as caching or shadowing. If you need to use safe Mode to try again, restart your browser, press Ctrl+Shift+Delete to access Clear recent History, and then beside Time range to clear, click Everything, and then select clear now. </p>
			<p>Technical information:</p>
			<p>*** STOP:0×00000001( 0×00000000，0×00000001， 0×00000002，0×00000003 )</p>
			<p>Beginning dump of physical memory</p>
			<p>physical memory dump complete</p>
			<p>Contact your system administrator or technical support group for further assistance. </p>
		</template>
		<template  v-else>
			<span class="STYLE12">&nbsp;:( </span>
			<p class="STYLE7"> 您输入的网址我们没有找到。<br />
			　　5秒后为您跳转到首页，
			您可以在首页试着找找您所需要的信息。
			</p>
			<p class="STYLE7">
				<span class="STYLE9">如果您想了解更多信息，则可以稍后在线搜索此错误: 404 页面未找到</span>
			</p>
		</template>
	</div>
</template>
<script>
export default{
	data (){
		return {
			show: true
		}
	},
	created (){
		let num = Math.round(Math.random()*100)
		this.show =  num>= 50 ? true : false;
		this.makeHeight();
	},
	methods : {
		makeHeight()
		{
			if( this.show )
			{
				document.body.style.backgroundColor = '#0402a4';
				document.body.style.fontFamily      = 'Courier, Consolas';
				document.body.style.fontSize        = '18px';
			}
			else
			{
				document.body.style.backgroundColor = '#0099CC';
			}
			document.body.style.color = '#FFFFFF';
			setTimeout(()=>{
				document.body.style.backgroundColor = '';
				document.body.style.fontFamily      = '';
				document.body.style.fontSize        = '';
				document.body.style.color           = '';
				this.$router.push('/')
			}, 5000);
		}
	}
}
</script>
<style scoped>
	p{
		margin-bottom:36px; 
	}
	.STYLE7 {
		font-size: 24px;
		font-family: "微软雅黑";
	}
	.STYLE9 {font-size: 16px}
	.STYLE12 {
		font-size: 100px;
		font-family: "微软雅黑";
	}
</style>

