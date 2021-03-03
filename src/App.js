import React, { Component } from 'react'
import './App.css';
import {
    BrowserRouter as Router, 
    Route, 
    Switch,
} from 'react-router-dom';

import HomePage from './HomePage.js';
import TodoListPage from './TodoList.js';
import LoginPage from './login.js';
import SignupPage from './Signup.js';
import { getTokenFromLocalStorage } from './local-storage-utils.js';
import PrivateRoute from './PrivateRoute.js';


export default class App extends Component {
  state = {
    token: getTokenFromLocalStorage(),
  }
  
  handleUserChange = (user) => {
    this.setState({token: user.token,})
  }

    render() {
      console.log(this.state)
        return (
            <div>
                <Router>
                    <Switch>
                        <Route 
                            path="/" 
                            exact
                            render={(routerProps) => <HomePage {...routerProps} />} 
                        />
                        <PrivateRoute 
                            path="/todos" 
                            exact
                            token={this.state.token}
                            render={(routerProps) => 
                              <TodoListPage 
                                token={this.state.token}
                                {...routerProps} />} 
                              />
                        <Route 
                          path="/login" 
                          exact
                          render={(routerProps) => 
                            <LoginPage 
                            handleUserChange={this.handleUserChange}
                            {...routerProps} 
                            />} 
                        />
                        <Route 
                          path="/signup" 
                          exact
                          render={(routerProps) => 
                            <SignupPage 
                            handleUserChange={this.handleUserChange}
                            {...routerProps} />} 
                        />
                    </Switch>
                </Router>
            </div>
        )
    }
}