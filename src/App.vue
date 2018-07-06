<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
#app {
  position: relative;
  width: 100%;
  height: 100%;
  background: url('./assets/img/AodaCat.jpg');
  background-size: 100%;
  opacity: .8;
}

</style>
