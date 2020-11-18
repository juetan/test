<template>
  <i class="templator" :class="iconClass">
  
  </i>
</template>
<script>
export default {
  props: {
    type: ''
  },
  computed: {
    iconClass() {
      return `icon${this.type}`
    }
  }
}
</script>
<style lang='stylus' scoped>

</style>
