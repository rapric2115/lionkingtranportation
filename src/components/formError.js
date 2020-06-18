import React, { Component } from 'react';

class FormError extends Component {
    render() {
        const {Message} = this.props;
        return(
            <div className="text-danger text-center mt-4">
                {Message}
            </div>
        )
    }
}

export default FormError;