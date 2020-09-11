import React, { Component } from 'react';

/* Import Components */
import Input from '../components/Input';
import Select from '../components/Select';
import Button from '../components/Button';

class BotForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            newBot: {
                name: '',
                type: []
            },

            typeOptions: ['Unipedal', 'Bipedal', 'Quadrupedal', 'Arachnid', 'Radial', 'Aeronautical']
        }
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInput(e) {
        let value = e.target.value;
        let name = e.target.name;
        this.setState( prevState => {
            return {
                newBot : {
                    ...prevState.newBot, [name]: value
                }
            }
        }, () => console.log(this.state.newBot)
        )
    }

    handleSubmit(e) {
        e.preventDefault();
        let botData = this.state.newBot;
        console.log(botData.name);
        console.log(botData.type)
        this.props.addBotNameToState(botData.name);
        this.props.addBotTypeToState(botData.type);
        this.props.addBotToState();
    }
    
    render() {
        return(
            <form className="container" onSubmit={this.handleSubmit}>
                <Input inputType={'text'}
                    title = {'Bot Name'}
                    name = {'name'}
                    value = {this.state.newBot.name}
                    placeholder = {'Enter the bot\'s name'}
                    handleChange = {this.handleInput}
                /> {/* Bot Name */}

                <Select title={'Type'}
                    name={'type'}
                    options = {this.state.typeOptions}
                    value = {this.state.newBot.type}
                    placeholder = {'Select Type'}
                    handleChange = {this.handleInput}
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