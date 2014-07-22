/** @jsx React.DOM */
'use strict';
define(['addPost','postList','postStore'], function (AddPost,PostList,PostStore) {
	return React.createClass({
		getInitialState: function() {
			return {
                posts:PostStore.getPosts()
            };
		},
        _onChange: function() {
            this.setState({posts : PostStore.getPosts()});
        },
        componentDidMount:function() {
            PostStore.addChangeListener(this._onChange);
        },
        componentWillUnmount: function() {
            PostStore.removeChangeListener(this._onChange);
        },
		render: function() {
            var postCount = this.state.posts.length;
			return (
                React.DOM.div(null, 
                    React.DOM.div( {className:"header"}, 
                        React.DOM.h1(null, "ShortLog"),
                        React.DOM.span( {id:"count"} , postCount)
                    ),
                    AddPost(null),
                    PostList( {posts:this.state.posts}),
                    React.DOM.footer(null
                    )
                )			
            );
		}
	});
});
