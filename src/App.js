import React from 'react';
import {Route, Switch} from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import MainSidebar from './components/MainSidebar';
import NoteSidebar from './components/NoteSidebar';
import MainMain from './components/MainMain';
import NoteMain from './components/NoteMain';
import NotFound from './components/NotFound';
import Store from './store';

class App extends React.Component {
  constructor(props) { // Called before component mounts
      super(props);
      this.state = Store
  }

  render(){
      return (
        <div className="App">
          <Header />
          <main>
            <div className='sidebar'>
              <Switch>
                <Route exact path='/' render={(routerProps) =>
                  <MainSidebar
                    folders={this.state.folders}
                  />
                }/>
                <Route path='/folder/:folderId' render={(routerProps) =>
                  <MainSidebar {...routerProps}
                    folders={this.state.folders}
                  />
                }/>
                <Route path='/note/:noteId' render={(routerProps) =>
                  <NoteSidebar {...routerProps}
                    folder={this.state.folders.find(folder => folder.id===this.state.notes.find(note => note.id === routerProps.match.params.noteId).folderId)}
                  />
                }/>
                <Route component={NotFound} />
             </Switch>
            </div>
            <div className='content'>
              <Switch>
                <Route exact path='/' render={(routerProps) =>
                  <MainMain 
                    notes={this.state.notes}
                  />
                }/>
                <Route path='/folder/:folderId' render={(routerProps) =>
                  <MainMain 
                    notes={this.state.notes.filter(note => note.folderId === routerProps.match.params.folderId)}
                  />
                }/>
                <Route path='/note/:noteId' render={(routerProps) =>
                  <NoteMain
                    note={this.state.notes.find(note => note.id === routerProps.match.params.noteId)}
                  />
                }/>
              </Switch>
            </div>
          </main>
        </div>
      );
    
  }
}

export default App;