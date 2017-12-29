import VueRouter from 'vue-router';

import HomePage from './HomePage.vue';

const routes = [
  { path: '', component: HomePage },
  { path: '**', component: HomePage },
];

export default new VueRouter({
  routes
});
