<template>
	<div class="container">
		<div class="header">
			<div @mousedown="toogleLine">全日房</div>
			<div @mousedown="toogleLine">钟点房</div>
			<div class="line"></div>
		</div>
		<div class="content">
			<div class="address">
				<i class="icon location-2"></i>
				<div class="address-box">
					<div class="address-info arrow" placeholder="选择城市">{{ADDRESS_DETAIL}}</div>
					<div class="my-address" @click="handler">
						<i class="icon target-2"></i>
						<span>我的位置</span>
					</div>
					
				</div>
			</div>
			<div class="date"></div>
			<div class="hotelName"></div>
			<div class="level"></div>
			  <BaiduMap ak="Pbeb0ixYA5Tmt4R2yrOfq3z4tZQCzrCP"  @ready="handler" :center="center"></BaiduMap>
		</div>
	</div>
</template>
<script>
	import {BaiduMap} from 'vue-baidu-map'
	export default {
		props: ['url'],
		components: {
		  BaiduMap
		},
		data () {
			return {
				ADDRESS_DETAIL : '',
				center: {lng: 0, lat: 0}
			}
		},
		methods :{
			toogleLine () {
				$('.line').toggleClass('right')

			},
			handler (/*{BMap, map}*/) {
				var self = this; 
				self.ADDRESS_DETAIL = '';
		        var geolocation = new BMap.Geolocation(); 
		      	//调用百度地图api 中的获取当前位置接口
		        geolocation.getCurrentPosition(function(r){ 
		          	if(this.getStatus() == BMAP_STATUS_SUCCESS){ 
		      			//获取当前位置经纬度
			      		var myGeo = new BMap.Geocoder();
			      	 	myGeo.getLocation(new BMap.Point(r.point.lng, r.point.lat), function(result){ 
			      	 		if (result){
			      				//根据当前位置经纬度解析成地址
			      			  	self.ADDRESS_DETAIL = result.addressComponents.province+result.addressComponents.district+result.addressComponents.street; //在vuex中存入区、街道地址信息。其他地方需要使用直接调用
			      	 		}
			      		});
			      	}
		      	});
			},
		}
	}
</script>
<style scoped>
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
	.location-2{
		margin-right: 0;
	}
	.target-2{
		line-height: unset;
		margin: 0;
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
		line-height: 60px;
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