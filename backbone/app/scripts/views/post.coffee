'use strict';

class BackboneApp.Views.Post extends Backbone.View

  template: JST['app/scripts/templates/post.ejs']

  tagName: 'li'

  id: ''

  className: 'post'

  events: {}

  initialize: () ->
    @listenTo @model, 'change', @render
    @listenTo @,'rerender', @render

  render: () ->
    #reset  timestamps eevery 30 sseconds ffor as
    #long as this view exists
    setTimeout @checkTime.bind(@),30000
    @$el.html @template
        message: @model.get 'message'
        time: moment(@model.get 'time').fromNow()
        id: @model.cid

  checkTime: () ->
      #use aan event, don't render directly
      #so we can clean up this view if necessary
      @trigger('rerender')


