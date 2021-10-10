import styles from './login.module.css'
import React, { useState } from "react";
import axios from 'axios';
import { useHistory } from 'react-router';
import useGlobalState from '../GlobalState';

const Login = () => {
    const [username, setUsername] = useGlobalState('username')
    const [formData, setFormData] = useState({username: null, password: null})
    const [logErrorMessage, setLogErrorMessage] = useState("")
    const history = useHistory();

    const handleSubmit = async(e) => {
        e.preventDefault();
        try {
            // try to login
            const loginAttempt = await (await axios.post('http://localhost:8000/api/users/', formData)).data;
            console.log(loginAttempt)
            if(loginAttempt.success) {
                // TODO:: add globa state validation
                // go to main
                setUsername(formData.username);
                history.push('/main/movies');
            } else {
                setLogErrorMessage(loginAttempt.message);
            }

        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div className={styles.container}>
            <h1>Login Page</h1>
            <form onSubmit={handleSubmit} className={styles.login_form}>
                
                <span>username: </span>
                <input type='text' placeholder='username' onChange={(e) => setFormData({...formData, username: e.target.value})} />
                
                <span>password: </span>
                <input type='text' placeholder='password' onChange={(e) => setFormData({...formData, password: e.target.value})} />

                <input type='submit' value='login' className={styles.login_btn} />
            </form>
            { logErrorMessage.length > 0 && <p className={styles.login_error}>{logErrorMessage}</p>}
        </div>
    )
}

export default Login