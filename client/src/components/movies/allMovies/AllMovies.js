import './allMovies.css'
import React, { useEffect, useState } from "react";
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
        <div style={{
            margin: "10px",
            padding: '5px',
            border: '1px solid blue'
        }}>
            <h4>{movie.name}</h4>
            <h4>{movie.year_premierd}</h4>
            <h4>{movie.geners}</h4>
            <img src={movie.image} alt={movie._id} />
        </div>
    )
}

const AllMovies = () => {
    const [moviesData, setMoviesData] = useState([])

    useEffect(() => {
        const getAllMoviesData = async() => {
            const moviesData = await axios.get("http://localhost:8000/api/movies");
            setMoviesData(moviesData.data);
        }
        getAllMoviesData();
    }, [])

    return (
        <div className='movies-main-container'>
            <h1>Movies Main Page</h1>
            <div className='movies-main-switch-container'>
                {
                    moviesData.map( movie => {
                        return <MovieBox movie={movie} key={movie._id} />
                    })
                }
            </div>
        </div>
    )
}

export default AllMovies