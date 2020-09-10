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
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.handleInput = this.handleInput.bind(this);
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

    handleFormSubmit(e) {
        e.preventDefault();
        let botData = this.state.newBot;

        fetch('http://example.com',{
            method: "POST",
            body: JSON.stringify(botData),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        }).then(response => {
            response.json().then(data => {
                console.log("Successful" + data);
            })
        })
    }
    
    render() {
        return(
            <form className="container" onSubmit={this.handleFormSubmit}>
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

                <Button
                    action = {this.handleFormSubmit}
                    type = {'primary'}
                    title = {'Build'}
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