import React, { Component } from 'react';
import {
  Container, Row, Col, Jumbotron
} from 'reactstrap';
import './App.css';
import data                 from './assets/tasks';
import BotForm              from './containers/BotForm';
import TaskCards            from './containers/TaskCards';
import Leaderboard          from './containers/Leaderboard';
import shuffleFive          from './utilities/shuffleFive';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bots : [],
      leaderboardBots : [],
      newBot: {
        name: '',
        // default type
        type: 'Unipedal',
      },
    };

    this.updateNewBot = this.updateNewBot.bind(this);
    this.addBotToState = this.addBotToState.bind(this);
    this.completeTask = this.completeTask.bind(this);
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
    const leaderboardBots = this.state.leaderboardBots;
    const bot = {};
    const leaderboardBot = {};

    // initialize characteristics
    bot.botName = this.state.newBot.name;
    leaderboardBot.name = this.state.newBot.name;
    bot.botType = this.state.newBot.type;
    leaderboardBot.score = 0;
    bot.score = 0;
    bot.isActive = false;
    bot.tasks = fiveTasks;

    bots.push(bot);
    leaderboardBots.push(leaderboardBot);
    this.setState({bots : bots});
    console.log(bots);
    this.setState( prevState => {
      return {
          newBot : {
              ...prevState.newBot, name: '',
              ...prevState.newBot, type: 'Unipedal'
          }
      }
    })
  };

  completeTask(task, botIndex, taskIndex) {
    const bots = this.state.bots;
    const leaderboardBots = this.state.leaderboardBots;
    let TasksToComplete = bots[botIndex].tasks;

    //bots[botIndex].tasks[taskIndex].completing = true;
    bots[botIndex].isActive = true;
    this.setState({bots : bots});

    setTimeout(() => {
      TasksToComplete.splice(taskIndex, 1);
      bots[botIndex].isActive = false;
      leaderboardBots[botIndex].score++;
      bots[botIndex].score++;
      this.setState({bots : bots});
    }, task.eta);
  };

  render() {
    return(
      <Container className="App">
        <Row>
          <Jumbotron>
            <h1 className="display-3">Welcome to Bot-O-Mat!</h1>
            <hr />
            <p>Bot-O-Mat is a task organizer that allows you to create robots that get your housework done quickly and efficiently. You can start your different robots in the Task Center and see how they measure up against each other in the Leaderboard. Get started by creating your first bot in the Bot Initializer!</p>
          </Jumbotron>
        </Row>
        <Row>
          <Col>
            <BotForm 
              updateNewBot = {this.updateNewBot}
              addBotToState = {this.addBotToState}
            />
          </Col>
          <Col>
            <h2>Leaderboard</h2>
            <div id="leaderboard">
            {this.state.bots.length ?
            <Leaderboard bots={this.state.leaderboardBots} />
            //<Leaderboard users={this.state.bots} paginate={this.state.paginate}/>
            : <h6>There's nothing to show here yet. Create and activate a bot to see its performance here!</h6>
            }
            </div>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col>
          <h2>Task Center</h2>
          {this.state.bots.length ?
            <TaskCards 
              bots={this.state.bots}
              completeTask={this.completeTask}/>
          : <h6>There's nothing to show here yet. Create a bot to see its tasks here!</h6>
          }
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
