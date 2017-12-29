import VueRouter from 'vue-router';

import HomePage from './HomePage.vue';
import EditorFrame from './EditorFrame.vue';
import EditorUpload from './Editor/EditorUpload.vue';
import EditorEdit from './Editor/EditorEdit.vue';
import EditorPublish from './Editor/EditorPublish.vue';

const routes = [
  {
    path: '/editor',
    component: EditorFrame,
    children: [
      { path: 'publish', component: EditorPublish },
      { path: 'edit', component: EditorEdit },
      { path: 'upload', component: EditorUpload },
      { path: '', redirect: 'upload' },
    ]
  },
  { path: '', component: HomePage },
  { path: '**', component: HomePage },
];

export default new VueRouter({
  routes
});
