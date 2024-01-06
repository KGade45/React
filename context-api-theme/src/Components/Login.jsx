import React, { useState, useContext } from 'react'
import UserContext from '../Context/UserContext';

function Login() {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const {setUser} = useContext(UserContext);

    const handleSubmit = (e)=>{
        e.preventDefault();
        setUser({userName, password})
    };

    return (
        <div>
            <h2>Login</h2>
            <input placeholder='username' type='text' onChange={(e)=> setUserName(e.target.value)}/>
            <input placeholder='password' type='text' onChange={(e) => setPassword(e.target.value)} />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default Login
