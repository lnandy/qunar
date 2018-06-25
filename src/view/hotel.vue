<template>
  <div id="hotel">
      <banner :url="bannerUrl"></banner>
      <hotel-search id="hotel-search"></hotel-search>
  </div>
</template>

<script>

import Banner from '@/components/banner'
import Hotelsearch from '@/components/hotelsearch'

export default {
  components: {'banner':Banner, 'hotel-search': Hotelsearch},
  data () {
    return {
      bannerUrl: '//simg1.qunarzz.com/site/images/wap/home/recommend/20160509_banner_750x376.jpg',
    }
  },
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
</style>
