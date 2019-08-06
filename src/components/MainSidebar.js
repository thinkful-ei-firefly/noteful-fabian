import React from 'react';
import { NavLink } from 'react-router-dom';

function MainSidebar(props){
	let link;
	
	const links = props.folders.map(folder => {
		if (props.match && props.match.params.folderId===folder.id){
			link = <NavLink activeClassName="active" to={'/folder/' + folder.id}>
	        	{folder.name}Hello
	      	</NavLink>
		}else{
			link = <NavLink to={'/folder/' + folder.id}>
	        	{folder.name}Bye
	      	</NavLink>
		}
		return (<li key={folder.id}>
          {link}
        </li>)
	})

	return(
		<div>
			<ul>
	        {links}
	      </ul>
	      <button>Add Folder</button>
		</div>
		);
}

export default MainSidebar;

//