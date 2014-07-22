'use strict';

class BackboneApp.Views.PostCount extends Backbone.View

  template: JST['app/scripts/templates/postCount.ejs']

  tagName: 'div'

  id: ''

  className: ''

  events: {}

  initialize: () ->
    @listenTo @collection, 'change', @render

  render: () ->
    @$el.html @collection.toJSON().length + ' Posts So Far'
