<template>
  <div class="verta-content-padding">
    <div class="verta-upload-bigbox">
      <div class="verta-text-modal-blocking">
        <h2>Drop raw image files here to upload</h2>
        <span>You may also click here to open an upload dialog.</span>
        <p>(Acceptable file types: .cr2)</p>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.verta-upload-bigbox {
  border: 10px dotted lighten(#2c3e50, 40%);
  cursor: pointer;
  padding: 40px;

  &:hover {
    background-color: rgba(lighten(#2c3e50, 40%), .05);
  }
}
</style>
