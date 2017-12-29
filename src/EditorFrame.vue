<template>
  <div>
    <editor-header id="app-header"></editor-header>
    <div id="app-editor-window">
      <router-view></router-view>
    </div>
    <editor-feed id="app-footer"></editor-feed>
  </div>
</template>
<script>
import EditorHeader from './Editor/EditorHeader';
import EditorFeed from './Editor/EditorFeed';

export default {
  components: { EditorHeader, EditorFeed }
}
</script>
