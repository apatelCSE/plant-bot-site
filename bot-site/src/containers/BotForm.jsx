import React, { Component } from 'react';

/* Import Components */
import Input from '../components/Input';
import Select from '../components/Select';
import Button from '../components/Button';

class BotForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            newBotName : '',
            newBotType : [],

            typeOptions: ['Unipedal', 'Bipedal', 'Quadrupedal', 'Arachnid', 'Radial', 'Aeronautical']
        }
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleTypeChange = this.handleTypeChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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

    handleSubmit(e) {
        e.preventDefault();
        console.log(this.state.newBotName);
        console.log(this.state.newBotType);
        if (this.state.newBotName === '' || this.state.newBotType === '') {
            alert('Please initialize a name and a type.');
        } else {
            this.props.addBotToState();
            this.setState({newBotName: "", newBotType: []})
            console.log(this.state.newBotName);
            console.log(this.state.newBotType);
        }
    }
    
    render() {
        return(
            <form className="container" onSubmit={this.handleSubmit}>
                <Input inputType={'text'}
                    title = {'Bot Name'}
                    name = {'name'}
                    value = {this.state.newBotName}
                    placeholder = {'Enter the bot\'s name'}
                    handleChange = {this.handleNameChange}
                /> {/* Bot Name */}

                <Select title={'Type'}
                    name={'type'}
                    options = {this.state.typeOptions}
                    value = {this.state.newBotType}
                    placeholder = {'Select Type'}
                    handleChange = {this.handleTypeChange}
                /> {/* Bot Type */}

                <Button title = {'Build'}
                    action = {this.handleSubmit}
                    type = {'primary'}
                    style = {buttonStyle}
                /> {/* Build a Bot */}
            </form>
        );
    }

}

const buttonStyle = {
    margin : '10px'
}

export default BotForm;