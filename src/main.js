import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap';
import jQuery from 'jquery';
import 'popper.js';
window.$ = window.jQuery = jQuery;

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
