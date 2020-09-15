import React, { useState, Component } from 'react';
import {UncontrolledAlert} from 'reactstrap';

class DangerAlert extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <UncontrolledAlert color="danger">
                {this.props.text}
            </UncontrolledAlert>
        );
    }
}

export default DangerAlert;