<template>
  <div class="verta-content-padding">

    <div v-if="errors.length">
      <span class="verta-text-button" @click="errors = []" style="display: inline-block; margin: 5px 0;">CLEAR ALL</span>
      <div class="verta-alert-error" style="margin-bottom: 10px;" v-for="(error, index) in errors" :key="index">
        <h5>Error</h5>
        <p>{{error}}</p>
      </div>
      <br>
    </div>

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
      <input id="files_upload" type="file" name="imageFiles[]" multiple v-show="false" accept=".cr2" @change="handleClassicUpload"/>
    </div>
    <div v-else>
      Your web browser is not modern enough to support drag and drop.
    </div>

    <div v-if="files.length">
      <div class="verta-flex-gallery">
        <div class="verta-alert-file" v-for="(file, index) in files" :key="index">
          <div class="verta-ui-imagebox">{{file.loadingProgress}}</div>
          <div class="verta-alert-content"><h5>{{file.name}} (<small>{{file.size}}</small>)</h5><small>{{file._objURL}}</small></div>
        </div>
      </div>
      <span class="verta-text-button" @click="clearFiles" style="display: inline-block; margin: 5px 0;">CLEAR ALL</span>
      <button style="float: right;" @click="uploadAllFiles" :disabled="!hasProcessableFiles">Process Files</button>
      <br style="clear: both;"/>
    </div>

  </div>
</template>
<script>
import Vue from 'vue';
import { Bus } from '../Bridge/Bus';
import { VertaFile } from '../Bridge/VertaFile';

export default {
  data() {
    return {
      isDraggedOver: false,
      files: [],
      errors: []
    }
  },
  methods: {
    handleDrop(e) {
      this.isDraggedOver = false;
      this.handleUploadingFileList(e.dataTransfer.files);
    },
    handleClassicUpload(e) {
      this.handleUploadingFileList(e.target.files);
    },
    handleUploadingFileList(fileList) {
      for (let file of fileList) {
        if (file.name.toLowerCase().substr(-3, 3) !== 'cr2') {
          this.errors.push(`The file "${file.name}" did not upload because it is not a raw image with the extension ".cr2".`);
          continue;
        }
        this.files.push(new VertaFile(file));
      }
    },
    uploadAllFiles() {
      this.files
        .filter(f => !f.uploading && !f.lastSuccess)
        .map(f => f.upload().then(this.processFileAfterUpload));
    },
    clearFiles() {
      this.files = this.files.filter(f => f.uploading);
    },
    processFileAfterUpload(file) {
      this.$store.commit('addFinishedImage', file);
      Bus.$emit('editor-feed-open');
    }
  },
  computed: {
    canSupportDragAndDrop() {
      let div = document.createElement('div');
      return (('draggable' in div) || ('ondragstart' in div && 'ondrop' in div)) && 'FormData' in window && 'FileReader' in window;
    },
    hasProcessableFiles() {
      return this.files.filter(f => !f.uploading && !f.lastSuccess).length > 0;
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

.verta-flex-gallery {
  margin: 10px 0;
}
</style>
