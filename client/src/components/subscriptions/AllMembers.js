import React, { useEffect, useState } from "react";
import axios from 'axios';
import useGlobalState from '../GlobalState'
import { useHistory } from "react-router";


const MemberBox = ({ member, subscriptions }) => {
    const history = useHistory();
    const [showAddSubscriptions, setShowAddSubscriptions] = useState(false);
    const [subscribeToMovieData, setSubscribeToMovieData] = useState({
        movie_id: null,
        member_id: member._id,
        date: null
    })
    const [moviesData, setMoviesData] = useGlobalState('moviesData');
    const [subscriptionsData, setSubscriptionsData] = useGlobalState('subscriptionsData');
    const [membersData, setMembersData] = useGlobalState('membersData');

    const subscriptionsList = (
        <ul style={{border:'1px solid grey'}}>
            {subscriptions.map(s => {
                return <li>{moviesData.find(movie => movie._id === s.movie_id)?.name} - {s.date}</li>
            })}
        </ul>
    )

    const handleSubmitSubscribe = async(e) => {
        e.preventDefault();
        try {
            const addedSub = await axios.post('http://localhost:8000/api/subscriptions', subscribeToMovieData)
            console.log(addedSub)
            setSubscriptionsData([...subscriptionsData, addedSub.data])
            console.log( `${addedSub.data.member_id} subscribe to movie ${addedSub.data.movie_id}`);
        } catch(err) {
            alert('server error try later')
            console.error(err);
        }
    }

    const handleEditMemberBtn = (memberId) => {
        history.push(`/main/subscriptions/editMember/${memberId}`);
    }

    const handleDeleteMemberBtn = async(memberId) => {
        try {
            await axios.delete(`http://localhost:8000/api/members/${memberId}`)
            setMembersData(membersData.filter((member) => member._id !== memberId ))
            console.log( `member ${memberId} deleted!`)
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

            <input type='button' value='add subscription' onClick={() => {setShowAddSubscriptions(!showAddSubscriptions); }} />
            <h4>{member.full_name}</h4>
            <h4>{member.email}</h4>
            <h4>{member.city}</h4>
            <input type='button' value='Edit' onClick={() => handleEditMemberBtn(member._id)} />
            <input type='button' value='Delete' onClick={() => handleDeleteMemberBtn(member._id)} />
            {showAddSubscriptions && <div>
                    <form onSubmit={(e) => handleSubmitSubscribe(e)}>
                        <span>Movie: </span>
                        <select onChange={(e) => setSubscribeToMovieData({...subscribeToMovieData, movie_id: e.target.value})}>
                            {moviesData.map((movie) => {return <option key={`sel-mov-${movie._id}`} value={movie._id}>{movie.name}</option>})}
                        </select>
                        <input type='date' onChange={(e) => setSubscribeToMovieData({...subscribeToMovieData, date: e.target.value})} />
                        <input type='submit' value='subscribe' />
                    </form>
                </div>}
            {subscriptionsList}
        </div>
    )
}

const AllMembers = () => {
    const [membersData, setMembersData] = useGlobalState('membersData')
    const [subscriptionsData, setSubscriptionsData] = useGlobalState('subscriptionsData')

    useEffect(() => {
        const getAllMembersData = async() => {
            const membersData = await axios.get("http://localhost:8000/api/members");
            setMembersData(membersData.data);
        }
        
        const getAllSubscriptionsData = async() => {
            const subscriptionsData = await axios.get("http://localhost:8000/api/subscriptions");
            setSubscriptionsData(subscriptionsData.data)
        }

        getAllMembersData();
        getAllSubscriptionsData();
    }, [])

    return (
        <div className='movies-main-container'>
            <h1>All Members Page</h1>
            <div className='movies-main-switch-container'>
                {
                    membersData.map( member => {
                        const subData = subscriptionsData.filter(s => s.member_id === member._id);
                        return <MemberBox member={member} subscriptions={subData} key={member._id} />
                    })
                }
            </div>
        </div>
    )
}

export default AllMembers