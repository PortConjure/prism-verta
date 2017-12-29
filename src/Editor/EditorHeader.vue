<template>
  <header>
    <router-link to="upload" active-class="selected">Upload</router-link>
    <router-link to="edit" active-class="selected">Edit</router-link>
    <router-link to="publish" active-class="selected">Publish</router-link>
  </header>
</template>
<style lang="scss">
#app-header {
  padding: 14px 4vw;

  a {
    color: darken(#CCC, 20%);
    font-size: 14px;
    font-weight: 600;
    text-decoration: none;
    text-transform: uppercase;
    padding: 0 10px;
    position: relative;
    transition: 150ms ease;

    &:hover {
      color: #CCC;
    }

    &.selected {
      color: #CCC;

      &:after { opacity: 1; width: 100%; }
    }

    &:after {
      background-color: #CCC;
      content: '';
      position: absolute;
      top: -16px;
      left: 0;
      height: 6px;
      width: 0%;
      transition: 150ms ease;
    }
  }
}
</style>
