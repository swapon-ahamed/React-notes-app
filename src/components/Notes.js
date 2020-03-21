import React, { Component } from 'react';
import Note from './Note';
import { NoteContext } from '../contexts/Note.context';

class Notes extends Component {
	static contextType = NoteContext;
	render(){
		const { notes } = this.context;
		return (
				<div>
					<h3>Notes</h3>
					{notes.map( note => 
						<Note key={note.id}  
						note={note} description={ note.description } />
					)}
				</div>
			)
	}
	

}

export default Notes;