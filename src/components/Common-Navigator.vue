<template>
  <div class="top">
    <a href="/" class="site-title">
      <img src="" alt="" title="绝弹笔记">
      <h1 class="title">绝弹笔记</h1>
    </a>
    <nav class="navigation">
      <ul>
        <router-link v-for="menu in menus" :key="menu.name" :to="{ name: 'category', params: {slug: menu.path} }" class="nav-item">
          {{menu.name}}
        </router-link>
      </ul>
    </nav>
  </div>
</template>

<script>
import { API_getNavigations } from '@/api/Setting'
export default {
  data () {
    return {
      menus: null
    }
  },
  created() {
    API_getNavigations().then(data=> {
      this.menus = data
    })
  }
}
</script>
<style lang='stylus' scoped>
  .top
    display flex
    justify-content space-between
    width 1080px
    height 60px
    margin 0 auto
    line-height 60px
    .site-title
      &:hover .title
        color var(--brand-color)
      .title
        display inline-block
        font-size 22px
        font-family "宋体"
        color #4a5a6a
        font-weight 700
    .navigation
      text-align right
      .nav-item
        margin 0 5px
        color #fff
        &:hover
          color var(--brand-color)
</style>
