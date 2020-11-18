<template>
  <div class="responsive">
    <header id="header">
      <t-navigator></t-navigator>
    </header>
    <section class="article">
      <header class="article-header">
        <h1 class="title">{{post.title.rendered}}</h1>
        <div class="meta">
          <router-link :to="post.link" class="meta-item"> <Icon type="ios-calendar-outline" class="icon"></Icon> {{post.date.substring(0,10)}} </router-link>
          <router-link :to="post.link" class="meta-item"> <Icon type="ios-folder-outline" class="icon"></Icon> 简单分类</router-link>
          <router-link :to="post.link" class="meta-item"> <Icon type="ios-chatboxes-outline" class="icon"></Icon> 0 评论</router-link>
          <router-link :to="post.link" class="meta-item"> <Icon type="ios-eye-outline" class="icon"></Icon> 0 查看</router-link>
        </div>
      </header>
      <article class="content" v-html="post.content.rendered">
        
      </article>
      <div class="pagination">
        <router-link class="prev-post" to="/">上一篇：</router-link>
        <router-link class="next-post" to="/">下一篇：</router-link>
      </div>
    </section>
    <aside class="comment">
      <t-comment></t-comment>
      <ul class="comment-list">
        <li class="comment-item" v-for="comment in comments" :key="comment.id">
          <div class="comment-avatar">
            <a href="/">
              <img :src="comment.author_avatar_urls[24]" alt="" class="comment-img">
            </a>
          </div>
          <div class="wraper">
            <h3 class="author">{{comment.author_name}}</h3>
            <div class="content" v-html="comment.content.rendered"></div>
            <div class="comment-meta">
              <span class="meta-item comment-date"> <Icon type="ios-calendar"></Icon> {{comment.date.slice(0,10)}}</span>
              <span class="meta-item comment-like" title="点个赞"><Icon type="md-thumbs-up" /></span>
              <span class="meta-item comment-dislike" title="踩一下"><Icon type="md-thumbs-down" /></span>
              <span class="meta-item comment-replay">回复</span>
              <span class="meta-item comment-more"><Icon type="md-more" /> </span>
            </div>
          </div>
        </li>
      </ul>
      <div>
        <img v-for="(img,index) in images" :key="index" v-lazyImg="img" alt="">
      </div>
    </aside>
    <t-footer></t-footer>
  </div>
</template>

<script>
import Navigator from '@/components/Common-Navigator'
import TFooter from '@/components/The-Footer'
import Tcomment from '@/components/Common-Comment'
import { API_getPost } from '@/api/Post'
import { API_getCommentsByPostId } from '@/api/Comment'
export default {
  data () {
    return {
      post: null,
      comments: null
    }
  },
  props: ['id'],
  created() {
    API_getPost(this.id).then(data=>{ this.post = data })
    this._get_comments()
  },
  methods: {
    _get_comments () {
      API_getCommentsByPostId(1265).then(data=>{
        this.comments = data
      })
    }
  },
  components: {
    't-navigator': Navigator,
    't-footer': TFooter,
    't-comment': Tcomment
  }
}
</script>
<style lang="stylus">
  #header
    background #fff
    .nav-item
      color #4a5a6a
      &:hover
        color var(--brand-color)
  .article
    box-sizing border-box
    width 960px
    padding 30px 50px
    border-radius 3px
    margin 20px auto
    background #fff
    .article-header
      border-bottom 1px solid #ccc
      text-align center
      .title
        font-weight 400
  @media (max-width:750px)
    .article
      width 95%
.meta
  margin-top 8px
  margin-bottom 8px
  .meta-item
    font-size 12px
    color #aaaeb3
.content
  margin-top 20px
  p
    line-height 1.8
    margin 30px 0
.pagination
  display flex
  align-items center
  margin-top 20px
  .prev-post
    flex auto
    justify-self start
  .next-post
    flex auto
    text-align right
.comment
  box-sizing border-box
  width 960px
  padding 20px
  margin 20px auto
  background #fff
@media (max-width:750px)
  .comment
    width 95%
.comment-item
  display flex
  margin-top 10px
  .comment-avatar
    flex-basis 80px
    padding-top 3px
    .comment-img
      width 50px
      height 50px
      border-radius 50%
  .wraper
    flex auto
    border-bottom 1px solid #e5e9ef
    padding-bottom 10px
    .author
      font-size 12px
      font-weight 700
      color #6d757a
    .content
      margin 3px 0
  .comment-meta
    font-size 12px
    line-height 16px
    color #aaaeb3
    .meta-item
      margin-right 15px
      cursor pointer
      &:hover
        color #409eff
    .comment-more
      float right
      color #2a3a4a
      font-size 16px
</style>
