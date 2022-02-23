import React, {useEffect} from 'react';
import {connect} from "react-redux";
import Movie from "./Movie";
import {getTrending} from "../../store/actions";

const TrendingMovies = (props) => {
    const pathImage = 'https://image.tmdb.org/t/p/w500'
    const movies = props.trendingList || []

    useEffect(() => {
        props.getTrending()
    }, [])


    return (
        <div className='movies-wrapper'>
            <h1 className='container-title'>
                Trending Today
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
        trendingList: state.trending.trendingList
    }),
    {getTrending}
)(TrendingMovies);