<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  html,body,#app{
    width: 100%;
    height: 100%;
  }
  *{margin:0;padding:0;}
  body {
    margin: 0;
    padding: 0;
    font-family: arial,sans-serif;
    color: #333;
  }
  iframe{
    display: none;
  }
</style>
