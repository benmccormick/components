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
                <div>
                    <div className="header">
                        <h1>ShortLog</h1>
                        <span id="count" >{postCount}</span>
                    </div>
                    <AddPost/>
                    <PostList posts={this.state.posts}/>
                    <footer>
                    </footer>
                </div>			
            );
		}
	});
});
