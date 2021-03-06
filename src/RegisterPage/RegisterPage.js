import './RegisterPage.css';
import { useState } from 'react';
import React from 'react';
import { addUserToData, validateUser, userDataBase } from '../DataBase/DataBase';
import { Link } from 'react-router-dom';

export function RegisterPage(params) {

    let [profileImg, setProfileImg] = useState('https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png')
    function imageHandler(e) {
        setProfileImg(URL.createObjectURL(e.target.files[0]))

    };

    function validatePassword(e) {
        e.preventDefault();
        var username = document.getElementById("Username").value;
        var nickname = document.getElementById("Nickname").value;
        var password = document.getElementById("Password1").value;
        var confirm_password = document.getElementById("Password2").value;

        if (profileImg === 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png') {
            alert("please add an image");
            return;
        }

        if (username.length === 0 || nickname.length === 0 || password.length === 0
            || confirm_password.length === 0) {
            alert("Please fill all fields properly!");
            return;
        }

        if (password.length < 8 && confirm_password.length < 8) {
            alert("Password too short! Please enter 8 characters or more");
            return;
        }

        if (password !== confirm_password) {
            alert("Passwords Don't Match");
            return;

        }

        else {
            if (userDataBase.has(username)) {
                if (validateUser(username, password)) {
                    alert("The user is already exist!");
                    return;
                }
            }
            addUserToData(username, nickname, password, profileImg);
            alert("You have successfully registered! go back to login page");
        }
        return;
    }

    return (
        <form>
            <div className="container">
                <div className="outterBlock">
                    <div className="img-holder"  >
                        <input type="file" accept="image/*" name="image-upload" id="input" onChange={imageHandler} ></input>
                        <label className="image-upload" htmlFor="input" >
                            <img src={profileImg} alt="" id="img" className="img" htmlFor="input" />
                        </label>
                    </div>
                    <div className="block1">
                        <div className="form-floating very-cool-margin">
                            <input type="username" className="form-control" id="Username" placeholder="text" ></input>
                            <label htmlFor="floatingInput">Username</label>
                        </div>
                        <div className="form-floating very-cool-margin">
                            <input type="username" className="form-control" id="Nickname" placeholder="text" ></input>
                            <label htmlFor="floatingInput">Nickname</label>
                        </div>
                        <div className="form-floating very-cool-margin">
                            <input type="password" className="form-control" id="Password1" placeholder="Password" minLength="8" ></input>
                            <label htmlFor="floatingPassword">Password</label>
                        </div>
                        <div className="form-floating">
                            <input type="password" className="form-control" id="Password2" placeholder="Password" minLength="8"></input>
                            <label htmlFor="floatingPassword">Confirm password</label>
                        </div>
                    </div>
                    <button type="sumbit" className="btn btn-success" onClick={validatePassword}> Register </button>
                    <div className="register-link">Already registered? <Link to="/" className="link-success">Click here</Link> to login.</div>
                </div>
            </div>
        </form>
    );
}

export default RegisterPage;