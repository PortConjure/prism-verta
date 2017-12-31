<template>
  <div>
    <img src="./assets/logo.png" width="300px">
    <h1>Prism Verta</h1>
    <p>Experimental image editor. Spin-off of the Prism Project.</p>
    <button @click="goToEditor()">Open Editor</button>
    <h2>Related Links</h2>
    <ul>
      <li><a href="http://prism.encadyma.com/" target="_blank">Prism Project</a></li>
      <li><a href="http://github.com/encadyma" target="_blank">@encadyma</a></li>
      <li><a href="http://vuejs.org/" target="_blank">Vue</a></li>
    </ul>
  </div>
</template>
<style scoped>
div {
  text-align: center;
  margin-top: 60px;
}
h1, h2, p {
  margin: 15px 0;
}
</style>
<script>
export default {
  methods: {
    goToEditor() {
      this.$router.push({ path: '/editor' });
    }
  }
}
</script>

