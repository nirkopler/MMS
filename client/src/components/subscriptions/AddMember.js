import React, {useState} from 'react';
import axios from 'axios';

const AddMember = () => {
    const [addMemberData, setAddMemberData] = useState({
        full_name: null,
        email: null,
        city: null
    })

    const handleSubmit = async(e) => {
        e.preventDefault();
        await axios.post('http://localhost:8000/api/members', addMemberData)
        console.log( `member ${addMemberData.full_name} added!`)
    }

    return (
        <div>
            <h1>Add Movie</h1>
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