import React from 'react';
import './NoteMain.css';

class NoteMain extends React.Component{
	static defaultProps = {
		note: {}
	}

	render(){
		return(
			<div>
				<div className='note'>
					<h3>{this.props.note.name}</h3>
					<p>Modified {(new Date(this.props.note.modified).toLocaleString())}</p>
					<button className='button-delete'>Delete Note</button>
				</div>
				<div className='content-note'>
					{this.props.note.content}
				</div>
			</div>
			);
	}

	
}

export default NoteMain;