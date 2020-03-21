import React, {useState, useContext} from 'react';
import uuid from 'uuid/v4';
import classNames from 'classnames';
import { NoteContext } from '../contexts/Note.context';
import axios from 'axios';

const AddNote = (props) => {
	const context = useContext(NoteContext)
	const [ note, setNote ] = useState({
		id: uuid(),
		title: '',
		description: ''
	});

	const [errors,setErrors] = useState({})

	const handleChange =  e => {
		setNote({
			...note,
			[e.target.name] : e.target.value
		});
	};


	const handleSubmit = async e  => {
		e.preventDefault();
		if(note.title === ''){
			setErrors({
				...errors,
				title: 'Please provide title'
			})
			return;
		}

		if(note.description === ''){
			setErrors({
				...errors,
					title: '',
					description: 'Please provide description'
			})
			return;
		}


		const res = await axios.post('https://jsonplaceholder.typicode.com/comments',{
			name: note.title,
			body: note.description
		});

		const {data} = res;
		context.addNote(data);
		props.history.push('/');
		setNote({
			id:'',
			title: '',
			description: '',
			errors: {}
		});
	};
	return(
		<>
		<h3>Add Note</h3>
		<form onSubmit={handleSubmit}>
		  <div className="form-group">
		    <label htmlFor="Title">Title</label>
		    <input type="text" 
				   name="title"
				   value={note.title}
				   onChange={handleChange}
		    className={classNames('form-control', !!errors.title && 'is-invalid')}/>
		    <div className="invalid-feedback">Title must be required</div>
		  </div>
		  <div className="form-group">
		    <label htmlFor="Description">Description</label>
		    <textarea 
		    	name="description"
				value={note.description}
				onChange={handleChange}
				className={classNames('form-control', !!errors.description && 'is-invalid')}
		    />
		    <div className="invalid-feedback">Description must be required</div>
		  </div>
		  <button type="submit" className="btn btn-primary">Submit</button>
		</form>
		</>
	);

}

export default AddNote;