import React, { useState } from "react";
import axios from 'axios'

function Login() {
    
    const [email, setEmail] = useState('')
    const login = () =>{
        axios.post("http://localhost:3001/login", { email }).then(()=>{
            console.log("ok")
        })
    }
    return(
        <div className="formContainer">
            <div className="titulo">
                <h1>Sign Up</h1>
            </div>
            <div className="body">
                <p>Enter your email to sign up.</p>
                <input type="email" placeholder="Email..." onChange={(e) =>{setEmail(e.target.value)}}/>
                <button onClick={login}>Login</button>
            </div>
        </div>
    )

}

export default Login