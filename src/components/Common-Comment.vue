<template>
  <form action="" class="form">
    <div class="left">
      <a href="/" class="link"><img src="/" alt="" class="avatar"></a>
    </div>
    <div class="right">
      <textarea name="comment" class="comment"></textarea>
      <div class="bar">
        <Button type="primary" class="submit">提交评论</Button>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  data () {
    return {

    }
  }
}
</script>
<style lang='stylus' scoped>
  .form
    display flex
    .left
      flex-basis 80px
    .right
      flex auto
      padding-bottom 10px
      border-bottom 1px solid #e5e9ef
  .link
    display block
    width 50px
    height 50px
    border-radius 50%
    background #ccc
  .comment
    width 100%
    height 80px
    margin 0
    padding 5px 15px
    border 1px solid #ccc
    border-radius 2px
    resize none
    &:focus
      border-color #409eff
  .submit
    float right
</style>
