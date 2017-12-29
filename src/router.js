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
      { name: 'EditorPublish', path: 'publish', component: EditorPublish },
      { name: 'EditorEdit', path: 'edit', component: EditorEdit },
      { name: 'EditorUpload', path: 'upload', component: EditorUpload },
      { path: '', redirect: 'upload' },
    ]
  },
  { path: '', component: HomePage },
  { path: '**', component: HomePage },
];

export default new VueRouter({
  routes
});
