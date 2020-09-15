import React, {Component} from 'react';
import {
    Col, Row, Card, Spinner, 
    CardTitle, CardText, CardSubtitle, CardBody
} from 'reactstrap';
import TaskCenter from './TaskCenter';

class TaskCards extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            this.props.bots.map((bot, i) => (
                <Card key={i}>
                    <CardTitle><h5>{bot.botName} the {bot.botType}'s Tasks:</h5></CardTitle>
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
                            <TaskCenter
                                bot={bot}
                                botIndex={i}
                                tasks={bot.tasks}
                                completeTask={this.props.completeTask}
                            />
                    </CardBody>
                </Card>

            ))
        );
    }
}

export default TaskCards;