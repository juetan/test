<template>
  <div class="container">
    <div class="content"></div>
    <div class="stiky"></div>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  }
}
</script>
<style scoped>
body,html {
    height: 100%;
    margin: 0;
}
.container {
    position: relative;
    min-height: 100%;
}
.content {
    padding-bottom: 50px;
}
.stiky {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 50px;
}
</style>
