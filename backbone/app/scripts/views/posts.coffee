'use strict';

class BackboneApp.Views.Posts extends Backbone.View

  template: JST['app/scripts/templates/posts.ejs']

  tagName: 'div'

  id: ''

  className: ''

  events: 
      'click .delete': 'delete'

  initialize: () ->
    @listenTo @collection, 'change', @render

  render: () ->
    posts = $( '<ul class="posts"></ul>')
    @collection.forEach (post) ->
        postview = new BackboneApp.Views.Post
            model:post
        item = postview.render()
        posts.append item
    @$el.html posts
    
  delete: (e) ->
      id = $(e.target).data('id')
      @collection.remove(id)
      @collection.trigger 'change'

