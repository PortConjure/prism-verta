<template>
  <div id="app">
    <transition name="scale-outwards" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>
<script>
export default {
  name: 'app'
}
</script>
<style lang="scss" src="./verta.scss"></style>
