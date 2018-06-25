<template>
	<div class="container">
		<div class="header">
			<div @mousedown="toogleLine">全日房</div>
			<div @mousedown="toogleLine">钟点房</div>
			<div class="line"></div>
		</div>
		<div class="content">
			<div class="address">
				<i class="addressIcon"></i>
				<div class="address-box">
					<div class="address-info arrow" placeholder="选择城市"></div>
					<div class="my-address">
						<i class="my-address-icon"></i>
						<span>我的位置</span>
					</div>
					
				</div>
			</div>
			<div class="date"></div>
			<div class="hotelName"></div>
			<div class="level"></div>
		</div>
	</div>
</template>
<script>
	export default {
		props: ['url'],
		methods :{
			toogleLine () {
				$('.line').toggleClass('right')

			}
		}
	}
</script>
<style scoped>
	@font-face {
	    font-family: 'QTouchFont';
	    src: url(//q.qunarzz.com/mobile-hotel/prd/common/fonts/hotel_touch_common.2f8c45bd.ttf),url("//q.qunarzz.com/mobile-hotel/prd/common/fonts/hotel_touch_common.e74d96c0.woff");
	    font-weight: normal;
	    font-style: normal
	}
	.container{
		margin: 0 12px;
		display: flex;
		flex-direction: column;
		border-radius: 3px;
		background-color: #fff;
	}
	.header{
		width: 100%;
		height: 56px;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 18px;
		font-weight: 400;
		position: relative;
		border-bottom: 1px solid rgba(236,236,236);
	}
	.header > div:first-child{
		border-right: 1px solid rgba(236,236,236);
	}
	.header > div{
		margin: 10px 0;
	    padding: 0 20px;
	    text-align: center;
	    line-height: 36px;
	    flex: 1;
	}
	.line{
		background-color: #25a4bb;
	    top: 43px;
	    position: absolute;
	    left: 10%;
	    height: 3px;
	    z-index: 3;
	    width: 20%;
	    transition: all .3s ease-in;
	}
	.line.right{
		transform: translate3d(176px, 0px, 0px);
	}
	.address{
		display: flex;
		align-items: center;
		height: 60px;
	}
	.addressIcon{
		font-family: 'QTouchFont',sans-serif;
		font-weight: normal;
		font-style: normal;
		text-decoration: inherit;
		-webkit-font-smoothing: antialiased;
		display: inline;
		width: auto;
		height: auto;
		line-height: 60px;
		vertical-align: baseline;
		background-image: none;
		background-position: 0 0;
		background-repeat: repeat;
		margin: 0 3px;
		z-index: 6;
		color: #bdbdbd;
		margin-left: 20px;
	}
	.addressIcon:before{
		content: "\f0df";
	}
	.address-box{
		width: 100%;
		height: 100%;
		margin-left: 20px;
		border-bottom: 1px solid rgba(236,236,236);
		position: relative;
	}
	.address-info{
		width: 171px;
		height: 100%;
		padding-right: 35px;
		font-size: 18px;
		position: relative;
	}
	.my-address-icon{
		font-family: 'QTouchFont',sans-serif;
		font-weight: normal;
		font-style: normal;
		text-decoration: inherit;
		-webkit-font-smoothing: antialiased;
		display: inline;
		width: auto;
		height: auto;
		line-height: inherit;
		vertical-align: baseline;
		background-image: none;
		background-position: 0 0;
		background-repeat: repeat;
		margin: 0 3px;
	}
	.my-address-icon:before{
		content: "\f055"
	}
	.my-address{
		width: 80px;
	    display: flex;
	    flex-direction: column;
	    justify-content: center;
	    align-items: center;
	    right: 10px;
	    top: 10px;
	    position: absolute;
	    color: #607d8b;
	}
	.date{
		height: 60px;
		width: 100%;
	}
	.arrow:after{
		content: ' ';
	    position: absolute;
	    top: 50%;
	    right: 3px;
	    width: 6px;
	    height: 6px;
	    border: 1px solid;
	    border-bottom: 0;
	    border-right: 0;
	    margin-top: -3px;
	    color: #ccc;
	    -webkit-transform: rotateZ(-45deg);
	    transform: rotateZ(-45deg);
	}
	.address-info.arrow:after{
		right: 12px;
		transform: rotateZ(135deg);
	}
</style>