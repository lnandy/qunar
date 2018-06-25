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
  body {
    margin: 0;
    padding: 0;
    font-family: arial,sans-serif;
    color: #333;
  }
  .separator{
    background-color: #eee;
    width: 100%;
    height: 10px;
  }
</style>
