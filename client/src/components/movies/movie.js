import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { useParams } from 'react-router';
import useGlobalState from '../GlobalState';

const Movie = () => {
    const { movieId } = useParams();
    const [movieData, setMovieData] = useState({
        name: null,
        geners: null,
        year_premiered: null,
        image: null
    })
    const [subscriptions, setSubscriptions] = useState([]);
    const [membersData, setMembersData] = useGlobalState('membersData');

    useEffect(() => {
        const getMovieData = async() => {
            const movieData = await axios.get(`http://localhost:8000/api/movies/${movieId}`);
            setMovieData(movieData.data)
        }
        const getMovieSubscriptionsData = async() => {
            const subscriptionsData = await axios.get("http://localhost:8000/api/subscriptions");
            setSubscriptions(subscriptionsData.data);
        }

        getMovieData();
        getMovieSubscriptionsData();
    }, [])

    const subscriptionsList = (
        <ul>
            {subscriptions.filter(s => s.movie_id === movieId).map(s => {
                return <li>{membersData.find(member => member._id === s.member_id)?.full_name} {s.date}</li>
            })}
        </ul>
    )

    return (
        <div style={{
            margin: "10px",
            padding: '5px',
            border: '1px solid blue'
        }}>
            <h4>Movie: {movieData.name} | Year: {movieData.year_premiered}</h4>
            <h4>Geners: {movieData.geners}</h4>
            <img src={movieData.image} alt={movieData._id} />
            {subscriptionsList}
        </div>
    )
}

export default Movie