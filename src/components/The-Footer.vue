<template>
  <footer id="footer">
    <div class="container">
      <p class="copyright">Copyright &copy; 2020 <router-link class="link" to="/">绝弹博客</router-link>( 桂ICP备79464829号-6  )</p>
      <p class="theme">主题：<a href="/" class="link">Templator</a> 作者：<a href="/" class="link">绝弹</a> </p>
    </div>
  </footer>
</template>

<script>
export default {
  data () {
    return {
      something: null
    }
  },
}
</script>
<style lang='stylus' scoped>
  #footer
    display flex
    background #fff
    height 100px
    justify-content center
    align-items center
    color #18191A
    font-size 12px
    .container
      text-align center
    .copyright
      line-height 2.5
      .link
        font-size 12px
    .theme
      color #797C80
    .link
      font-size 0.9em
      font-weight 500
      color rgb(24, 25, 26)
      &:hover
        color #409eff
</style>
