import React, {Component} from 'react';
import {
    Col, Row, Card, Spinner,
    CardTitle, CardText, CardSubtitle, CardBody
} from 'reactstrap';
import TaskCenter from './TaskCenter';
import '../App.css';

class TaskCards extends Component {
    render() {
        return (
            <div className="card-container">
            {this.props.bots.map((bot, i) => (
                <Card className="card" key={i} outline color="success">
                    <CardTitle><h5>Uncompleted Tasks for {bot.botName} the {bot.botType}:</h5></CardTitle>
                    <CardBody>
                        {bot.isActive ?
                            <CardText>
                                <Row>
                                    <Col>
                                        <CardSubtitle>{`${bot.botName} is working`}</CardSubtitle>
                                    </Col>
                                    <Col>
                                        <Spinner color="success"/>
                                    </Col>
                                </Row>
                            </CardText>
                            : null
                        }
                        {bot.score === 5 ?
                            <h6>Congratulations! You've finished all of the tasks for {bot.botName}. They grow up so fast! 🥳</h6>
                            :
                            <TaskCenter
                                bot={bot}
                                botIndex={i}
                                tasks={bot.tasks}
                                completeTask={this.props.completeTask}
                            />
                        }
                    </CardBody>
                </Card>
            ))}
            </div>
        );
    }
}

export default TaskCards;