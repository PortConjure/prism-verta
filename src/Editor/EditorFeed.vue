<template>
  <footer>
    <div class="verta-text-modal-blocking">
      <h2>No images have been uploaded.</h2>
      <p>Upload your raw images by navigating to the "Upload" page.</p>
    </div>
  </footer>
</template>
<style lang="scss">
#app-footer {
  bottom: 0;
  left: 0;
  position: fixed;
  min-height: 160px;
  width: 100%;

  background-color: #1A1A1A;

  .verta-text-modal-blocking {
    position: absolute;
    top: 50px;
    width: 100%;
    opacity: 0.6;
  }
}
</style>
