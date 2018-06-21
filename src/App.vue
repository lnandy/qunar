<template>
  <div id="app">
      <banner :url="bannerUrl">{{bannerUrl}}</banner>
      <menu-widget v-for="(i,j) in menuList" :menuList="i['list']"
      :bgcolor="i['bgcolor']"
      :bgimage="i['bgimage']"></menu-widget>
      <div class="separator"></div>
      <bottom-menu></bottom-menu>
      <div class="separator"></div>
      <Footer></Footer>
  </div>
</template>

<script>
import Banner from './components/banner'
import Menu from './components/menu'
import Bottommenu from './components/bottommenu'
import Footer from './components/footer'
export default {
  name: 'app',
  components: {'banner':Banner, 'menu-widget':Menu,'bottom-menu':Bottommenu,'Footer':Footer},
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      bannerUrl: 'https://source.qunarzz.com/site/images/wap/home/recommend/iphoneplus/20180614_CPM_WAP_DE10841.jpg',
      menuList:{'hotel':{'list':['酒店','特惠酒店','海外酒店','客栈','民宿'],
                          'bgcolor':'#f55',
                          'bgimage':'url(//s.qunarzz.com/touch_home/imgs/hotel.png)'},
                'ticket':{'list':['机票','低价机票','汽车票 · 船票','火车票','专车 · 自驾'],
                          'bgcolor':'#00a7f7',
                          'bgimage':'url(//s.qunarzz.com/touch_home/imgs/flight.png)'},
                'holiday':{'list':['度假','景点 · 门票','旅游团购','自由行','周边 · 短途'],
                          'bgcolor':'#7cb832',
                          'bgimage':'url(//s.qunarzz.com/touch_home/imgs/holiday.png)'},
                'money':{'list':['金融 · 理财','保险 · 车险','全球购'],
                          'bgcolor':'#f90'}}
    }
  },
}
</script>
<style>
  body {
    margin: 0;
    padding: 0;
  }
  .separator{
    background-color: #eee;
    width: 100%;
    height: 10px;
  }
</style>
