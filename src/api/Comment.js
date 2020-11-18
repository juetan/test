import Request from './Request'

const infor = {
  "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC93d3cudy5jb20iLCJpYXQiOjE1OTE3ODczNDUsIm5iZiI6MTU5MTc4NzM0NSwiZXhwIjoxNTkyMzkyMTQ1LCJkYXRhIjp7InVzZXIiOnsiaWQiOiI4In19fQ.CLkAqqdqmGzRevorRMsJCyhvqVIMhyIUQ7SBr2t9qGY",
  "user_email": "ssssss@gmail.com",
  "user_nicename": "gogogo",
  "user_display_name": "gogogo"
}

export function API_getCommentsByPostId(id) {
  return Request(`wp/v2/comments?post=${id}`)
}