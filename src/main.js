// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import $ from 'jquery' 
import '@/common/common.css'
import moment from 'moment'

Vue.config.productionTip = false

//Pbeb0ixYA5Tmt4R2yrOfq3z4tZQCzrCP
 /*eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
