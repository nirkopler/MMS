import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { useParams } from 'react-router';
import useGlobalState from '../GlobalState';

const Member = () => {
    const { memberId } = useParams();
    const [memberData, setMemberData] = useState({
        full_name: null,
        email: null,
        city: null
    })
    const [subscriptions, setSubscriptions] = useState([]);
    const [moviesData, setMoviesData] = useGlobalState('moviesData');

    useEffect(() => {
        const getMemberData = async() => {
            const memberData = await axios.get(`http://localhost:8000/api/members/${memberId}`);
            setMemberData(memberData.data)
        }
        const getMovieSubscriptionsData = async() => {
            const subscriptionsData = await axios.get("http://localhost:8000/api/subscriptions");
            setSubscriptions(subscriptionsData.data);
        }

        getMemberData();
        getMovieSubscriptionsData();
    }, [])

    const subscriptionsList = (
        <ul>
            {subscriptions.filter(s => s.member_id === memberId).map(s => {
                return <li>{moviesData.find(movie => movie._id === s.movie_id)?.name} {s.date}</li>
            })}
        </ul>
    )

    return (
        <div style={{
            margin: "10px",
            padding: '5px',
            border: '1px solid blue'
        }}>
            <h4>Full Name: {memberData.full_name}</h4>
            <h4>Email: {memberData.email}</h4>
            <h4>City: {memberData.city}</h4>
            {subscriptionsList}
        </div>
    )
}

export default Member