import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useAuth } from "./auth"

const Login=()=>{
    const[user,setUser]=useState("")
    const{login} =useAuth()
    const navigate=useNavigate()
    return<center>
        <br />
        <h1>Login page</h1>
        <br />
        <label htmlFor="name">User name </label>
        
        <input type="text" name="name" id="name" placeholder="Enter your name" onChange={(e)=>setUser(e.target.value)}/>
        <button style={{cursor:"pointer"}} onClick={()=>{
            login(user)
            navigate("/",{replace:true})

        }}>Login</button>
    </center>
}
export default Login