import React, { Component } from 'react'
import { userLogin } from './api-utils.js'
import { putTokenInLocalStorage } from './local-storage-utils.js';

export default class LoginPage extends Component {
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
        const user = await userLogin(this.state.email, this.state.password)
        this.props.handleUserChange(user);
        putTokenInLocalStorage(user.token)
        this.props.history.push('/todos');
    }

    render() {
        console.log(this.state)
        return (
            <div>
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
