<template>
  <aside id="sidebar">
    <t-card :icon="news.icon" :title="news.title">
     {{news.data}}
    </t-card>
    
    <input search enter-button="搜索" placeholder="请输入搜索关键字..." class="search" />

    <t-card :icon="cates.icon" :title="cates.title">
      <ul class="cat-list">
        <li v-for="cat in cates.data" :key="cat.ID" class="cat-item">
          <a :href="cat.url" class="cat-link">{{cat.title}}</a>
        </li>
      </ul>
    </t-card>

    <t-card :icon="links.icon" :title="links.title">
      <ul class="cat-list">
        <li v-for="link in links.data" :key="link.name" class="cat-item">
          <a :href="link.path" class="cat-link">{{link.name}}</a>
        </li>
      </ul>
    </t-card>
  </aside>
</template>

<script>
import SibarCard from '@/components/Sidebar-Card'
import { API_getMenus,API_getLinks } from '@/api/Setting'
export default {
  data () {
    return {
      news: {
        icon: 'ios-paper-plane-outline',
        title: '公告栏',
        data: '本博客主题是基于Vue+WordPress，根据RestAPI接口开发的前后端分离项目。代码开源在Github中，开发笔记在博客园中，欢迎相互探讨！',
      },
      cates: {
        icon: 'ios-folder-outline',
        title: '文章分类',
        data: null
      },
      links: {
        icon: 'ios-link-outline',
        title: '友情链接',
        data: null
      },
    }
  },
  created() {
    API_getMenus().then(data=> { 
      this.cates.data = data;
    })
    API_getLinks().then(data=> {
      this.links.data = data
    })
  },
  components: {
    't-card': SibarCard
  }
}
</script>
<style lang='stylus' scoped>
  .search
    margin 10px 0
    height 36px
    box-sizing border-box
    border 1px solid #409eff
    border-radius 2px
    padding 0 15px
    width 220px
    outline none
</style>
