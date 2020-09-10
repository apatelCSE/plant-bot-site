import React, { Component }  from 'react';
import './App.css';
import BotForm from './containers/BotForm';

class App extends Component {
  render() {
    return(
      <div className="container">
        <h3>Build a Bot</h3>
        <BotForm />
      </div>
    );
  }
}

export default App;
