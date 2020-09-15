import React, { Component } from 'react';
import {
    ListGroup, ListGroupItem, Container, 
    Alert, Col, Row
} from 'reactstrap';

class TaskCenter extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <Container className="TaskCenter">
                <Col>
                    <ListGroup> {
                        this.props.tasks.map((task, taskIndex) => {
                            return (
                                <ListGroupItem 
                                key={taskIndex}
                                action onClick={() => {
                                    this.props.bot.isActive === true ?
                                    alert("Still working!") :
                                    //<Alert color="danger">This bot is still working!</Alert> : 
                                    this.props.completeTask(task, this.props.botIndex, taskIndex)
                                }}>
                                    {`${task.description} (${task.eta/1000} seconds)`}
                                </ListGroupItem>
                            );
                        })
                    }
                    </ListGroup>
                </Col>
            </Container>
        );
    }
}

export default TaskCenter;