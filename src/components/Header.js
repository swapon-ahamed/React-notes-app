import React from 'react';
import { NavLink } from 'react-router-dom';
const Header = () => {
	return ([
			<nav className="navbar navbar-expand-sm navbar-light bg-light">
			<NavLink className="navbar-brand" exact to="/">Notes App</NavLink>
			</nav>,
			<ul className="navbar-nav mr-auto">
		      <li className="nav-item">
		        <NavLink className="nav-link" exact to="/">Home</NavLink>
		      </li>
		      <li className="nav-item">
		        <NavLink className="nav-link" to="/add">Add Note</NavLink>
		      </li>
		      <li className="nav-item">
		        <NavLink className="nav-link" to="/about">About Us</NavLink>
		      </li>

			</ul>
	]);
}

export default Header;