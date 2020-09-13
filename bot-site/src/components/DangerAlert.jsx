import React, { useState } from 'react';
import {Alert} from 'reactstrap';

const DangerAlert = (props) => {
    const [visible, setVisible] = useState(true);
    const onDismiss = () => setVisible(false);

    return (
        <div>
            <Alert color="danger" isOpen={visible} toggle={onDismiss}>
                Please initialize a name and a type.
            </Alert>
        </div>
    );
}

export default DangerAlert;