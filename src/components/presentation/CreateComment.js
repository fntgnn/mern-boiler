import React, { Component } from 'react';

export default class CreateComment extends Component{

	constructor(){
		super();
		this.state={
			comment:{
				body: '',
				username: ''
			}
		};
	}

	updateComment(event){
		console.log("updateComment: "+event.target.id + "==" + event.target.value);
		let updatedComment=Object.assign({}, this.state.comment);
		updatedComment[event.target.id] = event.target.value;
		this.setState({
			comment: updatedComment
		});
	}

	submitComent(event){
		event.preventDefault();
		console.log("submitComment: "+JSON.stringify(this.state.comment));

		this.props.onCreate(this.state.comment);
		//Si potrebbe mettere qui il post delle APIManager, ma è un componente presentation...è il container che fa tutto il lavoro...bisogna quindi passarlo al container.
	}

	render(){
		return(
			<div>
			<h3>Create Comment </h3>
			<form>
                    <input onChange={this.updateComment.bind(this)} id="username" className="form-control" type="text" name="username" placeholder="Username" /><br />
                    <input onChange={this.updateComment.bind(this)} id="body" className="form-control" type="text" name="comment" placeholder="Text..." /><br />
    
                    <button onClick={this.submitComent.bind(this)} className="btn btn-info"> Submit Comment</button>
                    </form>
            </div>
		);
	}
}