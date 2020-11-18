<template>
  <header id="header">
    <t-navigator></t-navigator>
    <div class="middle">
      <div class="info">
        <h2><img src="../assets/avatar.jpg" alt="绝弹" class="avatar"></h2>
        <p class="description">只有很努力才能看起来轻而易举</p>
        <ul class="links">
          <a v-for="link in links" :key="link.name" class="link" tag="li">
            <vem-icon type="home"></vem-icon> {{ link.name }}
          </a>
        </ul>
      </div>
    </div>
  </header>
</template>

<script>
import { API_getSocialLinks, API_getNavigations } from '@/api/Setting'
import Navigator from '@/components/Common-Navigator'
export default {
  data () {
    return {
      routes: this.$router.options.routes,
      search: null,
      links: null,
      menus: null
    }
  },
  created() {
    API_getSocialLinks().then(data=> {
      this.links = data
    })
  },
  components: {
    't-navigator': Navigator
  }
}
</script>
<style lang="stylus" scoped>
  #header
    position relative
    width 100%
    height 400px
    background url('./../assets/index.jpg') 0 0/cover no-repeat 
  .middle
    display flex
    align-items center
    justify-content center
    height calc(100% - 60px)
    .info
      text-align center
      color rgba(85,85,85,0.65)
    .description
      margin-top 12px
      font-size 14px
    .links
      display flex
      margin-top 18px
      .link
        flex auto
        display inline-block
        list-style none
        color rgba(85,85,85,0.65)
        text-align center
        padding 0 4px
        cursor pointer
        &:hover
          color #409eff
  .avatar
    height 80px
    width 80px
    border-radius 50%
    border 2px solid rgba(255,255,255,.6)
    cursor pointer
    transition transform .8s ease 0s
    &:hover
      transform rotate(720deg)
</style>
