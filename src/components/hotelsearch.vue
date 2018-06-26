<template>
	<div class="container">
		<div class="header">
			<div @mousedown="toogleLine" data-type="day">全日房</div>
			<div @mousedown="toogleLine" data-type="hour">钟点房</div>
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
			<div class="date">
				<i class="icon calendar"></i>
				<div class="info arrow">
					<div class="check-in">
						{{(checkInTime.getMonth()+1) < 10 ? '0'+ (checkInTime.getMonth() + 1) : checkInTime.getMonth() + 1}}月{{checkInTime.getDate()}}日
						<span class="qt-light-grey">今天 入住</span>
					</div>
					<div class="leave" v-show="status == 'day'">
						{{(leaveTime.getMonth()+1) < 10 ? '0'+ (leaveTime.getMonth() + 1) : leaveTime.getMonth() + 1}}月{{leaveTime.getDate()}}日
						<span class="qt-light-grey">明天 离店 共{{getToalDay}}晚</span>
					</div>
				</div>
			</div>
			<div class="hotelName height44">
				<i class="icon search2"></i>
				<div class="info arrow" :class="level == '' ? 'qt-light-grey' : ''">
					{{hotelName || '搜索酒店名、地名、地标'}}
				</div>
			</div>
			<div class="level height44">
				<i class="icon q-star-price"></i>
				<div class="info arrow" :class="level == '' ? 'qt-light-grey' : ''">
					{{level || '不限星级价格'}}
				</div>
			</div>
			<div class="btn-box">
				<button class="submit">搜索</button>
			</div>
			<div class="other-link">
				<p class="qt-br-x1 recent">最近浏览</p>
				<p class="qt-br-x1 discover-hotel"><a href="http://touch.qunar.com/h5/hotel/HotelChoice?cityUrl=beijing_city&amp;cityName=北京">发现酒店</a></p>
				<p class="qt-br-x1 pre-sale-hotel">今日特惠</p>
				<p class="order-list">我的订单</p>
			</div>
			<BaiduMap ak="Pbeb0ixYA5Tmt4R2yrOfq3z4tZQCzrCP"  @ready="handler" :center="center" style=""></BaiduMap>
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
				center: {lng: 0, lat: 0},
				hotelName : '',
				level: '',
				status: 'day',
				checkInTime : new Date(),
				leaveTime : new Date(new Date().setTime(new Date().getTime()+24*60*60*1000)),
				totalDay : '',
			}
		},
		methods :{
			toogleLine (event) {
				this.status = event.target.dataset.type;
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
		},
		mounted() {
			
		},
		computed: {
			getToalDay () {
				var days = this.leaveTime.getTime() - this.checkInTime.getTime(); 
				var day = parseInt(days / (1000 * 60 * 60 * 24)); 
				return day;
			}
		}
	}
</script>
<style scoped>
	.icon{
		margin-right: 0;
		line-height: unset;
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
	.content > div{
		height: 60px;
		display: flex;
		align-items: center;
	}
	.height44{
		height: 44px !important;
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
		height: 100%;
	    margin-right: 85px;
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
		height: 100% !important;
		width: 100%;
		display: flex
	}
	.date .info{
		padding-top: 6px;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
	}
	.date .info > div{
		line-height: 32px;
		font-size: 18px;
		font-weight: 400;
	}
	.date .info  span{
		font-size: 12px;
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
	.info{
		position: relative;
		width: 100%;
		height: 100%;
		margin-left: 20px;
		border-bottom: 1px solid rgba(236,236,236);
		display: flex;
		align-items: center;
	}
	.address-info.arrow:after,
	.info.arrow:after{
		right: 12px;
		transform: rotateZ(135deg);
	}
	.qt-light-grey {
	    color: #bdbdbd;
	}
	.submit {
	    width: 100%;
	    background: #ff9800;
	    border: none;
	    line-height: 40px;
	    outline: none;
	    font-size: 18px;
	    font-weight: bold;
	    border-radius: 3px;
	    color: #fff;
	}
	.btn-box{
		margin: 0 12px;
		padding: 12px 0 24px;
		text-align: center;
		height: unset;
	}
	.other-link{
		display: flex;
		padding: 0 12px 0;
		background-color: #fff;
		border-radius: 0 0 3px 3px;
		line-height: 48px;
		height: 48px !important;
		border-top: 1px solid rgba(236,236,236);
	}
	.other-link > p{
		flex: 1;
		text-align: center;
		font-size: 14px;
		color: #607d8b;
		position: relative;
		margin: 0;
	}
	.other-link > p:before {
	    border-right: 1px solid #d4d4d4;
	    content: "";
        position: absolute;
        font-size: 0;
        line-height: 0;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: none;
        -webkit-transform-origin: 0 0;
        -ms-transform-origin: 0 0;
        transform-origin: 0 0;
        box-sizing: border-box;
        pointer-events: none;
        width: 200%;
        height: 200%;
        -webkit-transform: scale(.5);
        -ms-transform: scale(.5);
        transform: scale(.5);
	}
	.other-link > p:last-child:before {
	    border-right: none;
	}
	.other-link  a,
	.other-link  a:link,
	.other-link  a:visited,
	.other-link  a:hover{
		color: #607d8b;
		text-decoration: none;
	}
</style>