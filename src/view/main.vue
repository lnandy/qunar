<template>
  <div id="app">
      <banner :url="bannerUrl">{{bannerUrl}}</banner>
      <menu-widget v-for="(i,j) in menuList" :menuList="i['list']"
      :bgcolor="i['bgcolor']"
      :bgimage="i['bgimage']"
      :key="j"></menu-widget>
      <div class="separator"></div>
      <bottom-menu></bottom-menu>
      <div class="separator"></div>
      <Footer></Footer>
  </div>
</template>

<script>
import Banner from '../components/banner'
import Menu from '../components/menu'
import Bottommenu from '../components/bottommenu'
import Footer from '../components/footer'
import data from '../data/menuJson'

export default {
  components: {'banner':Banner, 'menu-widget':Menu,'bottom-menu':Bottommenu,'Footer':Footer},
  data () {
    return {
      bannerUrl: 'https://img1.qunarzz.com/order/comp/1805/2e/6e407f088bfb902.png',
      menuList: data
    }
  },
}
</script>
<style scoped>
  body {
    margin: 0;
    padding: 0;
    font-family: arial,sans-serif;
    color: #333;
  }
  .separator{
    background-color: #eee;
    width: 100%;
    height: 10px;
  }
</style>
