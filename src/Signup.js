import React, { Component } from 'react'
import { userSignup } from './api-utils.js'

export default class SignupPage extends Component {
    state = {
        email: '',
        password: '',
    }

    handleEmailChange = (e) => {
        this.setState({ email: e.target.value })
    };

    handlePasswordChange = (e) => {
        this.setState({ password: e.target.value })
    };

    handleSubmit = async (e) => {
        e.preventDefault();
        const user = await userSignup(this.state.email, this.state.password)
        this.props.handleUserChange(user);

        console.log(user);
    }

    render() {
        console.log(this.state)
        return (
            <div>
                <h3>Signup</h3>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Email
                        <input onChange={this.handleEmailChange}/>
                    </label>
                    <label>
                        Password
                        <input onChange={this.handlePasswordChange}/>
                    </label>
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}
