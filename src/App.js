import React from 'react';
import {Route} from 'react-router'
import Chat from './components/Chat/Chat';
import Join from './components/Join/Join';

import './App.css';

function App() {
  return (
    <div className="App">
      <Route path='/' exact component={Join}/>
      <Route path='/chat' component={Chat}/>
    </div>
  );
}

export default App;