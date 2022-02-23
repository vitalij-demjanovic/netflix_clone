import React, { useState } from 'react';
import { connect } from "react-redux";
import {getFind, logOut, nullFind} from "../../store/actions";
import classNames from "classnames";
import styles from './NavMenu.css'
const cx = classNames.bind(styles);

const NavHome = (props) => {
    const [isActive, SetIsActive] = useState(true)
    const [mobile, SetMObile] = useState(false)

    const ReloadPage = () => {
        window.location.reload()
    }

    const UnAuthorization = (event) => {
        props.logOut()
        localStorage.clear()
    }

    const handleFindChange = event => {
        const word = event.target
        if(word.value.length > 2){
            props.getFind(word.value)
        } else if (word.value.length < 2) {
            props.nullFind()
        }
    };

    return (
        <div className='nav-home'>
            <div className='menu'>
                <div className='nav-logo' onClick={ReloadPage}/>
                <div className="menu-item">
                    <div className="nav-find">
                        <div className="find-magnifier" onClick={() => {
                            SetIsActive(!isActive)
                        }} />
                        <input
                            type="text"
                            name='name'
                            onChange={handleFindChange}
                            className={cx(
                            'find-input',
                            !isActive
                            ? 'active'
                            : ''
                            )}/>
                    </div>
                    <button className='nav-btn' onClick={UnAuthorization}>Sign Out</button>
                    <button className='mobile-btn'
                            onClick={() => SetMObile(true)}
                            style={{opacity: mobile ? 0 : 1}}
                    />
                </div>
            </div>
            <div className={cx('mobile-menu', mobile ? 'active' : '')}>
                <button className='close-menu' onClick={() => SetMObile(false)}>X</button>
                <input type="text"
                       name='name'
                       onChange={handleFindChange}
                       className='find-input-mobile'
                />
                <button className='out-btn' onClick={UnAuthorization}>Sign out</button>
            </div>
        </div>
    );
};

export default connect(
    null,
    {logOut, getFind, nullFind}
)(NavHome);