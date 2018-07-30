<template>
  <div id="hotel">
      <div id="defaultInfo">
          <i class="icon previous" @click="goback"></i>
          <nav class="coupons-btn" @click="openCoupon">
              <div class="coupons-icon"></div>
              <p>代金劵</p>
          </nav>
          <div class="nearby-hotel" @click="showFrame">
              <i class="icon q-near-hotel"></i>
              <span>附近酒店</span>
          </div>
          
          <banner :url="bannerUrl"></banner>
          <hotel-search id="hotel-search" @locationAndDate = "locationAndDate" @openFrame = "showFrame"></hotel-search>
      </div>
      <i id="toSelf" class="icon previous" @click="toPageSelf"></i>
      <coupon></coupon>
      <iframe id="nearByHotel">
        
      </iframe>
  </div>
</template>

<script>

import Banner from '@/components/banner'
import Hotelsearch from '@/components/hotelsearch'
import coupon from '@/components/coupon'

export default {
  components: {'banner':Banner, 'hotel-search': Hotelsearch,'coupon': coupon},
  data () {
    return {
      nearHotelUrl: '',
      bannerUrl: 'https://simg1.qunarzz.com/site/images/wap/home/recommend/20160509_banner_750x376.jpg',
    }
  },
  methods : {
    goback () {
      this.$parent.$router.push('main');
    },
    locationAndDate (nearHotelUrl) {
      this.nearHotelUrl = nearHotelUrl;
    },
    showFrame (url) {
      var tUrl = '';
      if(typeof url == "string"){
        tUrl = url;
        $('#toSelf').addClass('findHotel');
      }else{
        tUrl = this.nearHotelUrl;
        $('#toSelf').removeClass('findHotel');
      }
      $('#nearByHotel').attr("src",tUrl);
      $('#defaultInfo').hide();
      $('#nearByHotel').show();
      $('#toSelf').show();
    },
    toPageSelf () {
      $('#nearByHotel').attr("src",'');
      $('#defaultInfo').show();
      $('#nearByHotel').hide();
      $('#toSelf').hide();
    },
    openCoupon () {
      $('.coupon-wrapper').show();
    }
  },
  mounted () {
      $('#toSelf').hide();
      $('.coupon-wrapper').hide();
  }
}
</script>
<style>
#hotel {
	width: 100%;
	height: 100%;
	background-color: rgba(237,242,245);
}
#hotel-search{
	top: -62px;
	position: relative;
}
#hotel .previous{
  position: absolute;
  left: 12px;
  top: 10px;
  display: block;
  z-index: 1;
  width: 30px;
  height: 30px;
  line-height: 30px;
  font-size: 20px;
  margin: 0;
  color: #fff;
}
.coupons-btn {
  position: absolute;
  right: 64px;
  top: 12px;
  font-size: 10px;
  color: #fff;
}
.coupons-btn .coupons-icon {
  width: 13px;
  height: 13px;
  background-image: url(https://source.qunarzz.com/site/images/wap/home/recommend/coupons_gift_btn.png);
  background-size: 13px 13px;
  margin: 0 auto 2px;
}
.nearby-hotel{
  position: absolute;
  right: 12px;
  top: 10px;
  text-align: center;
  color:#fff;
  font-size: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
#hotel .q-near-hotel{
  font-size: 16px;
  color: unset;
  line-height: unset;
  margin: 0;
}
#nearByHotel{
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  border: none;
  margin: 0;
  padding: 0;
}
#toSelf{
  z-index: 100000000;
  color: #616161;
  font-size: 16px;
  left: 12px;
}
#toSelf.findHotel:before{
  display: block;
  content: '';
  width: 10px;
  height: 15px;
  background: url(https://simg1.qunarzz.com/site/images/wap/touch/images/v2/images2x/fx_newicon.png) 0 0 no-repeat;
  background-size: 300px 150px;
  position: absolute;
  top: 4px;
  left: 3px;
  background-position: 0px -9px;
}
</style>
