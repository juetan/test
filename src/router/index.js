import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/Index'
import Singular from '@/views/Singular'
import { API_validate } from '@/api/User'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      meta: {title: '首页'},
      component: Index,
      children: [
        {
          path: '/post',
          name: 'post',
          meta: {title: '文章'},
          component: Singular
        }
      ]
    },
    {
      path: '/search',
      name: 'search',
      meta: {title: '搜索'},
      component: ()=>import('@/views/Search')
    },
    {
      path: '/login',
      name: 'login',
      meta: {title: '登录'},
      component: ()=>import('@/components/The_Login'),
      beforeEnter: (to, from, next)=> {
        to.meta.title = '退出登录'
        let token = localStorage.getItem('token')
        if(token) {
          API_validate().then(data=>{
            console.log(data)
            if(data.status && data.status===200) {
            }
            next()
          }).catch(error=>{

          })
        } else {
          next()
        }
      }
    },
    {
      path: '/coffee',
      name: 'coffee',
      meta: {title: '咖啡网页'},
      component: ()=>import('@/views/Coffee')
    },
    {
      path: '/singular/:id',
      name: 'singular',
      meta: {title: '响应布局'},
      props: true,
      component: ()=>import('@/views/Singular')
    },
    {
      path: '/category/:slug',
      name: 'category',
      meta: {title: '分类归档'},
      props: true,
      component: ()=>import('@/views/Archive')
    },
  ]
})
