<template>
  <div>
    <editor-header id="app-header"></editor-header>
    <div id="app-editor-window">
      <router-view></router-view>
    </div>
  </div>
</template>
<style lang="scss" scoped>

</style>
<script>
import EditorHeader from './Editor/EditorHeader';

export default {
  components: { EditorHeader }
}
</script>
