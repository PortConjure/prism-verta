<template>
  <footer :class="{ hidden: !isOpen }">
    <div class="verta-feed-open-tablet" @click="isOpen = !isOpen">{{tabletText}}</div>
    <div class="verta-text-modal-blocking">
      <h2>No images have been uploaded.</h2>
      <p>Upload your raw images by navigating to the "Upload" page.</p>
    </div>
  </footer>
</template>
<script>
export default {
  data() {
    return {
      isOpen: false
    }
  },
  computed: {
    tabletText() {
      return this.isOpen ? 'CLOSE' : 'OPEN';
    }
  }
}
</script>

<style lang="scss">
#app-footer {
  bottom: 0;
  left: 0;
  position: fixed;
  height: 160px;
  width: 100%;

  background-color: #1A1A1A;
  transition: 300ms ease;

  .verta-text-modal-blocking {
    position: absolute;
    top: 50px;
    width: 100%;
    opacity: 0.6;
  }

  &.hidden { bottom: -140px; }

  .verta-feed-open-tablet {
    font-size: 10px;
    text-align: center;
    position: absolute;
    top: -20px;
    right: 20px;
    width: 60px;
    height: 20px;
    padding-top: 4px;
    background-color: #1A1A1A;
    cursor: pointer;
  }
}
</style>
