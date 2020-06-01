import React, {Component} from 'react';
import {
    ButtonGroup,
    Button
} from 'react-bootstrap';

class Buttons extends Component {
    constructor() {
        super();
    }

    render() {
        return (
        <div className="text-center">
            <ButtonGroup className="mb-2 mt-4">
                <Button>Left</Button>
                <Button>Right</Button>
            </ButtonGroup>
        </div>
        )
    }
}

export default Buttons;