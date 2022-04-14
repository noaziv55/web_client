import './LoginPage.css';
import { Component } from 'react';
import React from 'react';
import { validateUser, userDataBase} from '../DataBase/DataBase';

export class LoginPage extends Component {

    validatefields() {
        var username = document.getElementById("Username").value;
        var password = document.getElementById("Password").value;
        if (username.length === 0 || password.length === 0) {
            alert("Please fill all fields properly!");
            return;
        }
        if (password.length < 8) {
            alert("Password too short! Please enter 8 characters or more");
            return;
        } else {
            if (userDataBase.has(username)) {
                if(validateUser(username, password)){
                    alert("SignIn successfully");
                    window.location.href = "ChatPage";
                }
                
            }
            alert("user doesn't exist");
            return;
        }
    }

    render() {
        return (
            <div className="container">
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
            </div>
        );
    }
}

export default LoginPage;