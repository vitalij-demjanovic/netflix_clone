import React from 'react';
import './LogIn.css'
import logo from '../../assets/img/640px-Netflix_2015_logo.svg.png'
import LoginForm from "../../components/LoginForm/LoginForm";


const LogIn = () => {



    return (
        <div className='login-page'>
            <header className='login-header'>
                <img src={logo} alt="netflix" className='header_logo'/>
            </header>
                <LoginForm/>
        </div>
    );
};

export default LogIn;