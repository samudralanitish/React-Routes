import { Navigate } from "react-router-dom"
import { useAuth } from "./auth"

export const PrivateRoute=({children})=>{
    const{name}=useAuth()
    if(!name){
        return <Navigate to={"/login"}></Navigate>
    }
    return children
}