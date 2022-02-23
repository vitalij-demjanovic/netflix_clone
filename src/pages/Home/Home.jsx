import React, {useState} from 'react';
import { connect } from "react-redux";
import './Home.css'
import NavHome from "../../components/NavMenu/NavHome";
import {getRandom} from "../../store/actions";
import RandomMovies from "../../components/Movies/RandomMovies";
import FindMovies from "../../components/Movies/FindMovies";
import TVShov from "../../components/Movies/TVShow";
import TrendingMovies from "../../components/Movies/TrendingMovies";
import TVShow from "../../components/Movies/TVShow";


const Home = (props) => {

    const name = () => {
        console.log('pme')
    }

    return (
        <div className='home'>
            <NavHome/>
            <div className="container">
                { props.resultFind.length !== 0
                    ?
                    <FindMovies/>
                    :
                    <div>
                        <TrendingMovies/>
                        <TVShow/>
                        <RandomMovies/>
                    </div>
                }
            </div>
        </div>
    );
};

export default connect(
    (state) => ({
        resultFind: state.find.resultFind,
    }),
    {getRandom}
)(Home);