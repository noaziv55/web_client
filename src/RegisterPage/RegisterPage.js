import './RegisterPage.css';
import { Component } from 'react';
import React from 'react';
import { ReactDOM } from 'react';

export class RegisterPage extends Component {
    state = {
        profileImg: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'
    }
    imageHandler = (e) => {
        const reader = new FileReader();
        reader.onload = () => {
            if (reader.readyState === 2) {
                this.setState({ profileImg: reader.result })
            }
        }
        reader.readAsDataURL(e.target.files[0])
    };
    validatePassword() {
        var username = document.getElementById("Username");
        var nickname = document.getElementById("Nickname");
        var password = document.getElementById("Password1");
        var confirm_password = document.getElementById("Password2");
        if (username.value.length === 0 || nickname.value.length === 0 || password.value.length === 0 || confirm_password.value.length === 0) {
            alert("Please fill all fields properly!");
            return false;
        }

        if (password.value.length < 8 && confirm_password.value.length < 8) {
            alert("Password too short! Please enter 8 characters or more");
            return false;
        }
        if (password.value !== confirm_password.value) {
            alert("Passwords Don't Match");
            return false;

        } else {
            alert("You have successfully registered! go back to login page")
            //todo: add user to map
        }
    }

    render() {
        const { profileImg } = this.state
        return (
            <div className="container">
                <div className="outterBlock">
                    <div className="img-holder">
                        <input type="file" accept="image/*" name="image-upload" id="input" onChange={this.imageHandler} />
                        <label className="image-upload" htmlFor="input">
                            <img src={profileImg} alt="" id="img" className="img" htmlFor="input" />
                        </label>
                    </div>
                    <div className="block1">
                        <div className="form-floating very-cool-margin">
                            <input type="username" className="form-control" id="Username" placeholder="text" required></input>
                            <label htmlFor="floatingInput">Username</label>
                        </div>
                        <div className="form-floating very-cool-margin">
                            <input type="username" className="form-control" id="Nickname" placeholder="text" required></input>
                            <label htmlFor="floatingInput">Nickname</label>
                        </div>
                        <div className="form-floating very-cool-margin">
                            <input type="password" className="form-control" id="Password1" placeholder="Password" minLength="8" required></input>
                            <label htmlFor="floatingPassword">Password</label>
                        </div>
                        <div className="form-floating">
                            <input type="password" className="form-control" id="Password2" placeholder="Password" minLength="8" required></input>
                            <label htmlFor="floatingPassword">Confirm password</label>
                        </div>
                    </div>
                    <button type="sumbit" className="btn btn-success" onClick={this.validatePassword}> Register </button>
                    <div className="register-link">Not registered? <a href="/" className="link-success">Click here</a> to login.</div>
                </div>
            </div>
        );
    }
}

export default RegisterPage;