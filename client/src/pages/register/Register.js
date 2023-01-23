import React from 'react';
import { Link } from 'react-router-dom';
import "./register.css"

const Register = () => {
    return (
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">Thought Bubble</h3>
                    <img src="assets/login.jpg" alt="" className="loginImg" />
                    <span className="loginDesc">
                        Share your thoughts and connect with your friends with Thought Bubble.
                    </span>
                </div>
                <div className="loginRight">
                    <div className="loginBox">
                        <input placeholder="Username" className="loginInput" />
                        <input placeholder="Email" className="loginInput" />
                        <input placeholder="Password" className="loginInput" />
                        <input placeholder="Confirm Password" className="loginInput" />
                        <button className="loginButton">Sign Up</button>

                        <Link to='/login'><button className="loginRegisterButton">
                            Log into your account
                        </button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
