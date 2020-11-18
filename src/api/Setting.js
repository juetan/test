import request from './Request'

// 更新网站设置(https://templator.juetan.cn/wp-json/wp/v2/settings)
export function API_getSettings() {
  return request('wp/v2/siteinfo')
}

export function API_getMenus() {
  return request('wp/v2/menus')
}

export function API_getSocialLinks () {
  return Promise.resolve([
    {
      name: 'Github',
      icon: 'logo-github',
      path: 'https://github.com/juetan'
    },
    {
      name: '博客园',
      icon: 'logo-html5',
      path: 'https://cnblogs.com/juetan'
    },
    {
      name: '开发文档',
      icon: 'ios-code',
      path: 'https://github.com/juetan/vueword'
    },
    {
      name: '掘金',
      icon: 'logo-buffer',
      path: 'https://juejin.im/juetan'
    }
  ])
}

export function API_getNavigations () {
  return Promise.resolve([
    {
      name: '网站首页',
      icon: 'ios-home',
      path: ''
    },
    {
      name: '前端开发',
      icon: 'logo-html5',
      path: 'FrontEnd'
    },
    {
      name: '后端开发',
      icon: 'logo-nodejs',
      path: 'BackEnd'
    },
    {
      name: '开发技巧',
      icon: 'logo-chrome',
      path: '/development'
    },
    {
      name: '关于作者',
      icon: 'ios-person',
      path: 'about'
    },
    {
      name: '登录/注册',
      icon: 'ios-person',
      path: 'login'
    }
  ])
}

export function API_getLinks () {
  return Promise.resolve([
    {
      name: '小火柴',
      icon: 'ios-home',
      path: 'https://www.xiaohuochai.cc'
    },
    {
      name: '阮一峰',
      icon: 'logo-html5',
      path: 'https://www.ruanyifeng.com'
    },
    {
      name: '张鑫旭',
      icon: 'logo-nodejs',
      path: 'https://www.zhangxinxu.com'
    },
    {
      name: '掘金社区',
      icon: 'logo-chrome',
      path: 'https://www.juejin.im'
    },
    {
      name: '博客园',
      icon: 'ios-person',
      path: 'https://www.cnblogs.com'
    }
  ])
}