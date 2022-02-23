import React, {useEffect} from 'react';
import './Movies.css'
import { connect } from "react-redux";
import {getRandom} from "../../store/actions";
import Movie from "./Movie";
import {serverDetail} from "../../api/api";


const RandomMovies = (props) => {

    const pathImage = 'https://image.tmdb.org/t/p/w500'
    const movies = props.randomList || []

    useEffect(() => {
        props.getRandom()
    }, [])

    return (
        <div className='movies-wrapper'>
            <h1 className='container-title'>
                Random Movies
            </h1>
            <div className='movies-slider'>
                {movies.map((item) =>
                    <Movie
                        key={item.id}
                        image={pathImage + item.backdrop_path}
                        name={item.title}
                        avarge={item.vote_average}
                        text={item.overview}
                    />
                )}
            </div>
        </div>
    );
};

export default connect(
    (state) => ({
        randomList: state.random.randomList,
        token: state.auth.token
    }),
    {getRandom}
)(RandomMovies);