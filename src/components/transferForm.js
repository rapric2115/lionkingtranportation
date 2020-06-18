import React, { Component } from 'react';
import G_KEY from  '../api_key/google_map_api_key';

class TransferForm extends Component {
    constructor() {
        super()
        this.state = {
            origen: '',
            destination: '',
            time: '',
            distance: ''
        }
    }
    render() {

        const key = G_KEY;
        console.log(key);

        return(
            <div>Transfer Form </div>
        );
    }
}

export default TransferForm;