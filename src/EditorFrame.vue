<template>
  <div>
    <editor-header id="app-header"></editor-header>
    <div id="app-editor-window" style="overflow: hidden;">
      <transition :name="editorTransition" mode="out-in">
        <router-view></router-view>
      </transition>
    </div>
    <editor-feed id="app-footer"></editor-feed>
  </div>
</template>
<style lang="scss">

</style>
<script>
import EditorHeader from './Editor/EditorHeader';
import EditorFeed from './Editor/EditorFeed';

export default {
  components: { EditorHeader, EditorFeed },
  data() {
    editorTransition: 'scale-outwards'
  },
  methods: {
    convertPathToValue(name) {
      if (name === 'EditorUpload') return 1;
      else if (name === 'EditorEdit') return 2;
      else if (name === 'EditorPublish') return 3;
      else return 0;
    }
  },
  watch: {
    '$route': function (to, from) {
      if (this.convertPathToValue(to.name) > this.convertPathToValue(from.name)) {
        // If the user is going to the next step,
        // then animate the current page going outwards.
        this.editorTransition = 'scale-outwards';
      } else this.editorTransition = 'scale-inwards';
    }
  }
}
</script>
