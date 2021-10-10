import React, {useState} from 'react';
import axios from 'axios';
import useGlobalState from '../GlobalState';
import {useHistory} from 'react-router';

const AddMember = () => {
    const history = useHistory();
    const [membersData, setMembersData] = useGlobalState('membersData')
    const [addMemberData, setAddMemberData] = useState({
        full_name: null,
        email: null,
        city: null
    })

    const handleSubmit = async(e) => {
        e.preventDefault();
        try {
            const addedMember = await axios.post('http://localhost:8000/api/members', addMemberData)
            setMembersData([...membersData, addedMember.data])
            console.log( `member ${addedMember.data.full_name} added!`)
            history.push('/main/subscriptions');
        } catch(err) {
            alert('server error try later')
            console.error(err);
        }
    }

    return (
        <div>
            <h1>Add Member</h1>
            <form onSubmit={(e) => {handleSubmit(e)}} style={{
                display: 'flex',
                flexDirection: 'column'
            }}>
                
                <span>Name: </span>
                <input type='text' placeholder='name' onChange={(e) => setAddMemberData({...addMemberData, full_name: e.target.value})} />

                <span>Email: </span>
                <input type='text' placeholder='email' onChange={(e) => setAddMemberData({...addMemberData, email: e.target.value})} />

                <span>City: </span>
                <input type='text' placeholder='city' onChange={(e) => setAddMemberData({...addMemberData, city: e.target.value})} />

                <input type='submit' value='Add Member' />
            </form>
        </div>
    )
}

export default AddMember