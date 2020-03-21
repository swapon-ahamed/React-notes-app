import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { BrowserRouter } from 'react-router-dom';

// const output = React.createElement('h1', {}, "Hello react workshop");

// jsx(Javascript syntax extension)
// const output = (
// 	<div>
// 	<h1 className="test">Hello React workshopdfd JSX </h1>
// 	<label htmlFor="name">Name</label>
// 	<div>{5+5}</div>
// 	</div>

// 	);

// we can create component in two ways
// function based
// class based

// const Output = () => {
// 	return (
// 		<div>
// 			<h1 className="test">Hello React workshopdfd JSX </h1>
// 			<label htmlFor="name">Name</label>
// 			<div>{5+5}</div>
// 		</div>
// 	)
// }


ReactDOM.render(
	<BrowserRouter> 
		<App/> 
	</BrowserRouter>, 
	document.getElementById('root')
);