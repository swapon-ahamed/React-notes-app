import React,{ Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Notes from './Notes';
import AddNote from './AddNote_hook';
import About from './About';
import NotFound from './NotFound';
import NoteProvider from '../contexts/Note.context';

class App extends Component {

	render(){
		return (
				<>
				<Header/>
				<NoteProvider>
				<Switch>
				<Route path='/' 
					exact
					component={Notes}  />
				
				<Route path='/add' component={AddNote}/>
				
				<Route path='/about' component={About} />
				<Route component={NotFound}/>
				</Switch>
				</NoteProvider>
				<Footer/>
				</>	
		)
	}
}

export default App;