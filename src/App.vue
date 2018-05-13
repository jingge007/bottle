<template>
  <div id="app">
    <router-view></router-view>
    <footer_tab></footer_tab>
  </div>
</template>

<script>
  import footer_tab from 'base/tab/tab.vue'

  export default {
    name: 'App',
    components: {
      footer_tab
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" type="text/stylus" scoped>

</style>
