import React from 'react';
import './LofginForm.css'
import {connect} from "react-redux";
import {authenticate, logIN} from "../../store/actions";
import logo from "../../assets/img/640px-Netflix_2015_logo.svg.png";

const LoginForm = (props) => {

    const authenticate = (event) => {
        event.preventDefault()
        const { username, password} = event.target
        console.log(username.value, password.value)
        props.authenticate(username.value, password.value)
    }

    return (
        <form className='login-form' onSubmit={authenticate}>
            <img src={logo} alt="netflix" className='form_logo'/>
            <span className="erro-valid" style={{display: !props.error ? 'none' : 'block'}}>
                Sorry, we can't find an account with this user. Please try again or create a new account.
            </span>
            <input type="text" name='username'/>
            <input type="password" name='password'/>
            <button type='submit' className='form-btn'>
                    <span>Sign In</span>
            </button>
        </form>
    );
};

export default connect((state) => ({
        isLoggedIn: state.auth.isLoggedIn,
        token: state.auth.token,
        error: state.auth.error
    }),
    {logIN, authenticate})
(LoginForm);