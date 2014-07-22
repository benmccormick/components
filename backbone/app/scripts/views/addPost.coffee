'use strict';

class BackboneApp.Views.AddPost extends Backbone.View

  template: JST['app/scripts/templates/addPost.ejs']

  tagName: 'div'

  id: ''

  className: ''

  events:
      'keyup #newpost':'newPost'

  initialize: () ->
    @listenTo @collection, 'change', @render

  render: () ->
    @$el.html @template()

  newPost: (e) ->
    val = $('#newpost').val()
    num = 40 - val.length
    if e.which is 13 and num >= 0
      @collection.add new BackboneApp.Models.Post
        message: val
        time: Date.now()
      @collection.trigger 'change'
      $('#newpost').val('').focus();
      num = 40

    if num > 10
        className = 'ok'
    else if num > 0
        className = 'warning'
    else if num is 0 
        className = 'full'
    else if num < 0
        className = 'error'

    $('.charsleft')
      .removeClass(['ok','warning','full','error'].join ' ')
      .addClass(className)
      .text(num)

