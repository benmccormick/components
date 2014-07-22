/** @jsx React.DOM */
'use strict';
define(['postStore'], function (PostStore) {
    function getCountClass(length) {
        if(length > 10) {
            return 'ok'; 
        } 
        else if( length > 0) {
            return 'warning'; 
        }
        else if(!length) {
            return 'full';
        }
        else {
            return 'error';
        }
    }
	return React.createClass({
		getInitialState: function() {
			return {value: ''};
		},
        handleInput: function(event) {
            this.setState({
                value: event.target.value,
                postLength: 40-event.target.value.length
            });
        },
        handleSubmit: function(event) {
            var val = this.state.value,
                length = this.state.postLength,
                key = event.which;
            if(key === 13 && length > 0)  {
                this.setState({value:''});
                PostStore.addPost(val,Date.now());
            }
        },
		render: function() {
            var value = this.state.value;
            var charsLeft = this.state.postLength
            var countClass = getCountClass(charsLeft);
			return (
                React.DOM.div( {id:"addpost"}, 
                React.DOM.input( {type:"text", value:value, onChange:this.handleInput,
                    onKeyUp:this.handleSubmit,
                    placeholder:"Whats on your mind?", id:"newpost"}),
                React.DOM.span( {className:'charsleft ' +countClass}, charsLeft)
                )
            );
		}
	});
});
