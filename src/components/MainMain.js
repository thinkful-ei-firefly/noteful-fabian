import React from 'react';
import { Link } from 'react-router-dom';

class MainMain extends React.Component{
	static defaultProps = {
		notes: []
	}

	render(){
		const notes = this.props.notes.map(note => {
			return <div key={note.id}>
					<Link to={'/note/' + note.id}><h3>{note.name}</h3></Link>
					<p>{note.modified}</p>
					<button>Delete Note</button>
				</div>
		})
		return(
			<div>
				{notes}
				<button>Add Note</button>
			</div>
			);
		}
}

export default MainMain;