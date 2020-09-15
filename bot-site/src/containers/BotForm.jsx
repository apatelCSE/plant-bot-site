import React, {Component} from 'react';
import {
    Container, Row, Col, Form,
    FormGroup, Label, Input,
    Button
} from 'reactstrap';

class BotForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newBotName : '',
            newBotType : '',
        }
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleTypeChange = this.handleTypeChange.bind(this);
        this.submitForm = this.submitForm.bind(this);
    }

    handleNameChange(e) {
        let value = e.target.value;
        this.setState({newBotName : value});
        this.props.updateNewBot(e);
    }

    handleTypeChange(e) {
        let value = e.target.value;
        this.setState({newBotType : value});
        this.props.updateNewBot(e);
    }

    submitForm(e) {
        e.preventDefault();
        this.props.addBotToState();
        this.setState({newBotName: ""});
        this.setState({newBotType: ""});        
    }

    render() {
        return (
            <Container className="BotForm">
                <h2>Bot Initializer</h2>
                <Form className="form" onSubmit={(e) => this.submitForm(e)}>
                    <Row>
                        <Col>
                        <FormGroup>
                            <Label>Name</Label>
                            <Input 
                                type="text"
                                name="name"
                                placeholder="Terminator"
                                value={this.state.newBotName}
                                onChange={this.handleNameChange}
                                required
                            />
                        </FormGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                        <FormGroup>
                            <Label>Type</Label>
                            <Input
                                type="select"
                                name="type"
                                value = {this.state.newBotType}
                                onChange = {this.handleTypeChange}
                                required>
                                <option>Unipedal</option>
                                <option>Bipedal</option>
                                <option>Quadrupedal</option>
                                <option>Arachnid</option>
                                <option>Radial</option>
                                <option>Aeronautical</option>
                            </Input>
                        </FormGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                        <Button color="primary">Build!</Button>
                        </Col>
                    </Row>
                </Form>
            </Container>
        );
    }
}

export default BotForm;