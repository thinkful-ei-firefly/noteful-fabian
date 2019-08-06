import React from 'react';
import { Link } from 'react-router-dom';
import './MainMain.css'

class MainMain extends React.Component{
	static defaultProps = {
		notes: []
	}

	render(){
		const notes = this.props.notes.map(note => {
			return <div className='note' key={note.id}>
					<Link to={'/note/' + note.id}><h3>{note.name}</h3></Link>
					<p>Modified {(new Date(note.modified).toLocaleString())}</p>
					<button className='button-delete'>Delete Note</button>
				</div>
		})
		return(
			<div>
				{notes}
				<button className='button-add'>Add Note</button>
			</div>
			);
		}
}

export default MainMain;