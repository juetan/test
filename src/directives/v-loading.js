// 导入vue
import Vue from 'vue'
// 加载loading组件
import componentLoading from '@/components/Base-Loading.vue'

// 从.vue文件创建组件构造函数
const constructorLoading = Vue.extend(componentLoading)

// 导出loading指令的选项参数，便于全册注册或在组件中注册
export default {
  // 钩子函数：当指令第一次绑定到元素时调用
  bind(el,binding) {
    // 创建组件实例
    const instance = new constructorLoading({
      el: document.createElement('div'),
      data: {}
    })
    // 将组件的DOM挂载到元素的尾部中
    el.appendChild(instance.$el)
    el.instance = instance
    // 在DOM更新之后调用，将指令的值赋给loading组件实例的visible属性
    Vue.nextTick(()=>{
      el.instance.visible = binding.value
    })
  },
  // 钩子函数：在指令的值发生改变时调用
  update(el,binding) {
    // 更新loading组件的值
    if(binding.value !== binding.oldValue) {
      el.instance.visible = binding.value
    }
  },
  // 钩子函数：在指令解绑时调用
  unbind(el) {
    const loadingDOM = el.instance.$el
    if(loadingDOM.parentNode) {
      // 从元素中移除loading组件的DOM
      loadingDOM.parentNode.removeChild(loadingDOM)
    }
    // 销毁loading组件
    el.instance.$destroy()
    el.instance = null
  }
}