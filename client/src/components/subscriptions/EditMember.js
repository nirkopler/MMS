import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { useParams, useHistory } from 'react-router';

const EditMember = () => {
    const history = useHistory();
    const { memberId } = useParams();
    const [editMemberData, setEditMemberData] = useState({
        full_name: null,
        email: null,
        city: null
    })

    const handleSubmit = async(e) => {
        e.preventDefault();
        try {
            const editedMember = await axios.put(`http://localhost:8000/api/members/${memberId}`, editMemberData)
            console.log( `member ${editMemberData.full_name} edited!`)
            history.push('/main/subscriptions');
        } catch(err) {
            alert('server error try later')
            console.error(err);
        }
    }

    useEffect(() => {
        const getMemberData = async() => {
            const memberData = await axios.get(`http://localhost:8000/api/members/${memberId}`);
            setEditMemberData(memberData.data)
        }

        getMemberData();
    }, [])

    return (
        <div>
            <h1>Edit Member - {memberId}</h1>
            <form onSubmit={(e) => {handleSubmit(e)}} style={{
                display: 'flex',
                flexDirection: 'column'
            }}>
                
                <span>Name: </span>
                <input type='text' value={editMemberData.full_name} placeholder='name' onChange={(e) => setEditMemberData({...editMemberData, full_name: e.target.value})} />

                <span>Email: </span>
                <input type='text' value={editMemberData.email} placeholder='email' onChange={(e) => setEditMemberData({...editMemberData, email: e.target.value})} />

                <span>City: </span>
                <input type='text' value={editMemberData.city} placeholder='city' onChange={(e) => setEditMemberData({...editMemberData, city: e.target.value})} />

                <input type='submit' value='Edit Member' />
            </form>
        </div>
    )
}

export default EditMember