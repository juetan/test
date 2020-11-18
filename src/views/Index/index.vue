<template>
  <main id="main">
    <!-- 顶部：导航链接、背景和头像 -->
    <t-header></t-header>
    <!-- 内容区：最近十篇文章 -->
    <t-content></t-content>
    <!-- 侧边栏：公告、分类目录及链接等 -->
    <!-- <t-sidebar></t-sidebar> -->
    <!-- 底部：版权信息 -->
    <t-footer></t-footer>
  </main>
</template>

<script>
import THeader from '@/components/The-Header'
import TContent from '@/components/The-Content'
import TSidebar from '@/components/The-Sidebar'
import TFooter from '@/components/The-Footer'

export default {
  data () {
    return {
      settings: null,
      directory: 'cd wp-content/themes/templator/component'
    }
  },
  components: {
    't-header': THeader,
    't-content': TContent,
    't-sidebar': TSidebar,
    't-footer': TFooter
  }
}
</script>
<style scoped>

</style>
