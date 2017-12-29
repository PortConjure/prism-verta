<template>
  <div class="verta-content-padding">
    <div class="verta-upload-bigbox" v-if="canSupportDragAndDrop"
      @drag.prevent.stop
      @dragstart.prevent.stop
      @dragend.prevent.stop="isDraggedOver = false"
      @drop.prevent.stop="handleDrop"
      @dragover.prevent.stop="isDraggedOver = true"
      @dragenter.prevent.stop="isDraggedOver = true"
      @dragleave.prevent.stop="isDraggedOver = false"
      :class="{ enabled: isDraggedOver }"
      >
      <div class="verta-text-modal-blocking" v-if="isDraggedOver">
        <h2>Drop raw image files here to upload</h2>
        <span>It is now safe to drop the files here.</span>
        <p>(Acceptable file types: .cr2)</p>
      </div>
      <div class="verta-text-modal-blocking" v-else>
        <h2>Drag raw image files here to upload</h2>
        <span>You may also <label for="files_upload" style="cursor: pointer;"><b>click here</b></label> to open an upload dialog.</span>
        <p>(Acceptable file types: .cr2)</p>
      </div>
      <input id="files_upload" type="file" name="imageFiles[]" multiple v-show="false" accept=".cr2"/>
    </div>
    <div v-else>
      Your web browser is not modern enough to support drag and drop.
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isDraggedOver: false
    }
  },
  methods: {
    handleDrop(e) {
      this.isDraggedOver = false;
      console.log(e.dataTransfer.files);
    }
  },
  computed: {
    canSupportDragAndDrop() {
      let div = document.createElement('div');
      return (('draggable' in div) || ('ondragstart' in div && 'ondrop' in div)) && 'FormData' in window && 'FileReader' in window;
    }
  }
}
</script>
<style lang="scss">
.verta-upload-bigbox {
  border: 10px dotted lighten(#2c3e50, 40%);
  cursor: default;
  padding: 40px;

  &.enabled {
    background-color: rgba(lighten(#2c3e50, 40%), .2);
  }

  &:hover {
    background-color: rgba(lighten(#2c3e50, 40%), .05);
  }
}
</style>
