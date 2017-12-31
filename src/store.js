import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    images: [],
    selectedImage: -1
  },
  mutations: {
    addFinishedImage(state, vertaFile) {
      state.images.push(vertaFile);
    },
    selectImage(state, index) {
      state.selectedImage = index;
    }
  }
});