import './LoginPage.css';
import { Component } from 'react';
import React from 'react';

export class LoginPage extends Component {

    validatefields() {
        var username = document.getElementById("Username");
        var password = document.getElementById("Password");
        if (username.value.length === 0 || password.value.length === 0) {
            alert("Please fill all fields properly!");
            return false;
        }
        if (password.value.length < 8) {
            alert("Password too short! Please enter 8 characters or more");
            return false;
        } else {
            alert("SignIn successfully")
            window.location.href = "ChatPage"; }
            //todo: add user to map
    }

    render() {
        return (
            <div className="outterBlock">
                <div className="block">
                    <div className="form-floating very-cool-margin">
                        <input type="username" className="form-control" id="Username" placeholder="text" required></input>
                        <label htmlFor="floatingInput">Username</label>
                    </div>
                    <div className="form-floating">
                        <input type="password" className="form-control" id="Password" placeholder="Password" minLength="8" required></input>
                        <label htmlFor="floatingPassword">Password</label>
                    </div>
                </div>
        
                <button type="submit" className="btn btn-success" onClick={this.validatefields}> Login </button>
            
                <div className="register-link">Not registered? <a href="RegisterPage" className="link-success">Click here</a> to register.</div>
            </div>
        );
    }
}

export default LoginPage;