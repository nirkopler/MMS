import React, { useEffect, useState } from "react";
import axios from 'axios';

const MemberBox = ({ movie: member, subscriptions }) => {

    const subscriptionsList = (
        <ul>
            {subscriptions.map(s => {
                return <li>{s.movie_id} {s.date}</li>
            })}
        </ul>
    )

    return (
        <div style={{
            margin: "10px",
            padding: '5px',
            border: '1px solid blue'
        }}>
            <h4>{member.full_name}</h4>
            <h4>{member.email}</h4>
            <h4>{member.city}</h4>
            {subscriptionsList}
        </div>
    )
}

const AllMembers = () => {
    const [membersData, setMembersData] = useState([])
    const [subscriptionsData, setSubscriptionsData] = useState([])

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
            <h1>Members Main Page</h1>
            <div className='movies-main-switch-container'>
                {
                    membersData.map( member => {
                        const subData = subscriptionsData.filter(s => s.member_id = member._id);
                        return <MemberBox movie={member} subscriptions={subData} key={member._id} />
                    })
                }
            </div>
        </div>
    )
}

export default AllMembers