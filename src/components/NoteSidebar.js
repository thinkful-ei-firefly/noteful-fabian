import React from 'react';
import './NoteSidebar.css';

class NoteSidebar extends React.Component{
	static defaultProps = {
		folder:{}
	}

	render(){
		return(
			<div>
				<button className='button-back' onClick={this.props.history.goBack}>
		            Back
		         </button>
				<h2>{this.props.folder.name}</h2>
			</div>
			);
	}
	
}

export default NoteSidebar;