<template>
  <div class="card">
    <div class="header">
      <h2 class="title"><Icon :type="icon" /> {{title}}</h2>
    </div>
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  props: {
    icon: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: '公告'
    }
  }
}
</script>
<style lang='stylus' scoped>
  .card
    width 100%
    margin 15px auto 0
    border-radius 3px
    padding 10px
    background #fff
    .header
      border-bottom 1px solid #eaeaea
      .title
        display inline-block
        position relative
        font-weight: 400;
        font-size: 14px;
        line-height: 28px;
        &::after
          content ''
          position absolute
          left 0
          bottom -1.5px
          width 100%
          height 2px
          background #409eff
    .content
      margin-top 8px
</style>
