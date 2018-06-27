<template>
	<div class="coupon-wrapper" style="height:717px;">
	    <div class="shadow-mask"></div>
	    <div class="coupon-wrap unlogin-wrap">
	        <div class="coupon-banner">
	            <img src="//source.qunarzz.com/site/images/wap/home/recommend/coupon_mask_unlogin.png">
	            <div class="title">
	            	<p>登录解锁即可享受福利</p>
	            </div>
	        </div>
	        <div class="coupon-bd">
	            <div class="getCoupon-btn" @click="close">点击领取</div>
	        </div>
	        <div class="icon q-circle-cancel close-mask" @click="close"></div>
	    </div>
	</div>
</template>
<script>
	export default {
		methods : {
			close () {
				$('.coupon-wrapper').hide();
			},
		}
	}
</script>
<style scoped>
	.coupons-btn {
	    position: absolute;
	    right: 64px;
	    top: 12px
	}

	.coupons-btn .coupons-icon {
	    width: 13px;
	    height: 13px;
	    background-image: url("//source.qunarzz.com/site/images/wap/home/recommend/coupons_gift_btn.png");
	    background-size: 13px 13px;
	    margin: 0 auto 2px
	}

	.coupons-btn p {
	    font-size: 10px;
	    color: #fff
	}

	.coupon-wrapper {
	    position: absolute;
	    top: 0;
	    left: 0;
	    right: 0;
	    bottom: 0;
	    z-index: 120
	}

	.coupon-wrapper .shadow-mask {
	    opacity: .8;
	    background: #000;
	    height: 100%
	}

	.coupon-wrapper .q-circle-cancel {
	    font-size: 30px;
	    color: #fff;
	    position: absolute;
	    bottom: -60px;
	    left: 50%;
	    margin-left: -15px
	}

	.coupon-wrapper .coupon-wrap {
	    position: absolute;
	    top: 50%
	}

	.coupon-wrapper .coupon-wrap .coupon-banner {
	    width: 90%;
	    margin: 0 auto;
	    position: relative
	}

	.coupon-wrapper .coupon-wrap .coupon-banner img {
	    width: 100%
	}

	.coupon-wrapper .coupon-wrap .coupon-banner .title {
	    width: 100%;
	    text-align: center;
	    position: absolute;
	    bottom: 25px;
	    left: 0;
	    color: #fff
	}

	.coupon-wrapper .coupon-wrap .coupon-banner .title h2 {
	    height: 24px;
	    margin: 0 0 10px
	}

	.coupon-wrapper .coupon-wrap .coupon-bd {
	    background: #ff4363;
	    width: 90%;
	    margin: -1px auto 0;
	    border-radius: 0 0 15px 15px
	}

	.coupon-wrapper .coupon-wrap.unlogin-wrap {
	    margin-top: -226px
	}

	.coupon-wrapper .coupon-wrap.unlogin-wrap .coupon-banner .title {
	    font-size: 18px;
	    bottom: 20px
	}

	.coupon-wrapper .coupon-wrap.unlogin-wrap .coupon-bd {
	    padding: 40px 0 50px
	}

	.coupon-wrapper .coupon-wrap.unlogin-wrap .coupon-bd .getCoupon-btn {
	    width: 90%;
	    height: 52px;
	    line-height: 50px;
	    text-align: center;
	    margin: 0 auto;
	    background: #ffd700;
	    border-radius: 6px;
	    font-size: 20px;
	    color: #d92543;
	    border-bottom: 3px solid #e26523
	}

	.coupon-wrapper .coupon-wrap.logined-wrap {
	    margin-top: -253px
	}

	.coupon-wrapper .coupon-wrap.logined-wrap .coupon-bd {
	    padding: 15px 0 25px
	}

	.coupon-wrapper .coupon-wrap.logined-wrap .coupon-bd .coupon-box {
	    overflow-y: scroll;
	    height: 225px
	}

	.coupon-wrapper .coupon-wrap.logined-wrap .coupon-bd .coupon-item {
	    height: 106px;
	    margin: 0 16px 7px;
	    padding: 14px 0;
	    background: #fff;
	    border-radius: 3px;
	    display: -webkit-flex;
	    display: -webkit-box;
	    display: -ms-flexbox;
	    display: flex;
	    position: relative
	}

	.coupon-wrapper .coupon-wrap.logined-wrap .coupon-bd .coupon-item .text-box {
	    -webkit-flex: 1;
	    line-height: 16px;
	    padding: 0 16px;
	    border-right: 1px solid #e0e0e0;
	    height: 78px;
	    display: -webkit-box;
	    display: -ms-flexbox;
	    display: flex;
	    display: -webkit-flex;
	    -webkit-box-orient: vertical;
	    -webkit-box-direction: normal;
	    -webkit-flex-direction: column;
	    -ms-flex-direction: column;
	    flex-direction: column;
	    -webkit-box-pack: center;
	    -webkit-justify-content: center;
	    -ms-flex-pack: center;
	    justify-content: center
	}

	.coupon-wrapper .coupon-wrap.logined-wrap .coupon-bd .coupon-item .text-box h3 {
	    margin: 0 0 8px;
	    font-size: 16px;
	    color: #212121
	}

	.coupon-wrapper .coupon-wrap.logined-wrap .coupon-bd .coupon-item .text-box p {
	    font-size: 10px;
	    color: #616161
	}

	.coupon-wrapper .coupon-wrap.logined-wrap .coupon-bd .coupon-item .text-box p span {
	    border: 1px solid #ff6e6e;
	    border-radius: 1px;
	    color: #ff6e6e
	}

	.coupon-wrapper .coupon-wrap.logined-wrap .coupon-bd .coupon-item .price-box {
	    width: 100px;
	    text-align: center;
	    line-height: 78px;
	    font-size: 14px;
	    color: #ff8300;
	    white-space: nowrap
	}

	.coupon-wrapper .coupon-wrap.logined-wrap .coupon-bd .coupon-item .price-box b {
	    font-weight: 500;
	    font-size: 30px
	}

	.coupon-wrapper .coupon-wrap.logined-wrap .coupon-bd .coupon-item .circle {
	    background: #ff4363;
	    border-radius: 10px;
	    width: 12px;
	    height: 12px;
	    position: absolute;
	    right: 95px
	}

	.coupon-wrapper .coupon-wrap.logined-wrap .coupon-bd .coupon-item .circle.circle1 {
	    top: -6px
	}

	.coupon-wrapper .coupon-wrap.logined-wrap .coupon-bd .coupon-item .circle.circle2 {
	    bottom: -6px
	}

	.coupon-wrapper .coupon-wrap.logined-wrap .coupon-bd .look-more {
	    color: #fff;
	    font-size: 12px;
	    margin: 20px 0 0;
	    text-align: center
	}

	.coupon-wrapper .coupon-wrap.logined-wrap .coupon-bd .look-more b {
	    vertical-align: middle
	}

</style>