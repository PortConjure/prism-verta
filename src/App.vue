<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Work+Sans:300,400,600,700');

* { box-sizing: border-box; }

html, body {
  background-color: #222;
  color: lighten(#2c3e50, 40%);
  margin: 0;
  padding: 0;
}

#app {
  font-family: 'Work Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

h1, h2, p {
  font-weight: normal;
  margin: 0;
  padding: 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: lighten(#1e1bdb, 40%);
}

.verta-content-padding {
  display: block;
  padding: 20px 5vw;
}

.verta-text-helptext {
  font-size: 12px;
  color: lighten(#2c3e50, 30%);
}

.verta-text-modal-blocking {
  display: block;
  text-align: center;

  h2 {
    font-size: 24px;
    font-weight: 600;
  }

  span {
    display: block;
    margin: 5px 0;
  }

  p {
    @extend .verta-text-helptext;
    margin: 5px 0;
  }
}

.scale-outwards-enter-active, .scale-outwards-leave-active,
.scale-inwards-enter-active, .scale-inwards-leave-active {
  transition: 300ms ease;
}

.scale-outwards-enter,
.scale-inwards-leave-to {
  transform: scale(0.8);
  opacity: 0;
}

.scale-outwards-leave-to,
.scale-inwards-enter, {
  transform: scale(1.1);
  opacity: 0;
}

</style>
