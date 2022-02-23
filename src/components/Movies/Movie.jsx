import React from 'react';
import './RandomMovies'
import ImgPreloader from "../Preloader/ImgPreloader";

const Movie = (props) => {
    return (
        <div className='movie'>
            {props.image === 'https://image.tmdb.org/t/p/w500null'
            ? <ImgPreloader/>
            : <img src={props.image} alt='movie' className='movie-img'/>}
            <div className="movie-detail">
                <h3 className='movie-name'>
                    {props.name}
                </h3>
                <span className='movie-popularity'>
                    {props.avarge}
                </span>
                <p className="movie-text">
                    {props.text}
                </p>
            </div>
        </div>
    );
};

export default Movie;
