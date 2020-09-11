import React, { Component } from 'react';
import './App.css';
import data                 from './assets/tasks';
import BotForm              from './containers/BotForm';
import shuffleFive          from './utilities/shuffleFive';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bots : [],
      activeBotName : '',
      activeBotType : '',
      newBotName : '',
      newBotType : ''
    };

    this.addBotNameToState = this.addBotNameToState.bind(this);
    this.addBotTypeToState = this.addBotTypeToState.bind(this);
    this.addBotToState = this.addBotToState.bind(this);
  };

  addBotNameToState(name) {
    this.setState({newBotName : name});
    console.log(this.state.newBotName);
  };

  addBotTypeToState(type) {
    this.setState({newBotType : type});
    console.log(this.state.newBotType);
  };

  addBotToState() {
    const tasks = data.tasks;
    const fiveTasks = shuffleFive(tasks);

    console.log(this.state.newBotName);
    console.log(this.state.newBotType);
    
    if (this.state.newBotName == '' || this.state.newBotType == '') {
      alert('Please initialize a name and a type.');
    } else {
      const bots = this.state.bots;
      const bot = {};

      // initialize characteristics
      bot.activeBotName = this.activeBotName;
      bot.activeBotType = this.activeBotType;
      bot.tasksCompleted = 0;
      bot.isActive = false;
      bot.tasks = fiveTasks;

      bots.push(bot);
      this.setState({bots : bots});
    };
  };

  render() {
    return(
      <div className="container">
        <h3>Build a Bot</h3>
        <BotForm 
          addBotNameToState = {this.addBotNameToState}
          addBotTypeToState = {this.addBotTypeToState}
          addBotToState = {this.addBotToState}
        />
      </div>
    );
  }
}

export default App;
