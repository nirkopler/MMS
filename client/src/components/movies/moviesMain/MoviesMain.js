import './moviesMain.css'
import React, { useState } from "react";
import axios from 'axios';

const SubscriptionsBox = ({ movieId }) => {
    // get subscriptions data by movie

    return (
        <div>
            {/* user name + link */}
            {/* date */}
        </div>
    )
} 

const MovieBox = ({ movie }) => {

    return (
        <div className='movie-box-container'>
            <h4>{movie.name}</h4>
            <h4>{movie.year_premierd}</h4>
            <h4>{movie.geners}</h4>
            <img src={movie.image} alt={movie._id} />
        </div>
    )
}

const MoviesMain = () => {
    return (
        <div className='main-movies-conatiner'>
            <h1>Movies Main Page</h1>
        </div>
    )
}

export default MoviesMain