import React from 'react';

class NoteSidebar extends React.Component{
	static defaultProps = {
		folder:{}
	}

	render(){
		console.log(this.props.folder);
		return(
			<div>
				<h2>{this.props.folder.name}</h2>
		         <button onClick={this.props.history.goBack}>
		            Back
		         </button>
			</div>
			);
	}
	
}

export default NoteSidebar;