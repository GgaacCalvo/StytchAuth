import axios from "axios";
import React from "react";
import Cookies from "universal-cookie";
import { Navigate, useNavigate } from "react-router-dom"
function Home() {
    const navigate = useNavigate()
    const cookie = new Cookies()
    const testAPI = async () => {
        // axios.post("http://localhost:3001/test", {}, {headers: {sessiontoken: cookie.get("sessionToken").session_token}}).then((resp) =>{
        //     alert(resp.data)
        // }).catch((err)=>{
        //     <Navigate to="/error" replace />
        // }
        try {
            let respuesta = await axios.post("http://localhost:3001/test", {}, {headers: {sessiontoken: cookie.get("sessionToken").session_token}})
            navigate("/success")
        } catch (error) {
          navigate("/error")  
        }
    }
    return(
        <div className="homeContainer">
            <button onClick={testAPI}> Test API</button>
        </div>
    )

}

export default Home