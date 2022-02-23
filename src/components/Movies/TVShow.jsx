import React, {useEffect} from 'react';
import Movie from "./Movie";
import {connect} from "react-redux";
import {getTVShow} from "../../store/actions";

const TvShow = (props) => {
    const pathImage = 'https://image.tmdb.org/t/p/w500'
    const movies = props.tvShowvList || []

    useEffect(() => {
        props.getTVShow()
    }, [])


    return (
        <div className='movies-wrapper'>
            <h1 className='container-title'>
                TV Shows
            </h1>
            <div className='movies-slider'>
                {movies.map((item) =>
                    <Movie
                        key={item.id}
                        image={pathImage + item.backdrop_path}
                        name={item.name}
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
        tvShowvList: state.tvshow.tvShowvList
    }),
    {getTVShow}
)(TvShow);