import React from 'react';
import { NavLink } from 'react-router-dom';
import './MainSidebar.css'
function MainSidebar(props){
	let link;
	
	const links = props.folders.map(folder => {
		if (props.match && props.match.params.folderId===folder.id){
			link = <NavLink activeClassName="active" to={'/folder/' + folder.id}>
	        	{folder.name}
	      	</NavLink>
		}else{
			link = <NavLink to={'/folder/' + folder.id}>
	        	{folder.name}
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
	      <button className='button-add'>Add Folder</button>
		</div>
		);
}

export default MainSidebar;