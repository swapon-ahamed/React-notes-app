import React, { Component } from 'react';
import { NoteContext } from '../contexts/Note.context';
import axios from 'axios';
class Note extends Component{
	static contextType = NoteContext;
	handleRemove = async id => {
		await axios.delete(`https://jsonplaceholder.typicode.com/comments/${id}`);
		this.context.removeNote(id);

	}
	render(){
		const {name:title, body:description, id } = this.props.note;
		return (
			<div className="card">
				<div className="card-body">
					<h3 className="card-title">{title}</h3>
					<p className="card-text">{description}</p>
					<button className="btn btn-secondary" onClick={() =>this.handleRemove(id)}>Remove</button>
				</div>
			</div>
		)
	}
}

export default Note;