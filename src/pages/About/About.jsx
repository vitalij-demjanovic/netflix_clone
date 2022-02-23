import React from 'react';
import './About.css'
import NavAbout from '../../components/NavMenu/NavAbout'

const About = () => {
    return (
        <div className='about-page'>
            <NavAbout/>
            <div className="about-content">
                <h1 className="content_title">
                    Unlimited movies, TV shows, and more.
                </h1>
                <h3 className="content-sub">
                    Watch anywhere. Cancel anytime.
                </h3>
                <p className="content-paragraph">
                    Ready to watch? Enter your email to create or restart your membership.
                </p>
                <div className="label-wrapper">
                    <label className="content_label">
                        <input type="email" name='email' placeholder='User Name'/>
                        <button className='label-btn'>
                            Get Stared
                        </button>
                    </label>
                </div>
            </div>
        </div>
    );
};

export default About;