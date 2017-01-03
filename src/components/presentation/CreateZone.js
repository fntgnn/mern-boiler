import React, { Component } from 'react';

export default class CreateZone extends Component{

	constructor(){
		super();
		this.state={
			zone:{
				name: '',
				zipCode: []
			}
		};
	}

	updateZone(event){
		console.log("updateZone: "+event.target.name + "==" + event.target.value);
		let updatedZone=Object.assign({}, this.state.zone);
		updatedZone[event.target.name] = event.target.value;
		this.setState({
			zone: updatedZone
		});
	}

	submitZone(event){
		console.log("submitZone: "+ JSON.stringify(this.state.zone));
		let updated = Object.assign({}, this.state.zone);
		updated['zipCodes']=updated.zipCode.split(',');

		this.props.onCreate(updated);
	}
	

	render(){
		return (
			<div>
				<input onChange={this.updateZone.bind(this)} className="form-control" type="text" name="name" placeholder="Name" /> <br />
                <input onChange={this.updateZone.bind(this)}  className="form-control" type="text" name="zipCode" placeholder="Zip Code" /> <br/>
                <button onClick={this.submitZone.bind(this)} className="btn btn-danger">Submit Zone</button>
			</div>
		);
	}
}