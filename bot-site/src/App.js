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
      newBot: {
        name: '',
        type: []
      }
    };

    this.updateNewBot = this.updateNewBot.bind(this);
    this.addBotToState = this.addBotToState.bind(this);
  };

  updateNewBot(e) {
    let value = e.target.value;
    let name = e.target.name;
    this.setState( prevState => {
        return {
            newBot : {
                ...prevState.newBot, [name]: value
            }
        }
    })
  };

  addBotToState() {
    const tasks = data.tasks;
    const fiveTasks = shuffleFive(tasks);
    
    const bots = this.state.bots;
    const bot = {};

    // initialize characteristics
    bot.botName = this.state.newBot.name;
    bot.botType = this.state.newBot.type;
    bot.tasksCompleted = 0;
    bot.isActive = false;
    bot.tasks = fiveTasks;

    bots.push(bot);
    this.setState({bots : bots});
    console.log(bots);
  };

  render() {
    return(
      <div className="container">
        <h3>Build a Bot</h3>
        <BotForm 
          updateNewBot = {this.updateNewBot}
          addBotToState = {this.addBotToState}
        />
      </div>
    );
  }
}

export default App;
