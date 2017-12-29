<template>
  <div id="app-editor-publish" class="verta-content-padding">
    <div class="verta-publish-image-holder">
      <div class="verta-text-modal-blocking" style="padding: 20vh 0;">
        <h2>No picture selected</h2>
        <p>Select a picture in the feed below to begin editing</p>
      </div>
    </div>
    <div class="verta-publish-form-wrapper">
      <div class="verta-publish-form">
        <div class="verta-publish-input-group">
          <b>IMAGE TITLE</b>
          <input type="text" placeholder="My Photo" class="verta-publish-input-large"/>
        </div>
        <div class="verta-publish-input-group">
          <b>DESCRIPTION</b>
          <textarea placeholder="Insert a beautiful description of your image here..."></textarea>
        </div>
        <div class="verta-publish-input-group">
          <b>TAGS (COMMA SEPARATED)</b>
          <input type="text" placeholder="cats, food, sports"/>
        </div>
      </div>
      <button>SUBMIT AND CONTINUE</button>
    </div>
  </div>
</template>
<style lang="scss">
#app-editor-publish {
  display: flex;
  justify-content: center;

  & > * { margin: 20px; }
}

.verta-publish-image-holder {
  background-color: #1A1A1A;
  width: 60%;
}

.verta-publish-form-wrapper {
  display: flex;
  flex-direction: column;
  button {
    margin: 5px auto;
  }
}

.verta-publish-form {
  background-color: #EFEFEF;
  border-radius: 4px;
  border: 1px solid #444;
  box-shadow: 0 2px 16px 8px rgba(0, 0, 0, .1);
  min-height: 300px;
  margin-bottom: 20px;
  width: 300px;
}

.verta-publish-input-group {
  padding: 6px 0;
  border-bottom: 1px solid #bbb;

  b {
    font-size: 10px;
    color: #555;
    display: block;
    padding: 2px 12px;
  }

  input[type="text"], textarea {
    background: transparent;
    border: none;
    color: #222;
    font-size: 14px;
    font-family: 'Work Sans', sans-serif;
    outline: none;
    padding: 4px 12px;
    width: 100%;

    &.verta-publish-input-large {
      font-size: 24px;
      font-weight: 600;
    }
  }

  textarea {
    line-height: 1.5;
    min-height: 100px;
    resize: none;
  }
}
</style>
