<template>
  <div v-if="visible">
    {{message}}
  </div>
</template>
<script>
export default {
  data() {
    return {
      visible: false,
      message: '正在加载中...'
  }}
}
</script>
<style lang='stylus' scoped>
  .spin-loading {
    animation: loading-animation 1s linear infinite;
  }
  @keyframes loading-animation {
    0% { transform: rotate(0deg); }
    50% { transform: rotate(180deg); }
    100% { transform: rotate(360deg); }
  }
</style>
