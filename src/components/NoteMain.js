import React from 'react';

class NoteMain extends React.Component{
	static defaultProps = {
		note: {}
	}

	render(){
		console.log(this.props.note);
		return(
			<div>
				<div>
					<h3>{this.props.note.name}</h3>
					<p>{this.props.note.modified}</p>
					<button>Delete Note</button>
				</div>
				<div>
					{this.props.note.content}
				</div>
			</div>
			);
	}

	
}

export default NoteMain;