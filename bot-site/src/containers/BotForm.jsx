import React from 'react';
import {Button, Form, FormGroup, Label, Input, FormText} from 'reactstrap';

const BotForm = (props) => {
    return(
        <Form>
            <FormGroup>
                <Label for="botName">Name</Label>
                <Input type="text" name="name" id="botName" placeholder="Terminator" />
            </FormGroup>
            <FormGoup>
                <Label for="botType">type</Label>
                <Input type="select" name="select" id="botType">
                    <option>Unipedal</option>
                    <option>Bipedal</option>                    <option>Unipedal</option>
                    <option>Quadrupedal</option>
                    <option>Arachnid</option>
                    <option>Radial</option>
                    <option>Aeronautical</option>
                </Input>
            </FormGoup>
            <Button>Submit</Button>
        </Form>
    );
}

export default BotForm;