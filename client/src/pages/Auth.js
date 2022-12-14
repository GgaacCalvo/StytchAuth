import axios from "axios";
import React, { useEffect } from "react";
import { Navigate, useSearchParams} from "react-router-dom"
import Cookies from "universal-cookie"

function Auth() {
    const [searchParams] = useSearchParams();
    const cookie = new Cookies()



    useEffect(()=>{
        axios.post("http://localhost:3001/auth", {token: searchParams.get("token"),}).then((response) =>{
        cookie.set("sessionToken", response.data)
    
    })
    })
    return(
        <Navigate to="/" replace />
        
    )

}

export default Auth