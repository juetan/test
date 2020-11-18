import Vue from 'vue'
import conponentLoding from '@/components/Base-loading'

const VLoding = Vue.extend(conponentLoding)

let loading = null

VLoding.prototype.close = function() {
  if(loading) {loading = null}

  this.visible = false

  setTimeout(()=>{
    if(this.$el && this.$el.parentNode) {
      this.$el.parentNode.removeChild(this.$el)
    }
    this.$destroy()
  },300)
}

function Loading(options={}) {
  if(loading) { return loading }

  const bodyElement = document.body

  const data = {
    message: '1',
    ...options
  }

  const instance = new VLoding({
    el: document.createElement('div'),
    data
  })

  bodyElement.appendChild(instance.$el)

  Vue.nextTick(()=>{
    instance.visible = true
  })

  loading = instance

  return instance
}

export default Loading