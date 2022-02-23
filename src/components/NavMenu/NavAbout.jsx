import React from 'react';
import { Link } from "react-router-dom";
import './NavMenu.css'

const NavAbout = () => {
    return (
        <div className='nav-about'>
            <div className='nav-logo'/>
            <button className='nav-btn-about'>
                <Link to="/signin">Sign In</Link>
            </button>
        </div>
    );
};

export default NavAbout;