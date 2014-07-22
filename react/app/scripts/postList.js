/** @jsx React.DOM */
'use strict';
define(['postStore','post'], function (PostStore,Post) {
	return React.createClass({
		render: function() {
            var text,time,posts = [];
            var postlist = this.props.posts;
            for(var key in postlist) {
                text = postlist[key].text;
                time = postlist[key].time;
                posts.push(Post( {text:text, idx:key, time:time}));
            }
			return (
                React.DOM.div( {className:"postlist"}, 
                React.DOM.ul( {className:"posts"}, 
                    posts
                )
                )
            );
		}
	});
});
