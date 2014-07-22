window.BackboneApp =
  Models: {}
  Collections: {}
  Views: {}
  Routers: {}
  init: ->
    'use strict'
    postlist = new @Collections.Posts JSON.parse(localStorage.getItem('posts'))
    postlist.on 'change', ->
        localStorage.setItem 'posts' , JSON.stringify(postlist.toJSON())
    posts = new @Views.Posts 
        el: '#postlist'
        collection:postlist
    posts.render()

    count = new @Views.PostCount
        el: '#count'
        collection:postlist
    count.render()
    addPost = new @Views.AddPost
        el: '#addpost'
        collection:postlist
    addPost.render()

$ ->
  'use strict'
  BackboneApp.init()
