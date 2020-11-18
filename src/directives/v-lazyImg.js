// 加载图片未加载时的默认显示图片
import unimg from '@/assets/unimg.png'

// 创建IntersectionObserver示例，名为交叉观察器
const observer = new IntersectionObserver(entries=> {
  // 遍历观察的每个元素
  entries.forEach(entry=>{
    // 判断元素是否进入视窗
    if(entry.isIntersecting) {
      // 如果图片还未加载，则加载图片
      !entry.target.isLoaded && loadImg(entry.target, entry.target.data_src)
    }
  })
})

// 加载图片
function loadImg(el,src) {
  // 创建Image实例：如果在network勾选disable cache，图片会加载两次
  let img = new Image()
  img.src = src
  // 图片加载完成后替换元素SRC属性，同时设置isLoaded为true
  img.onload = ()=>{
    el.src = src
    el.isLoaded = true
  }
  // el.src = src
  // el.isLoaded = true
}

// 导出指令参数
export default {
  // 当元素插入Dom后执行
  inserted(el,binding) {
    // 设置属性
    el.src = unimg
    el.data_src = binding.value
    // 观察当前元素
    observer.observe(el)
  },
  // 指令销毁时
  unbind() {
    // 摧毁intersectionObserver实例
    observer.disconnect()
  }
}