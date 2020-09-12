import React, {Component} from 'react';
import {
    Container, Col, Form,
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
        if (this.state.newBotName === '' || this.state.newBotType === '') {
            alert('Please initialize a name and a type.');
        } else {
            this.props.addBotToState();
            this.setState({newBotName: "", newBotType: []})
        }
    }

    render() {
        return (
            <Container className="BotForm">
                <h2>Initialize a Bot</h2>
                <Form className="form" onSubmit={(e) => this.submitForm(e)}>
                    <Col>
                        <FormGroup>
                            <Label>Name</Label>
                            <Input 
                                type="text"
                                name="name"
                                placeholder="Terminator"
                                value={this.state.newBotName}
                                onChange={this.handleNameChange}
                            />
                        </FormGroup>
                    </Col>
                    <Col>
                        <FormGroup>
                            <Label>Type</Label>
                            <Input
                                type="select"
                                name="type"
                                value = {this.state.newBotType}
                                onChange = {this.handleTypeChange}>
                                <option>Unipedal</option>
                                <option>Bipedal</option>
                                <option>Quadrupedal</option>
                                <option>Arachnid</option>
                                <option>Radial</option>
                                <option>Aeronautical</option>
                            </Input>
                        </FormGroup>
                    </Col>
                    <Button color="primary">Build!</Button>
                </Form>
            </Container>
        );
    }
}

export default BotForm;