<template>
  <div class="coffee">
    <header class="header">
      <nav class="nav-container">
        <a href="/" class="logo"><img src="" alt="" class="logo-img"></a>
        <ul class="nav-list">
          <router-link 
            v-for="nav in navigations" 
            :key="nav.name" 
            :to="nav.link" 
            tag="li" 
            class="nav-item"
          >
            {{nav.name}}
          </router-link>
        </ul>
      </nav>
      <div class="banner"></div>
    </header>
    <main class="content">
      <div class="head">
        <hr class="line">
        <div class="body">
          <h2 class="title">精品热卖</h2>
          <p class="english">BOUTIQUE HOT SALE</p>
        </div>
      </div>
      <ul class="list">
        <li class="item"></li>
        <li class="item">
          <div class="center">
            <p class="one">经典美式</p>
            <p class="two">CLASSIC AMERICA</p>
            <p class="three">
              简单即美味 <br> 萃取经典浓缩咖啡 <br> 以水调和 <br> 香气浓郁溢满
            </p>
          </div>
        </li>
        <li class="item"></li>
        <li class="item">
          <div class="center">
            <p class="one">经典美式</p>
            <p class="two">CLASSIC AMERICA</p>
            <p class="three">
              简单即美味 <br> 萃取经典浓缩咖啡 <br> 以水调和 <br> 香气浓郁溢满
            </p>
          </div>
        </li>
        
        <li class="item">
          <div class="center">
            <p class="one">经典美式</p>
            <p class="two">CLASSIC AMERICA</p>
            <p class="three">
              简单即美味 <br> 萃取经典浓缩咖啡 <br> 以水调和 <br> 香气浓郁溢满
            </p>
          </div>
        </li>
        <li class="item"></li>
        <li class="item">
          <div class="center">
            <p class="one">经典美式</p>
            <p class="two">CLASSIC AMERICA</p>
            <p class="three">
              简单即美味 <br> 萃取经典浓缩咖啡 <br> 以水调和 <br> 香气浓郁溢满
            </p>
          </div>
        </li>
        <li class="item"></li>
      </ul>

      <div class="head">
        <hr class="line">
        <div class="body">
          <h2 class="title">精品热卖</h2>
          <p class="english">BOUTIQUE HOT SALE</p>
        </div>
      </div>
    </main>
    <footer class="footer">

    </footer>
  </div>
</template>

<script>
import {API_getNavigations} from '@/api/Coffee'
export default {
  data () {
    return {
      navigations: null
    }
  },
  created() {
    API_getNavigations().then(data=> {
      this.navigations = data
    })
  }
}
</script>
<style lang='stylus' scoped>
  .coffee
    font-family "Microsoft YaHei"
    background #1e1918
  .nav-container
    display flex
    width 1180px
    height 75px
    line-height 75px
    margin 0 auto
    justify-items flex-end
  .logo
    flex 0 0 200px
  .nav-list
    flex auto
    text-align right
    .nav-item
      display inline-block
      padding 0 10px
      list-style none
      color #C99122
      cursor pointer
      &:first-child
        color #Fff
      &:hover
        color #fff
  .banner
    height 404px
    background url(./banner.png) 0 0/100% 100% no-repeat
  .head
    position relative
    width 450px
    height 130px
    margin 0 auto
    color #fff
    text-align center
    .line
      position absolute
      top 50%
      width 100%
      height 1px
      background #fff
      transform translateY(-50%)
    .body
      display inline-block
      .title
        font-size 24px
      .english
        font-size 14px
  .list
    display grid
    grid-template-rows repeat(2,240px)
    grid-template-columns repeat(4,290px)
    justify-content center
    .item
      list-style none
      background #E7D8D3
      display grid
      justify-content center
      align-content center
      &:first-child
        background url(./coffee.png)
      &:nth-child(3)
        background url(./coff1.png)
      &:nth-child(6)
        background url(./coffee2.png)
      &:nth-child(8)
        background url(./coffee.png)
  .center
    text-align center
  .one
    font-size 24px
    color #4A1203
  .two
    font-size 12px
    color #4A1203
  .three
    font-size 16px
    color #695652
  .footer
    height 165px
    background #363636
</style>
