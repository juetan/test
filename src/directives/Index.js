import Vue from 'vue'

// 加载当前目录下包含v-和.js的文件
const context = require.context('./', false, /v-.*\.js/)

// context.keys表示由所有匹配到的文件名组成的数组
context.keys().forEach(key=>{
  // context获取文件，default表示exprot default导出的内容
  let directiveOptions = context(key).default
  // 去除文件名的./v-和.js结尾，得到指令的名字
  let directiveName = key.slice(4,-3)
  // 全局注册指令
  Vue.directive(directiveName, directiveOptions)
})

// 通过Vue.options.directives可查看当前注册的全局指令
// console.log(Vue.options.directives)