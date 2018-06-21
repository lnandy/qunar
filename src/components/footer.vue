<template>
	<div class="container">
		<div class="footer">
			<div>
				<i class="icon-entrance camel icon-new"></i>
				<p>下载APP</p>
			</div>
			<div>
				<i class="icon-entrance order icon-new"></i>
				<p>我的订单</p>
			</div>
			<div>
				<i class="icon-entrance2 user icon-new"></i>
				<p>我的</p>
			</div>
		</div>
		<div class="fo">
			<span class="qt-grey">Qunar 京ICP备05021087</span>
			<span>意见反馈</span>
			<span>关于我们</span>
		</div>
    </div>
</template>
<script>
	export default {
		data () {
			return {
				
			}
		}
	}
</script>
<style scoped>
	@font-face {
	    font-family: 'QEntranceFont2';
	    src: url('//s.qunarzz.com/touch_home/font/1.0.0/touch_home.eot');
	    src: url('//s.qunarzz.com/touch_home/font/1.0.0/touch_home.woff') format('woff'),url('//s.qunarzz.com/touch_home/font/1.0.0/touch_home.ttf') format('truetype'),url('//s.qunarzz.com/touch_home/font/1.0.0/touch_home.svg#iconfont') format('svg')
	}
	.footer{
		display: flex;
		flex-wrap: wrap;
		padding: 0 20px;
	}
	.footer > div{
		flex: 1;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		height: 82px;
	}
	.footer p{
		margin: 0;
		font-size: 10px;
	}
	.footer i{
		width: 40px;
	    height: 40px;
	    line-height: 40px;
	    font-size: 28px;
	    border: 1px solid #dedede;
	    border-radius: 20px;
	    text-align: center;
	    color: #666;
	    background-color: #fcfcfc;
	}
	.icon-entrance {
		font-family: 'QEntranceFont';
		font-weight: normal;
		font-style: normal;
		text-decoration: inherit;
		-webkit-font-smoothing: antialiased;
		display: inline-block;
		width: auto;
		height: auto;
		line-height: inherit;
		vertical-align: baseline;
		background-image: none;
		background-position: 0 0;
		background-repeat: repeat;
		margin: 0 3px;
	}
	.icon-entrance:not(.disabled):active {
		opacity: .8
	}
	.icon-new {
		font-family: 'QEntranceFont2';
		font-style: normal;
	}
	.fo{
		flex: none !important;
		background-color: #eee;
		width: 100%;
		height: 54px !important;
		font-size: 10px;
		display: flex;
		align-items: center;
	}
	.qt-grey{
		color: #8c8c8c
	}
	.fo > span:first-child{
		padding: 0 10px;
	}
	.fo > span:nth-child(2){
		width: 25%;
		text-align: center;
	}
	.fo > span:nth-child(3){
		width: 25%;
		text-align: center;
	}
</style>