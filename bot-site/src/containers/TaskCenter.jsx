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

    showAlert() {
        const myAlert = <DangerAlert
        text="This bot is still working!" />;
        if (true) {
            ReactDOM.render(myAlert, document.getElementById('list-item'));
        }
    }

    render() {
        return(
            <Container className="TaskCenter">
                <Col>
                    <ListGroup> {
                        this.props.tasks.map((task, taskIndex) => {
                            return (
                                <div id="list-item">
                                <ListGroupItem 
                                key={taskIndex}
                                action onClick={() => {
                                    this.props.bot.isActive === true ?
                                    this.showAlert() : 
                                    this.props.completeTask(task, this.props.botIndex, taskIndex);
                                    
                                }}>
                                    {`${task.description} (${task.eta/1000} seconds)`}
                                </ListGroupItem>
                                </div>
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