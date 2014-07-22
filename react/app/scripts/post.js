/** @jsx React.DOM */
'use strict';
define(['postStore'],function (PostStore) {
	return React.createClass({
        _interval: null,
        getInitialState: function() {
            return {
                time: this._getCurrentTimeDiff(this.props.time)
            } ;
        },
        updateState: function() {
            this.setState({time:this._getCurrentTimeDiff()});
        },
        _getCurrentTimeDiff: function() {
            return moment(this.props.time).fromNow();
        },
        componentDidMount: function() {
            this._interval = setInterval(this.updateState.bind(this),30000);
        },
        componentWillUnmount: function() {
            clearInterval(this._interval);
        },
        deletePost: function() {
            PostStore.removePost(this.props.idx);
        },
		render: function() {
			return (
                React.DOM.li( {className:"post"}, 

                    React.DOM.span( {className:"message"}, this.props.text),
                    React.DOM.span( {className:"time"}, this.state.time),
                    React.DOM.span( {className:"delete", onClick:this.deletePost}, "x")
                )
            );
		}
	});
});
