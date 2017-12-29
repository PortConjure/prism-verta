import VueRouter from 'vue-router';

import HomePage from './HomePage.vue';
import EditorFrame from './EditorFrame.vue';
import EditorUpload from './Editor/EditorUpload.vue';

const routes = [
  {
    path: '/editor',
    component: EditorFrame,
    children: [
      { path: 'publish', component: EditorUpload },
      { path: 'edit', component: EditorUpload },
      { path: 'upload', component: EditorUpload },
      { path: '**', redirect: 'upload' },
    ]
  },
  { path: '', component: HomePage },
  { path: '**', component: HomePage },
];

export default new VueRouter({
  routes
});
