import Vue from 'vue'
import App from './App.vue'
import "bootstrap";
import 'popper.js';
import router from "./router";
import store from './Store'

require("bootstrap/dist/css/bootstrap.min.css"); // Contains bootstrap and popper
require('bootstrap/js/dist/dropdown')

Vue.config.productionTip = false

new Vue({
    router,
    store,
  render: h => h(App),
}).$mount('#app')
