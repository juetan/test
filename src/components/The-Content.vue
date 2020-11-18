<template>
  <div class="index">
    <div id="content" v-loading="visible">
      <ul class="posts">
        <li v-for="post in posts" :key="post.ID" class="post">
          <a :href="post.link" class="post-thumbnail">
            <img src="https://src.themebox.cn/data/attachment/block/20/206c8d4f14f25e7ac83283140b6a932c.jpg" alt="" width="100%" height="100%">
          </a>
          <article class="post-info">
            <h2 class="post-title">
              <router-link class="post-link" :to="{name: 'singular',params: {id: post.id}}">{{post.title.rendered}}</router-link>
            </h2>
            <p class="post-excerpt" v-html="post.excerpt.rendered"></p>
            <div class="post-meta">
              <router-link :to="post.link" class="meta-item"> <Icon type="ios-calendar-outline" class="icon"></Icon> {{post.date.substring(0,10)}} </router-link>
              <router-link :to="post.link" class="meta-item"> <Icon type="ios-folder-outline" class="icon"></Icon> 简单分类</router-link>
              <router-link :to="post.link" class="meta-item"> <Icon type="ios-chatboxes-outline" class="icon"></Icon> 0 评论</router-link>
              <router-link :to="post.link" class="meta-item"> <Icon type="ios-eye-outline" class="icon"></Icon> 0 查看</router-link>
            </div>
          </article>
        </li>
      </ul>
      <div>
        <img v-for="(img,index) in images" :key="index" v-lazyImg="img" alt="">
      </div>
    </div>
    <t-sidebar></t-sidebar>
  </div>
</template>

<script>
import { API_getPosts } from '@/api/Post'
import { API_getImages } from '@/api/Resource'
import TSidebar from '@/components/The-Sidebar'
export default {
  data () {
    return {
      posts: null,
      loading: false,
      visible: false,
      images: []
    }
  },
  created() {
    this._getPosts()
  },
  methods: {
    _getPosts() {
      this.visible = true
      API_getPosts().then(data=> {
        this.posts = data
        this.visible = false
      }).catch(error=>{
        this.visible = false
        console.log('网络错误，请稍后再试！')
      })
    }
  },
  components: {
    't-sidebar': TSidebar
  }
}
</script>
<style lang='stylus' scoped>
  .index
    display flex
    width 1080px
    margin 20px auto
    #content
      flex 0 0 66.6%
      position relative
      padding 0 15px
    .post
      display flex
      height 135px
      margin-top 15px
      padding 20px 24px
      background #fff
      border-radius 3px
      list-style none
      overflow hidden
      &:hover 
        box-shadow 0 0 8px var(--brand-color)
        cursor pointer
        .post-title .post-link
          color var(--brand-color)
    #sidebar
      width 320px
      padding 0 15px
  .icon
    vertical-align -1px
  .meta-item
    color #aaaeb3
    font-size 12px
    &:hover
      color #2db7f5
  .post-thumbnail
    flex 0 0 200px
    height 134px
    border-radius 2px
    overflow hidden
    img
      transition transform .5s ease 0s
      &:hover
        transform scale(1.1)
  .post-info
    display flex
    flex-direction column
    flex 1
    height 100%
    padding-left 15px
    .post-title
      flex 0 0 18px
      font-size 18px
      line-height 1
      font-weight 300
      margin-top 5px
      .post-link
        color #18191A
        &:hover
          color #2d8cf0
    .post-excerpt
      flex 1
      color #797c80
      margin-top 10px
      overflow hidden
      display -webkit-box
      -webkit-box-orient vertical
      -webkit-line-clamp 3
      margin-bottom 20px
      p
        overflow hidden
    .post-meta
      flex 0 0 24px
</style>
