<template>
  <div id="app">
    <keep-alive include="index">
      <router-view />
    </keep-alive>
    <BackTop class="back-top"></BackTop>
  </div>
</template>
<script>
export default {
  name: 'App',
  data() {
    return {

    }
  }
}
</script>
<style lang="stylus" scoped>

</style>
