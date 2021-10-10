import './allMovies.css'
import React, { useEffect, useState } from "react";
import axios from 'axios';
import useGlobalState from '../../GlobalState'
import { useHistory } from 'react-router';

const MovieBox = ({ movie, subscriptions }) => {
    const history = useHistory();
    const [membersData, setMembersData] = useGlobalState('membersData');
    const [moviesData, setMoviesData] = useGlobalState('moviesData');
    const subscriptionsList = (
        <ul>
            {subscriptions.map(s => {
                return <li>{membersData.find(member => member._id === s.member_id)?.full_name} {s.date}</li>
            })}
        </ul>
    )

    const handleEditMovieBtn = (movieId) => {
        history.push(`/main/movies/editMovie/${movieId}`);
    }

    const handleDeleteMovieBtn = async(movieId) => {
        try {
            await axios.delete(`http://localhost:8000/api/movies/${movieId}`)
            setMoviesData(moviesData.filter((movie) => movie._id !== movieId ))
            console.log( `movie ${movieId} deleted!`)
        } catch(err) {
            alert('server error try later')
            console.error(err);
        }
    }

    return (
        <div style={{
            margin: "10px",
            padding: '5px',
            border: '1px solid blue'
        }}>
            <h4>{movie.name} {movie.year_premiered}</h4>
            <h4>{movie.geners}</h4>
            <img src={movie.image} alt={movie._id} />
            {subscriptionsList}
            <input type='button' value='Edit' onClick={() => handleEditMovieBtn(movie._id)} />
            <input type='button' value='Delete' onClick={() => handleDeleteMovieBtn(movie._id)} />
        </div>
    )
}

const AllMovies = () => {
    const [moviesData, setMoviesData] = useGlobalState('moviesData')
    const [subscriptionsData, setSubscriptionsData] = useGlobalState('subscriptionsData');
    const [membersData, setMembersData] = useGlobalState('membersData');

    useEffect(() => {
        const getAllMoviesData = async() => {
            const moviesData = await axios.get("http://localhost:8000/api/movies");
            setMoviesData(moviesData.data);
        }
        
        const getAllSubscriptionsData = async() => {
            const subscriptionsData = await axios.get("http://localhost:8000/api/subscriptions");
            setSubscriptionsData(subscriptionsData.data)
        }

        const getAllMembersData = async() => {
            const membersData = await axios.get("http://localhost:8000/api/members");
            setMembersData(membersData.data);
        }

        getAllMoviesData();
        getAllSubscriptionsData();
        getAllMembersData();
    }, [])

    return (
        <div className='movies-main-container'>
            <h1>Movies Main Page</h1>
            <div className='movies-main-switch-container'>
                {
                    moviesData.map( movie => {
                        const subData = subscriptionsData.filter(s => s.movie_id === movie._id);
                        return <MovieBox movie={movie} subscriptions={subData} key={movie._id} />
                    })
                }
            </div>
        </div>
    )
}

export default AllMovies