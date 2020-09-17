import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {
    ListGroup, ListGroupItem, Container, 
    Col
} from 'reactstrap';
import DangerAlert from '../components/DangerAlert';

class TaskCenter extends Component {
    constructor(props) {
        super(props);
        this.showAlert = this.showAlert.bind(this);
    }

    showAlert(id) {
        const myAlert = <DangerAlert
        text="This bot is still working!" />;
        ReactDOM.render(myAlert, document.getElementById(id));
    }

    render() {
        return(
            <Container className="TaskCenter">
                <Col>
                    {/* Unique div id ensures that error message is assigned to correct task
                        that is over-clicked */}
                    <div id={this.props.botIndex}></div>
                    <ListGroup> {
                        this.props.tasks.map((task, taskIndex) => {
                            return (
                                <ListGroupItem 
                                key={taskIndex}
                                action onClick={() => {
                                    // Start task if bot is available, otherwise display error
                                    this.props.bot.isActive === false ?
                                    this.props.completeTask(task, this.props.botIndex, taskIndex):
                                    this.showAlert(this.props.botIndex);
                                    
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