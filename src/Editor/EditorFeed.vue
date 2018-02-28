<template>
  <footer :class="{ hidden: !isOpen }">
    <div class="verta-feed-open-tablet" @click="isOpen = !isOpen">{{tabletText}}</div>
    <div class="verta-feed-gallery" v-if="feedImages.length">
      <div class="verta-feed-gallery-head">
        <h2>Uploaded Images</h2>
        <p>Click on one to select it.</p>
      </div>
      <div class="verta-flex-hgallery" style="padding: 0 20px;">
        <div class="verta-alert-filesmall" 
          v-for="(image, index) in feedImages" :key="index" 
          :class="{ selected: selectedImageIndex == index }"
          @click="selectImage(index)">
          <div class="verta-ui-imagebox">*</div>
          <div class="verta-alert-content"><h5>{{image.name}}</h5></div>
        </div>
      </div>
    </div>
    <div class="verta-text-modal-blocking" v-else>
      <h2>No images have been uploaded.</h2>
      <p>Upload your raw images by navigating to the "Upload" page.</p>
    </div>
  </footer>
</template>
<script>
import { Bus } from '../Bridge/Bus';

export default {
  data() {
    return {
      isOpen: false
    }
  },
  created() {
    Bus.$on('editor-feed-open', () => {
      this.isOpen = true;
    });
  },
  methods: {
    selectImage(index) {
      this.$store.commit('selectImage', index);
    }
  },
  computed: {
    tabletText() {
      return this.isOpen ? 'CLOSE' : 'OPEN';
    },
    feedImages() {
      return this.$store.state.images;
    },
    selectedImageIndex() {
      return this.$store.state.selectedImage;
    }
  }
}
</script>

<style lang="scss">
#app-footer {
  bottom: 0;
  left: 0;
  position: fixed;
  height: 200px;
  width: 100%;
  z-index: 99;

  background-color: #1A1A1A;
  transition: 300ms ease;

  .verta-text-modal-blocking {
    position: absolute;
    top: 70px;
    width: 100%;
    opacity: 0.6;
  }

  &.hidden { bottom: -190px; }

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

  .verta-feed-gallery {
    .verta-feed-gallery-head {
      padding: 10px 20px;
      & > * { display: inline-block; vertical-align: middle; }
      h2 { font-weight: 600; }
      p { margin: 0 10px; font-size: 14px; }
    }

    .verta-flex-hgallery {
      overflow-x: scroll;
      .verta-alert-filesmall {
        cursor: pointer;
        min-width: 150px;
        .verta-ui-imagebox { cursor: pointer; }
      }
    }
  }
}
</style>
