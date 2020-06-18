import React, { Component } from 'react';
import firebase from './firebase';
import FormError from './formError';


class Register extends Component {
    constructor() {
        super();
        this.state = {
            displayName: '',
            email: '',
            password: '',
            errorMessage: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        // getting form values and set it into state to pass it 
        // throw firebase
        const itemName = e.target.name;
        const itemValue = e.target.value;

        this.setState({ [itemName]: itemValue }, () => {
            if (this.state.displayName !== 'Pedro') {
                this.setState({errorMessage: 'Name doesnt match'}) 
            } else {
                this.setState({errorMessage: null});
            }
        });
    }

    handleSubmit(e) {
        // Save user info to firebase database - user registration
        let registrationInfo = {
            displayName: this.state.displayName,
            email: this.state.email,
            password: this.state.password
        }
        e.preventDefault();
        firebase.auth().createUserWithEmailAndPassword(
            registrationInfo.email,
            registrationInfo.password
        ).catch(error => {
            if (error.message !== null) {
                this.setState({errorMessage: error.message});
            } else {
                this.setState({errorMessage: null});
            }
        })
    }

    render() {
        return(
            <div>
                {this.state.errorMessage !== null ? (
                    <FormError Message={this.state.errorMessage}/>
                ): null}
                <form onSubmit={this.handleSubmit}>
                    <label>Name</label>
                    <input
                    className=""
                    type="text"
                    id="displayName"
                    placeholder="Enter your Name"
                    name="displayName"
                    required
                    value={this.state.displayName}
                    onChange={this.handleChange}
                    />
                </form>
            </div>
        )
    }
    
}

export default Register;