import Request from './Request'

// 获取最新发表的10篇文章(后台->设置->阅读->最多显示的文章数)
export function API_getPosts() {
  return Request('wp/v2/posts')
}

// 获取指定ID的单篇文章
export function API_getPost(id) {
  if(typeof parseInt(id) !== 'number') {
    return console.warn('The Post ID must be integer')
  }
  return Request(`wp/v2/posts/${id}`)
}