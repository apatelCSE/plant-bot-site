import React, { Component } from 'react';
import {UncontrolledAlert} from 'reactstrap';

class DangerAlert extends Component {
    render() {
        return (
            <UncontrolledAlert color="danger">
                {this.props.text}
            </UncontrolledAlert>
        );
    }
}

export default DangerAlert;