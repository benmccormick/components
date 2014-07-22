/** @jsx React.DOM */
'use strict';
define(function () {
    var posts = JSON.parse(localStorage.getItem('shortLog-posts'))|| [];
    $('body').on('postChange',function() {
        localStorage.setItem('shortLog-posts',JSON.stringify(posts));
    });
    return {
        addPost: function(text,time) {
            posts.push({
                text:text,
                time:time
            });
            $('body').trigger('postChange');

        },
        getPosts: function() {
            return posts;
        },
        removeChangeListener: function(callback) {
            $('body').off('postChange',callback);
        },
        addChangeListener: function(callback) {
            $('body').on('postChange',callback);
        },
        removePost:function(idx) {
            posts.splice(idx,1);
            $('body').trigger('postChange');
        }
    };
});
