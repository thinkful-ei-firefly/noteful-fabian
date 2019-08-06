import React from 'react';
import {NavLink} from 'react-router-dom';

function Header(){
	return(
		<div>
			<NavLink to='/'>
	        	<h1>Noteful</h1>
	      	</NavLink>
			
		</div>
		);
}

export default Header;