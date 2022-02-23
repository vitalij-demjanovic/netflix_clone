import React from 'react';
import Movie from "./Movie";
import {connect} from "react-redux";

const FindMovies = (props) => {
    const pathImage = 'https://image.tmdb.org/t/p/w500'
    const movies = props.resultFind || []

    return (
        <div className='movies-wrapper'>
            <h1 className='container-title'>
                Result: "{props.changeFind}"
            </h1>
            <div className='movies-slider'>
                {movies.map((item) =>
                    <Movie
                        key={item.id}
                        image={pathImage + item.backdrop_path}
                        name={item.original_title}
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
        resultFind: state.find.resultFind,
        changeFind: state.find.changeFind,
    }),
)(FindMovies);