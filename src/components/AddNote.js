import React, {Component} from 'react';
import uuid from 'uuid/v4';
import classNames from 'classnames';
import { NoteContext } from '../contexts/Note.context';
import axios from 'axios';

class AddNote extends Component{
	static contextType = NoteContext;
	state = {
		id: uuid(),
		title: '',
		description: '',
		errors: {}
	}

	handleChange =  e => {
		this.setState({
			[e.target.name] : e.target.value
		});
	};

	handleSubmit = async e  => {
		e.preventDefault();
		if(this.state.title === ''){
			this.setState({
				errors: {...this.state.errors,
					title: 'Please provide title'
				}
			})
			return;
		}

		if(this.state.description === ''){
			this.setState({
				errors: { ...this.state.errors,
						title: '',
					description: 'Please provide description'
				}
			})
			return;
		}


		const res = await axios.post('https://jsonplaceholder.typicode.com/comments',{
			name: this.state.title,
			body: this.state.description
		});

		const {data} = res;
		this.context.addNote(data);
		this.props.history.push('/');
		this.setState({
			id:'',
			title: '',
			description: '',
			errors: {}
		});
	};
	render(){
		return (
			<>
			<h3>Add Note</h3>
			<form onSubmit={this.handleSubmit}>
			  <div className="form-group">
			    <label htmlFor="Title">Title</label>
			    <input type="text" 
					   name="title"
					   value={this.state.title}
					   onChange={this.handleChange}
			    className={classNames('form-control', !!this.state.errors.title && 'is-invalid')}/>
			    <div className="invalid-feedback">Title must be required</div>
			  </div>
			  <div className="form-group">
			    <label htmlFor="Description">Description</label>
			    <textarea 
			    	name="description"
					value={this.state.description}
					onChange={this.handleChange}
					className={classNames('form-control', !!this.state.errors.description && 'is-invalid')}
			    />
			    <div className="invalid-feedback">Description must be required</div>
			  </div>
			  <button type="submit" className="btn btn-primary">Submit</button>
			</form>
			</>
		)
	}
}

export default AddNote;