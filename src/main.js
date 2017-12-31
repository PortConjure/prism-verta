import Vue from 'vue';
import App from './App.vue';

import Vuex from 'vuex';
import VueRouter from 'vue-router';

import store from './store';
import router from './router';

Vue.use(VueRouter);

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
